// Dependencies
const express = require("express");
const User = require("../model/user.model");
const Note = require("../model/note.model");
const authUtil = require("../util/auth.util");

// Custom constants
const UserRouter = express.Router();

// Routes

UserRouter.post("/update", authUtil.verifyToken, (req, res) => {
  const userId = req.body.userId;
  const userUpdateDetails = req.body;
  User.findById(userId)
    .then(user => {
      console.log(`User Retrieved : ${user}`);
      if (user.id === userId) {
        // Legitimate User
        if (
          userUpdateDetails.username &&
          user.username !== userUpdateDetails.username
        ) {
          // User has requested to change username. Disallow.
          return res.json(400).json({ message: "Username cannot be changed." });
        }

        // username, password, notes
        // will remain unchanged.
        // Only mutable properties of user are updated.
        user.name = userUpdateDetails.name || user.name;
        user.email = userUpdateDetails.email || user.email;
        return user;
      } else {
        return res.status(404).json({ message: "User is not authenticated." });
      }
    })
    .then(updatedUser => {
      console.log(`res : ${updatedUser}`);
      updatedUser.save().then(result => {
        console.log("User Updated");
        result.password = null;
        return res.status(200).json(result);
      });
    })
    .catch(err => {
      console.error(err);
      return res.status(400).send({ message: "Unable to update user." });
    });
});

UserRouter.get("/delete", authUtil.verifyToken, (req, res) => {
  const userId = req.body.userId;
  User.findByIdAndRemove(userId)
    .then(result => {
      if (!result) {
        // The token was valid. So, the userId was set in the request body.
        // But user is already removed from the application's system.
        res.status(404).json({ message: "User is not registered." });
      }
      console.log(`user removed. ${result}`);
      res.status(200).json({ message: "User is removed from the system." });
    })
    .catch(err => {
      console.error(`error occurred while removing user. ${err}`);
      res.status(500).json({ message: "Error occurred while removing user." });
    });
});

UserRouter.get("/:id", authUtil.verifyToken, (req, res) => {
  const userId = req.params.id;
  User.findById(userId)
    .populate("note.id")
    .then(user => {
      if (!user) {
        res.status(404).json({ message: "User is not registered" });
      }
      notesPromiseMap = user.notes.map(noteId => Note.findById(noteId));
      Promise.all(notesPromiseMap).then(notesContent => {
        const userData = {
          username: user.username,
          name: user.name,
          notes: notesContent,
          email: user.email
        };
        res.status(200).json({ user: userData });
      });
    })
    .catch(err => {
      console.error(`Error occurred : ${err}`);
      res.status(500).json({ message: "Internal Server Error" });
    });
});

UserRouter.post("/notes/add", authUtil.verifyToken, (req, res) => {
  const userId = req.body.userId;
  let tempUser = null,
    newNote = null;
  tempNoteSaveResult = null;

  User.findById(userId)
    .populate("notes.id")
    // .execPopulate()
    .then(user => {
      if (!user) {
        res.status(404).json({ message: "User is not registered." });
      }
      let reqNote = req.body.note;
      reqNote.author = userId;
      newNote = new Note(reqNote);
      tempUser = user;
      return newNote.save();
    })
    .then(noteSaveResult => {
      if (!noteSaveResult) {
        res
          .status(500)
          .json({ message: "Unable to save a new note at the moment." });
      }
      tempUser.notes.push(newNote.id);
      tempNoteSaveResult = noteSaveResult;
      return tempUser.save();
    })
    .then(userSaveResult => {
      if (!userSaveResult) {
        res.status(500).json({ message: "Internal Server Error." });
      }
      res.status(200).json({ note: tempNoteSaveResult });
    })
    .catch(err => {
      console.error(`error occurred. ${err}`);
      res.status(500).json({ message: err });
    });
});

module.exports = UserRouter;

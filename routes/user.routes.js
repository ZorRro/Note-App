// Dependencies
const express = require("express");
const User = require("../model/user.model");
const Note = require("../model/note.model");
const mongoose = require("mongoose");

// Custom constants
const UserRouter = express.Router();

// Routes

UserRouter.post("/update", (req, res) => {
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

UserRouter.get("/delete", (req, res) => {
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

UserRouter.get("/:id", (req, res) => {
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

UserRouter.post("/notes/add", (req, res) => {
  const userId = mongoose.Types.ObjectId.createFromHexString(req.body.userId);
  let tempUser = null,
    newNote = null;
  tempNoteSaveResult = null;

  User.findById(userId)
    .populate("notes", ["id"])
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
      tempUser.addNote(noteSaveResult.id);
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

UserRouter.delete("/notes/delete/:id", (req, res) => {
  const userId = req.body.userId;
  const noteId = req.params["id"];
  User.findById(userId)
    .populate("notes", ["id"])
    .then(user => {
      user.removeNote(noteId);
      user
        .save()
        .then(user => {
          console.log("After removing the note");
          res.sendStatus(204);
          Note.findByIdAndDelete(noteId)
            .then(deleteResult => {
              console.log("Successfully deleted note. Complete operation");
            })
            .catch(err => {
              console.error("Unable to delete note from NOTES.");
              return res.status(500);
            });
        })
        .catch(err => {
          console.error(err);
          return res.status(500);
        });
    })
    .catch(err => {
      console.error(err);
      return res.status(500);
    });
});

UserRouter.post("/notes/update", (req, res) => {
  // We are expecting the following info. in the req.body.note
  // note : {
  //  id: "string repr. of ObjectID",
  //  content: "new content to store."
  // }
  const reqNote = req.body.note;
  if (!(reqNote.id && reqNote.content)) {
    console.log("reqNote doesn't contain required info.");
    res.status(412).json({ message: "Request is not in proper format." });
  }
  Note.findById(reqNote.id)
    .then(note => {
      note.content = reqNote.content;
      return note;
    })
    .then(updatedNote => {
      updatedNote.save().then(result => {
        res.status(200).json({ note: updatedNote });
        console.log("Updated successfully.");
      });
    })
    .catch(err => {
      console.log("Update failed.");
      res.status(500).json({ error: err });
    });
});

module.exports = UserRouter;

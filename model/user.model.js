const mongoose = require("mongoose");
const NoteSchema = require("./note.model");

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "note"
    }
  ],
  activated: {
    type: Boolean,
    default: false
  }
});

User.methods.addNote = function(noteId) {
  this.notes.push(noteId);
};

User.methods.removeNote = function(noteId) {
  const toBeDeletedNoteId = mongoose.Types.ObjectId.isValid(noteId)
    ? noteId
    : mongoose.Types.ObjectId.createFromHexString(noteId);
  this.notes.splice(this.notes.indexOf(toBeDeletedNoteId), 1);
};

module.exports = mongoose.model("user", User);

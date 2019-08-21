const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 50,
    unique: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
    immutable: true,
    maxlength: 50
  },
  createdOn: {
    type: Date,
    required: true,
    default: new Date(),
    immutable: true
  },
  lastModified: {
    type: Date,
    required: false,
    default: new Date()
  },
  content: String
});

NoteSchema.index({ content: 1 });

module.exports = mongoose.model("note", NoteSchema);

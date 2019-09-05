var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
var NoteSchema = new Schema({

  noteText: String
});

// links above schema to Note Model
var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;

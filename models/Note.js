var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Create new schema for notes
var NoteSchema = new Schema({
  title: String,
  body: String
});

// Declare Schema as a model for mongoose
var Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;

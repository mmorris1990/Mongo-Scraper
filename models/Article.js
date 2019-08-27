var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Create a new schema for articles
var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
//   Object to store Note ID linking to Note model 
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// Declare Schema as a model for mongoose
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;

var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
var ArticleSchema = new Schema({
  headline: {
    type: String,
    required: true
  },

  url: {
    type: String,
    required: true
  },

  summary: {
    type: String,
    required: true
  },

  saved: {
    type: Boolean,
    default: false
  },

  // note object links to Note model to pair related notes to article
  note: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]
});

// links above schema to Article Model
var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;

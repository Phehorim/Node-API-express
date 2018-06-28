//imports mongoose (makes req to DB much easier)
const mongoose = require('mongoose');

//sets the model of the note in the database
const NoteSchema = mongoose.Schema({
  title: String,
  content: String
}, {
  timestamps: true
});


module.exports = mongoose.model('Note', NoteSchema);

module.exports = (app) => {

  // imports the functions (middlewares) from note.controller
  const notes = require('../controllers/note.controller.js');


  // calls the create function on post requests
  app.post('/notes', notes.create);


  // calls the findAll function on get requests WITHOUT ID
  app.get('/notes', notes.findAll);


  // calls the findOne function on get requests WITH ID
  app.get('/notes/:noteId', notes.findOne);


  // calls the update function on put requests (with id, ofc)
  app.put('/notes/noteId', notes.update);


  // calls the delete function on delete requests (with id, ofc)
  app.delete('/notes/noteId', notes.delete);
}

// all those comments are saying obvious things, it's just a way for me to get used to commenting my code

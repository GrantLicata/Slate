const NoteController = require('../controllers/note.controller')
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {
    //get all notes
    app.get('/api/allNotes', authenticate, NoteController.getAllNotes)
    //get one note
    app.get('/api/note/:id', authenticate, NoteController.getOneNote)
    //create new note
    app.post('/api/addNote', authenticate, NoteController.addNote)
    //update note
    app.put('/api/update/:id', authenticate, NoteController.updateNote)
    //delete note
    app.delete('/api/delete/:id', authenticate, NoteController.deleteNote)
}
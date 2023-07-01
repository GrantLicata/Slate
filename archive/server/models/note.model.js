const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    text: {
        type: String
    }
},{timestamps: true})

const Note = mongoose.model('Note', NoteSchema)
//The first parameter above defines what the schema will be called in our database, the second brings in the schema we created above.

module.exports = Note
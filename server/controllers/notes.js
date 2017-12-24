const Note = require('../models').Note
const NoteItem = require('../models').NoteItem

const msg = 'Note not found'

module.exports = {
  create (req, res) {
    return (
      Note.create({title: req.body.title})
      .then(note => res.status(201).send(note))
      .catch(error => res.status(400).send(error))
    )
  },
  list(req, res) {
    return (
      Note
      .findAll({
        include: [{
          model: NoteItem,
          as: 'noteItems'
        }]
      })
      .then(notes => res.status(200).send(notes))
      .catch(error => res.status(400).send(error))
    )
  },
  retrieve(req, res) {
    return Note
      .findById(req.params.noteId, {
        include: [{
          model: NoteItem,
          as: 'noteItems'
        }]
      })
      .then(note => {
        if (!note) {
          return res.status(404).send({
            message: msg
          })
        }
        return res.status(200).send(note)
      })
      .catch(error => res.status(400).send(error))
  },
  update(req, res) {
    return Note
      .findById(req.params.noteId, {
        include: [{
          model: NoteItem,
          as: 'noteItems'
        }]
      })
      .then(note => {
        if (!note) {
          return res.status(404).send({
            message: msg
          })
        }
        return note
          .update({
            title: req.body.title || note.title
          })
          .then(() => res.status(200).send(note))
          .catch((error) => res.status(400).send(error))
      })
      .catch((error) => res.status(400).send(error))
  },
  destroy(req, res) {
    return Note
      .findById(req.params.noteId)
      .then(note => {
        if (!note) {
          return res.status(400).send({
            message: msg
          })
        }
        return note
          .destroy()
          .then(() => res.status(200).send({
            message: 'Note deleted successfully.'
          }))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  }
}

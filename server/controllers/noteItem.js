const NoteItem = require('../models').NoteItem

module.exports = {
  create(req, res) {
    return (
      NoteItem.create({
        content: req.body.content,
        noteId: req.params.noteId
      })
      .then(noteItem => res.status(201).send(noteItem))
      .catch(error => res.status(400).send(error))
    )
  }
}

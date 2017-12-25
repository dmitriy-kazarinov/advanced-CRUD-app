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
  },
  update(req, res) {
    return NoteItem
      .find({
        where: {
          id: req.params.noteItemId,
          noteId: req.params.noteId
        }
      })
      .then(noteItem => {
        if (!noteItem) {
          return res.status(404).send({
            message: 'Note item not found'
          })
        }

        return noteItem
          .update({
            content: req.body.content || noteItem.content,
            complete: req.body.complete || noteItem.complete
          })
          .then(updatedNoteItem => res.status(200).send(updatedNoteItem))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  },
  destroy(req, res) {
    return NoteItem
      .find({
        where: {
          id: req.params.noteItemId,
          noteId: req.params.noteId
        }
      })
      .then(noteItem => {
        if (!noteItem) {
          return res.status(404).send({
            message: 'Note item not found'
          })
        }

        return noteItem
          .destroy()
          .then(() => res.status(200).send({
            message: 'Note item deleted successfully.'
          }))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  }
}

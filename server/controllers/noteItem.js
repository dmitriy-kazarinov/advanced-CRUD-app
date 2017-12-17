const NoteItem = require('../models').NoteItem

module.exports = {
  create(req, res) {
    return (
      NoteItem.create({
        content: req.body.content,
        todoId: req.params.noteId
      })
      .then(todoItem => res.status(201).send(todoItem))
      .catch(error => res.status(400).send(error))
    )
  }
}

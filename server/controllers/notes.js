const Note = require('../models').Note
const NoteItem = require('../models').NoteItem

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
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error))
    )
  }
}

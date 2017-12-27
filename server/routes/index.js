const notesController = require('../controllers').notes
const noteItemController = require('../controllers').noteItem

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Notes API!'
  }))

  app.post('/api/notes', notesController.create)
  app.get('/api/notes', notesController.list)

  app.get('/api/notes/:noteId', notesController.retrieve)
  app.put('/api/notes/:noteId', notesController.update)
  app.delete('/api/notes/:noteId', notesController.destroy)

  app.post('/api/notes/:noteId/items', noteItemController.create)
  app.put('/api/notes/:noteId/items/:noteItemId', noteItemController.update)
  app.delete('/api/notes/:noteId/items/:noteItemId', noteItemController.destroy)

  app.all('/api/notes/:noteId/items', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed'
    })
  )
}

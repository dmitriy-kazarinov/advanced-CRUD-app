const { Note } = require('../models')

module.exports = {
  async up (queryInterface, Sequelize) {
    const noteTest = await Note.findOne({
      where: {
        title: 'Test note'
      }
    })

    return queryInterface.bulkInsert('NoteItems', [{
      content: 'Test note item',
      complete: false,
      createdAt: Sequelize.fn('now'),
      updatedAt: Sequelize.fn('now'),
      noteId: noteTest.id
    }], {})
  },

  down (queryInterface) {
    return queryInterface.bulkDelete('NoteItems', null, {})
  }
}

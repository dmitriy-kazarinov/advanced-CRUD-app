const { Notes, NoteItems } = require('../models')

module.exports = {
  async up (queryInterface, Sequelize) {
    const notesTest = await Notes.findOne({
      where: {
        title: 'Test note'
      }
    })

    await NoteItems.bulkCreate([{
      content: 'Test note item',
      complete: false,
      createdAt: Sequelize.fn('now'),
      updatedAt: Sequelize.fn('now'),
      noteId: notesTest.id
    }])
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('NoteItems', null, {})
  }
}

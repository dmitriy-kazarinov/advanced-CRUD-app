module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notes', [{
      title: 'Test note',
      text: 'Test note text',
      createdAt: Sequelize.fn('now'),
      updatedAt: Sequelize.fn('now')
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Notes', null, {})
  }
}

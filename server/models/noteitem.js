module.exports = (sequelize, DataTypes) => {
  class NoteItem extends sequelize.Model {
    static associate ({ NoteItem }) {
      NoteItem.belongsTo(NoteItem, {
        foreignKey: 'noteId',
        onDelete: 'CASCADE'
      })
    }
  }

  NoteItem.init({
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize
  })

  return NoteItem
}

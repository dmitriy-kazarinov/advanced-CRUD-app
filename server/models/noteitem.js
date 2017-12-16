module.exports = (sequelize, DataTypes) => {
  const NoteItem = sequelize.define('NoteItem', {
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })

  NoteItem.associate = (models) => {
    NoteItem.belongsTo(models.Note, {
      foreignKey: 'todoId',
      onDelete: 'CASCADE'
    })
  }

  return NoteItem
}

module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Note.associate = (models) => {
    Note.hasMany(models.NoteItem, {
      foreignKey: 'noteId',
      as: 'noteItems'
    })
  }

  return Note
}

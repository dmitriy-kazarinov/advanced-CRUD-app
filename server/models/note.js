module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    text: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
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

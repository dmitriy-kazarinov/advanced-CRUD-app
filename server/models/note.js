module.exports = (sequelize, DataTypes) => {
  class Note extends sequelize.Model {
    static associate ({ Note }) {
      Note.hasMany(Note, {
        foreignKey: 'noteId',
        as: 'answers'
      })
    }
  }

  Note.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    text: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    }
  }, {
    sequelize
  })

  return Note
}

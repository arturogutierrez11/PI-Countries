const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    difficulty: {
        type: DataTypes.INTEGER,
        validate: {
          //Unicos valores permitidos
          min: 1,
          max: 5,
        },
        allowNull: false,
    },
    duration: {
        type: DataTypes.TIME,
       allowNull: false,
    },
    season: {
        type: DataTypes.ARRAY(DataTypes.ENUM({
            values: ['Verano', 'Otoño', 'Invierno', 'Primavera']
        })),
          allowNull: false
      },
    



  },
  {
    timestamps: false, // deshabilito los campos de creacion y actualizacion
    freezeTableName: true,
  }
  )
}
const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Activity",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        validate: {
          min: { args: [0], msg: "Dificulty must be between 0 and 5" },
          max: { args: [5], msg: "Dificulty must be between 0 and 5" },
        },
        allowNull: false,
      },
      duration: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      season: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Not null",
          },
          areEquals(value) {
            if (
              value !== "Winter" &&
              value !== "Spring" &&
              value !== "Autum" &&
              value !== "Summer"
            ) {
              throw "Season must be one of Spring, Autum, Summer or Winter";
            }
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );
};

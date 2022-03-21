"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class group_routine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  group_routine.init(
    {
      routine_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      editor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tag_name: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      contents: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "group_routine",
    }
  );
  return group_routine;
};

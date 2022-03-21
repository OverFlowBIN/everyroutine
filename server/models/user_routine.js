"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_routine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_routine.init(
    {
      list: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_cal_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      daily_check: {
        type: DataTypes.STRING, //list 길이와 같은 array
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "user_routine",
    }
  );
  return user_routine;
};

"use strict";
const { Model } = require("sequelize");
const user_routine = require("./user_routine");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      // user.belongsToMany(models.group_cal, { foreignKey: "user_id" });
      // user.belongsToMany(models.group_routine, { foreignKey: "user_id" });
      // user.hasMany(models.user_routine, {
      //   foreignKey: "user_id",
      //   sourceKey: "id",
      // });
    }
  }
  user.init(
    {
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profile: {
        type: DataTypes.STRING,
      },
    },
    // { timestamps: false },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};

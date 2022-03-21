"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class march22_date extends Model {
    static associate(models) {}
  }
  march22_date.init(
    {
      month: { type: DataTypes.INTEGER, allowNull: false, unique: false },
      date: { type: DataTypes.INTEGER, allowNull: false, unique: false },
      yo_il: { type: DataTypes.STRING, allowNull: false, unique: false },
    },
    // { timestamps: false },
    {
      sequelize,
      modelName: "march22_date",
    }
  );
  return march22_date;
};

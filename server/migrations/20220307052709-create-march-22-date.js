"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("march22_dates", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      month: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
      },
      date: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
      },
      yo_il: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("march22_dates");
  },
};

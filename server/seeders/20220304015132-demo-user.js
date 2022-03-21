"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nickname: "everyroutine",
          email: "test@yof.com",
          password: "1234",
          profile: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickname: "John",
          email: "john@every.com",
          password: "1234",
          profile: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickname: "Jane",
          email: "jane@every.com",
          password: "1234",
          profile: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickname: "Doe",
          email: "doe@every.com",
          password: "1234",
          profile: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickname: "John Doe",
          email: "johndoe@every.com",
          password: "1234",
          profile: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickname: "Doe John",
          email: "doejohn@every.com",
          password: "1234",
          profile: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickname: "Jane Doe",
          email: "janedoe@every.com",
          password: "1234",
          profile: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nickname: "Doe Jane",
          email: "doejane@every.com",
          password: "1234",
          profile: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};

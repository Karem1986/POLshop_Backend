"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users", //as in table
      [
        {
          name: "Charles",
          email: "charles@io.com",
          password: "457",
          admin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Valerie",
          email: "v@outlook.com",
          password: "123",
          admin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "James",
          email: "mar@hotmail.com",
          password: "333",
          admin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};


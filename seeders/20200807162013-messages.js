"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "messages", //as in table
      [
        {
          email: "Hi dear customer, you have been awarded a 20% discount for providing advice in the chat in the last 2 weeks, thank you!",
          replied: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "Hi dear customer, you have been awarded a 10% discount for providing advice in the chat in the last 2 weeks, thank you!",
          replied: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "Hi dear customer, you have been awarded a 10% discount for providing advice in the chat in the last 2 weeks, thank you!",
          replied: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "Hi dear customer, you have been awarded a 15% discount for providing advice in the chat in the last 2 weeks, thank you!",
          replied: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "Hi dear customer, you have been awarded a 30% discount for providing advice in the chat in the last 2 weeks, thank you!",
          replied: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },


      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("messages", null, {});
  },
};


"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "orders", //as in table
      [
        {
          userId: 1,
          date: '2020-08-09 04:05:02',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          date: '2020-06-10 04:05:02',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          date: '2018-08-01 04:05:02',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("orders", null, {});
  },
};

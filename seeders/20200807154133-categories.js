"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "categories", //as in table
      [
        {
          type: "Women",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Men",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Food",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Shoes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Electronics",
          createdAt: new Date(),
          updatedAt: new Date(),
        },


      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  },
};

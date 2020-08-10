"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "orderproducts", //as in table
      [
        {

          orderId: 1,
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 2,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 3,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },


      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("orderproducts", null, {});
  },
};

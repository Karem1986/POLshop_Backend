"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addColumn("reviews", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users", //always in plural here!
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL", //because is not a join table
    });
    await queryInterface.addColumn("reviews", "productId", {
      type: Sequelize.INTEGER,
      references: {
        model: "products", //references to products model 
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL", //because is not a join table
    });

  },
  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeColumn("reviews", "userId")
    await queryInterface.removeColumn("reviews", "productId")

  },

};

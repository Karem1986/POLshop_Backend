"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("products", "categoryId", {
      type: Sequelize.INTEGER,
      references: {
        model: "categories", //references to products model 
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL", //because is not a join table
    });

    await queryInterface.addColumn("orders", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL", //because is not a join table
    });

    await queryInterface.addColumn("orderproducts", "orderId", {
      type: Sequelize.INTEGER,
      references: {
        model: "orders",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE", //Cascade because is a join table 
    });

    await queryInterface.addColumn("orderproducts", "productId", {
      type: Sequelize.INTEGER,
      references: {
        model: "products",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });


  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("products", "categoryId");
    await queryInterface.removeColumn("orders", "userId");
    await queryInterface.removeColumn("orderproducts", "orderId");
    await queryInterface.removeColumn("orderproducts", "productId");


  },

};

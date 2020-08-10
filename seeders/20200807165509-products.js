"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "products", //as in table
      [
        {
          name: "Red dress",
          price: 50,
          imageUrl: "https://i.imgur.com/niLL6gW.jpg",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "laptop",
          price: 800,
          imageUrl: "https://i.imgur.com/m742Qdf.jpeg",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "iphone",
          price: 475,
          imageUrl: "https://i.imgur.com/Te1vdCG.png",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "swimmingpool",
          price: 78,
          imageUrl: "https://ae01.alicdn.com/kf/HTB1CS6wDkCWBuNjy0Faq6xUlXXak/Hot-Sale-Inflatable-Swimming-Pool-Child-Ocean-Pool-Plus-Size-Large-Plastic-Children-Kids-Swimming-Pools.jpg",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "men trousers",
          price: 17,
          imageUrl: "https://i.imgur.com/6CYrNds.png",
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  },
};

"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "reviews", //as in table
      [
        {
          title: "A fantastic dress!",
          comment: "I bought this dress for my best friend wedding, everyone complimented me, it is a must in every woman's wardrobe, expensive but worth it!",
          userId: 1,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Nice jacket",
          comment: "I love this jacket, 5 stars from me!",
          userId: 2,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Great shirt",
          comment: "Very comfortable trousers, strongly recommend them.",
          userId: 3,
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "I love this shampoo",
          comment: "Since using this shampoo my hair is much soft and clean, but a bit pricey, so 4 stars from me.",
          userId: 2,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Great quality product",
          comment: "Tasty and delicious food",
          userId: 1,
          productId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Love this product from POLshop",
          comment: "I am so happy after buying this product",
          userId: 2,
          productId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },



      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("reviews", null, {});
  },
};

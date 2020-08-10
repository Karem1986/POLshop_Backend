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
          name: "Classic vintage women jacket",
          price: 50,
          imageUrl: "https://www.dhresource.com/0x0/f2/albu/g7/M00/E3/B3/rBVaSluv65eAcvfEAAZLZLiSzHk197.jpg",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Men casual shirt",
          price: 50,
          imageUrl: "https://5.imimg.com/data5/UC/TY/MY-9601095/100-25-cotton-fancy-casual-shirt-for-men-500x500.jpg",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shampoo for men",
          price: 56,
          imageUrl: "https://cdn.plein.nl/img/producten/300x300/992962.jpg",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "vegan burgers",
          price: 17,
          imageUrl: "https://biancazapatka.com/wp-content/uploads/2020/05/veganer-bohnen-burger.jpg",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "buiscuits",
          price: 17,
          imageUrl: "https://i.imgur.com/36gFw9e.jpeg",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "women shoes",
          price: 78,
          imageUrl: "https://imgs.veryvoga.com/veryvoga/o600/fd/32/9c9626b55fa8301acf3c39907ba5fd32.jpg",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "men shoes",
          price: 17,
          imageUrl: "https://static.brunotti.com/images/productimages/F1/F19/F191115505-F0133/F191115505-F0133-1-1500x1500.jpg",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "laptop",
          price: 800,
          imageUrl: "https://i.imgur.com/m742Qdf.jpeg",
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "iphone",
          price: 475,
          imageUrl: "https://i.imgur.com/Te1vdCG.png",
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

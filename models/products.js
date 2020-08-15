'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      products.belongsTo(models.categories)//a category can belong to many products
      products.belongsToMany(models.orders, {
        through: "orderproducts", //join table name here
        foreignKey: "productId"
      })
      products.hasMany(models.review)

    }
  };
  products.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    // category: DataTypes.STRING
    imageUrl: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};
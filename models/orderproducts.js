'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderproducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //JOIN TABLE
      orderproducts.belongsTo(models.products)
      orderproducts.belongsTo(models.orders)
    }
  };
  orderproducts.init({
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'orderproducts',
  });
  return orderproducts;
};
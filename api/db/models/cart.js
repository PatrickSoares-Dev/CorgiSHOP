'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      Cart.belongsTo(models.users, {
        foreignKey: 'userId',
        as: 'users', // Alterado para 'users'
      });
      
      Cart.belongsTo(models.products, {
        foreignKey: 'productId',
        as: 'products', // Alterado para 'products'
      });
    }
  }

  Cart.init(
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      nome: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'carts',
    }
  );

  return Cart;
};

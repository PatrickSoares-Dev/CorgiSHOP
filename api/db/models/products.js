'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    static associate(models) {
      // Associação com o carrinho de compras
      products.belongsToMany(models.users, {
        through: 'cart', // Atualize para o nome do modelo da tabela de associação ou para uma string com o nome da tabela
        foreignKey: 'productId',
        as: 'carts'
      });
    }
  }

  products.init({
    nome: DataTypes.STRING,
    valorProduto: DataTypes.DECIMAL(10, 2),
    valorOff: DataTypes.DECIMAL(10, 2),
    categoriaId: DataTypes.INTEGER,
    imagem1: DataTypes.STRING,
    imagem2: DataTypes.STRING,
    imagem3: DataTypes.STRING,
    imagem4: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });

  return products;
};
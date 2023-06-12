'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    static associate(models) {
      // Defina as associações aqui, se necessário
    }
  }
  categories.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'categories',
    }
  );
  return categories;
};

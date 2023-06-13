// db/migrations/20230610123456-create-products.js

'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      valorProduto: {
        type: Sequelize.DECIMAL(10, 2)
      },
      valorOff: {
        type: Sequelize.DECIMAL(10, 2)
      },
      categoriaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id'
        }
      },
      imagem1: {
        type: Sequelize.STRING
      },
      imagem2: {
        type: Sequelize.STRING
      },
      imagem3: {
        type: Sequelize.STRING
      },
      imagem4: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};

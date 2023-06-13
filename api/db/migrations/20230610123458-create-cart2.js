'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Adicione o código abaixo apenas se a coluna 'nome' não existir na tabela
    await queryInterface.changeColumn('Carts', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    await queryInterface.changeColumn('Carts', 'productId', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Adicione o código abaixo apenas se a coluna 'nome' não existir na tabela
    await queryInterface.changeColumn('Carts', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });

    await queryInterface.changeColumn('Carts', 'productId', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },
};

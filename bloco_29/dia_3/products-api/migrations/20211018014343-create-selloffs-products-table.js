/* eslint-disable max-lines-per-function */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SelloffProducts', {
      selloffId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Selloffs',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('SelloffProducts');
  },
};

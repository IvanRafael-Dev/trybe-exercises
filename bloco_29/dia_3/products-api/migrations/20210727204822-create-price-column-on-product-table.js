/* eslint-disable arrow-body-style */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Products', 'price', {
      type: Sequelize.FLOAT,
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.removeColumn('Products', 'price');
  },
};

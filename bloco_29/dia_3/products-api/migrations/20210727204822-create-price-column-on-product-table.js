module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Products', 'price', {
      type: Sequelize.FLOAT,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Products', 'price');
  },
};

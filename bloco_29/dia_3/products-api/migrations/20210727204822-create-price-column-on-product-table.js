/* eslint-disable arrow-body-style */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Products', 'price', {
      type: Sequelize.FLOAT,
    });
  },

  down: (queryInterface, _Sequelize) => {
    return queryInterface.removeColumn('Products', 'price');
  },
};

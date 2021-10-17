module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Products', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
      references: { 
        model: 'Users', // userId de products aponta para id de model // model = table!!!
        key: 'id',
      },
      onUpdate: 'CASCADE', // se User id mudar aqui tbm é atualizado
      onDelete: 'CASCADE', // caso User id excluido, exclui todos os registros que apontar para aquele id
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.removeColumn('Products', 'userId', {});
  },
};

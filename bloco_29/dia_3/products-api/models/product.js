module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
  });

  Product.associate = (models) => {
    Product.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
    // Produto perternce a um usuario, o produto chama esse usuario de user (posso definir qquer nome)
    // e a chave que vc usa para associar um com o outro é userId
  };
  
  return Product;
};

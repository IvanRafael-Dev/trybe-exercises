module.exports = (sequelize, _DataTypes) => {
  const SelloffProducts = sequelize.define('SelloffProducts',
    {}, // geralmente sao as colunas que esse model tem
        // quando criarmos a association o sequelize vai entender que essas propriedades precisam existir
        // selloffId e productId
    { timestamps: false });

  SelloffProducts.associate = (models) => {
    models.Product.belongsToMany(models.Selloff, {
      as: 'selloffs', // chave que identifica as liquidacoes do produto 
      through: SelloffProducts, // atraves desse model o sequelize sabe qual produto pertence a qqual liquidação
      foreignKey: 'productId', // chave da tabela onde é criada a associação
      otherKey: 'selloffId',
    });

    models.Selloff.belongsToMany(models.Product, {
      as: 'products', // chave que identifica as liquidacoes do produto 
      through: SelloffProducts, // atraves desse model o sequelize sabe qual produto pertence a qqual liquidação
      foreignKey: 'selloffId', // chave da tabela onde é criada a associação
      otherKey: 'productId',
    });
  };

  return SelloffProducts;
};

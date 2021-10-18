const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  user.associate = (models) => {
    user.hasMany(models.Product, { as: 'products', foreignKey: 'userId' });
    // vamos na tabela de produtos e vemos quantos produtos um usuario tem
    // observando a chave userId de product
    // automaticamente tbm é criada uma funcao getProducts() 
    // que pode ser usada como user.getProducts() que vai retornar os produtos pertencentes ao usuario
  };

  return user;
};

module.exports = User;

// const {
//   Model,
// } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     name: DataTypes.STRING,
//     username: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };
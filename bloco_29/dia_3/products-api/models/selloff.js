const Selloff = (sequelize, DataTypes) => {
  const sellOff = sequelize.define('Selloff', {
    name: DataTypes.STRING,
    discount: DataTypes.FLOAT,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
  });

  return sellOff;
};

module.exports = Selloff;

// const {
//   Model,
// } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class SellOff extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here)
//     }
//   }
//   SellOff.init({
//     name: DataTypes.STRING,
//     discount: DataTypes.FLOAT,
//     startDate: DataTypes.DATE,
//     endDate: DataTypes.DATE,
//   }, {
//     sequelize,
//     modelName: 'SellOff',
//   });
//   return SellOff;
// };
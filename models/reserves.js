'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reserves extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reserves.belongsTo(models.Users)
      Reserves.belongsTo(models.Books)
    }
  }
  Reserves.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    bookCode: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    reserveDate: DataTypes.DATE,
    returnDate: DataTypes.DATE,
    reserveStatus: DataTypes.STRING,
    observation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reserves',
  });
  return Reserves;
};
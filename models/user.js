'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasMany(models.Reserves)
    }
  }
  Users.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    registration: {
      type: DataTypes.INTEGER,
      required: true,
    },
    name: {
      type: DataTypes.STRING,
      required: true,
    },
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    acessGroup: {
      type: DataTypes.ENUM("Admin", "Professor", "Estudante"),
      default: "Estudante",
      required: false
    },
    userImage: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};
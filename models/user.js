"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      models.User.hasMany(models.Reserve, {
        foreignKey: "userId",
      });
    }
  }

  User.init(
    {
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
        type: DataTypes.ENUM("Admin", "Professor", "Aluno"),
        default: "Aluno",
        required: false
      },
      userImage: { 
        type: DataTypes.BLOB('long'), // <- type for image ( database :postgresql )
        allowNull: true 
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: "User",
      updatedAt: 'updatedAt',
      createdAt: 'createdAt',
    }
  );

  return User;
};

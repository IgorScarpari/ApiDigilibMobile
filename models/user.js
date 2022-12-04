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
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      registration: {
        type: Sequelize.INTEGER,
        required: true,
      },
      name: {
        type: Sequelize.STRING,
        required: true,
      },
      lastName: Sequelize.STRING,
      email: Sequelize.STRING,
      phoneNumber: Sequelize.STRING,
      acessGroup: {
        type: Sequelize.ENUM("Admin", "Professor", "Aluno"),
        default: "Aluno",
        required: false
      },
      userImage: { 
        type: Sequelize.BLOB('long'), // <- type for image ( database :postgresql )
        allowNull: true 
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    },
    {
      sequelize,
      modelName: "Users",
      updatedAt: 'updatedAt',
      createdAt: 'createdAt',
    }
  );

  return User;
};

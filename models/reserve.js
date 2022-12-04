"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Reserve extends Model {
    static associate(models) {
      models.Reserve.belongsTo(models.Book, {
        foreignKey: "bookId",
      });
      models.Reserve.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }

  Reserve.init(
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      bookId: Sequelize.INTEGER,
      userId: Sequelize.INTEGER,
      reserveDate: Sequelize.DATE,
      returnDate: Sequelize.DATE,
      reserveStatus: Sequelize.STRING,
      observation: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    },
    {
      sequelize,
      modelName: "Reserves",
      updatedAt: "updatedAt",
      createdAt: "createdAt",
    }
  );

  return Reserve;
};

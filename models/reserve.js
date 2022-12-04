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
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      bookId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      reserveDate: DataTypes.DATE,
      returnDate: DataTypes.DATE,
      reserveStatus: DataTypes.STRING,
      observation: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
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

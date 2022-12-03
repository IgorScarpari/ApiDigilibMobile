const Sequelize = require('sequelize');
const database = require('../db');

module.exports = database.sequelize.define('Reserves', {
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
    reserveStatus: {
      type: Sequelize.ENUM("Ativa", "Cancelada", "Concluída"),
      default: "Ativa",
      required: false
    },
    observation: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  }, {
    modelName: 'Reserves',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    hooks: {
      beforeCount(options) {
          options.raw = true;
      }
  }
  });

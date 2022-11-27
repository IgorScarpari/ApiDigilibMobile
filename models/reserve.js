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
    reserveStatus: Sequelize.STRING,
    observation: Sequelize.STRING
  }, {
    modelName: 'Reserves',
    hooks: {
      beforeCount(options) {
          options.raw = true;
      }
  }
  });

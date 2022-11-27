const Sequelize = require('sequelize');
const database = require('../db');

module.exports = database.sequelize.define('Users', {
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
      type: Sequelize.ENUM("Admin", "Professor", "Estudante"),
      default: "Estudante",
      required: false
    },
    userImage: Sequelize.BLOB
  }, {
    modelName: 'Users',
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

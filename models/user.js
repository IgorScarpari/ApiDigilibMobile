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
    userImage: { 
      type: Sequelize.BLOB('long'), // <- type for image ( database :postgresql )
      allowNull: true 
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  }, {
    modelName: 'Users',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      internalCode: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      isbn: {
        type: Sequelize.STRING
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      subtitle: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING,
      },
      volume: {
        type: Sequelize.STRING
      },
      edition: {
        type: Sequelize.STRING
      },
      collection: {
        type: Sequelize.STRING
      },
      language: {
        type: Sequelize.STRING
      },
      synopsis: {
        type: Sequelize.STRING(4000)
      },
      originCountry: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      authorLastName: {
        type: Sequelize.STRING
      },
      publishingCompany: {
        type: Sequelize.STRING
      },
      publishDate: {
        type: Sequelize.DATE
      },
      pages: {
        type: Sequelize.INTEGER
      },
      ageGroup: {
        type: Sequelize.INTEGER
      },
      bookImage: {
        type: Sequelize.BLOB
      },
      bookSituation: {
        type: Sequelize.ENUM("Livre", "Emprestado", "Perdido", "Extraviado"),
        default: "Livre"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  }
};
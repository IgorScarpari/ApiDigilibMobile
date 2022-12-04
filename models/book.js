"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Book extends Model {
        static associate(models) {
            models.Book.hasMany(models.Reserve, {
                foreignKey: "bookId",
            });
        }
    }

    Book.init(
        {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
          },
          internalCode: Sequelize.INTEGER,
          isbn: Sequelize.STRING,
          title: {
            type: Sequelize.STRING,
            required: true,
          },
          subtitle: Sequelize.STRING,
          genre: Sequelize.STRING,
          volume: Sequelize.STRING,
          edition: Sequelize.STRING,
          collection: Sequelize.STRING,
          language: Sequelize.STRING,
          synopsis: Sequelize.STRING,
          originCountry: Sequelize.STRING,
          author: Sequelize.STRING,
          authorLastName: Sequelize.STRING,
          publishingCompany: Sequelize.STRING,
          publishDate: Sequelize.DATE,
          pages: Sequelize.INTEGER,
          ageGroup: Sequelize.INTEGER,
          bookImage: { 
            type: Sequelize.BLOB('long'), // <- type for image ( database :postgresql )
            allowNull: true 
          },
          bookSituation: {
            type: Sequelize.ENUM("Livre", "Emprestado", "Perdido", "Extraviado"),
            default: "Livre",
            required: false
          },
          createdAt: Sequelize.DATE,
          updatedAt: Sequelize.DATE,
        },
        {
            sequelize,
            modelName: "Books",
            updatedAt: 'updatedAt',
            createdAt: 'createdAt',
        }
    );

    return Book;
};

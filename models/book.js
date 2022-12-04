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
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
          },
          internalCode: DataTypes.INTEGER,
          isbn: DataTypes.STRING,
          title: {
            type: DataTypes.STRING,
            required: true,
          },
          subtitle: DataTypes.STRING,
          genre: DataTypes.STRING,
          volume: DataTypes.STRING,
          edition: DataTypes.STRING,
          collection: DataTypes.STRING,
          language: DataTypes.STRING,
          synopsis: DataTypes.STRING,
          originCountry: DataTypes.STRING,
          author: DataTypes.STRING,
          authorLastName: DataTypes.STRING,
          publishingCompany: DataTypes.STRING,
          publishDate: DataTypes.DATE,
          pages: DataTypes.INTEGER,
          ageGroup: DataTypes.INTEGER,
          bookImage: { 
            type: DataTypes.BLOB('long'), // <- type for image ( database :postgresql )
            allowNull: true 
          },
          bookSituation: {
            type: DataTypes.ENUM("Livre", "Emprestado", "Perdido", "Extraviado"),
            default: "Livre",
            required: false
          },
          createdAt: DataTypes.DATE,
          updatedAt: DataTypes.DATE,
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

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Books.hasMany(models.Reserves)
    }
  }
  Books.init({
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
    bookImage: DataTypes.BLOB,
    bookSituation: {
      type: DataTypes.ENUM("Livre", "Emprestado", "Perdido", "Extraviado"),
      default: "Livre",
      required: false
    },
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};
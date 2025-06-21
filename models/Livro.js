const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const Livro = sequelize.define('Livro', {
  titulo: DataTypes.STRING,
  autor: DataTypes.STRING,
  ano: DataTypes.INTEGER,
  genero: DataTypes.STRING,
});

module.exports = { Livro, sequelize };

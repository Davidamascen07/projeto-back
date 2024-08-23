// src/models/index.js
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
  dialect: 'mysql',
  logging: false,
});

const User = require('./User')(sequelize, Sequelize.DataTypes);
const Category = require('./Category')(sequelize, Sequelize.DataTypes);
const Product = require('./Product')(sequelize, Sequelize.DataTypes);
const ProductImage = require('./ProductImage')(sequelize, Sequelize.DataTypes);
const ProductOption = require('./ProductOption')(sequelize, Sequelize.DataTypes);
const ProductCategory = require('./ProductCategory')(sequelize, Sequelize.DataTypes);

module.exports = { sequelize, User, Category, Product, ProductImage, ProductOption, ProductCategory };

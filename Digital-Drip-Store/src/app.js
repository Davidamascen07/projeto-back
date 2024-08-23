//app.js
// Importações necessárias
require('dotenv').config(); // Carrega variáveis de ambiente
const express = require('express'); // Importa o express
const sequelize = require('./config/database'); // Importa a conexão com o banco de dados

// Modelos (caso precise sincronizar com o banco de dados manualmente)
const User = require('./models/User');
const Category = require('./models/Category');
const Product = require('./models/Product');
const ProductImage = require('./models/ProductImage');
const ProductOption = require('./models/ProductOption');
const ProductCategory = require('./models/ProductCategory');

// Sincroniza o banco de dados e cria as tabelas, se necessário
sequelize.sync({ force: false }).then(() => {
  console.log('Database & tables created!');
});

// Configura o express
const app = express(); // Cria a aplicação express

// Middleware para parsear JSON
app.use(express.json());

// Rotas da API
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/products', require('./routes/productRoutes'));

// Exporta a aplicação express
module.exports = app;

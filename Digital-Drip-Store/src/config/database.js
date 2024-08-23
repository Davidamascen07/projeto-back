// src/config/database.js
const { Sequelize } = require('sequelize');

// Cria uma instância do Sequelize com a configuração do banco de dados
const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
  dialect: 'mysql',
  logging: false,  // Defina como true se quiser ver os logs das queries SQL
  pool: {
    max: 5,         // Número máximo de conexões na pool
    min: 0,         // Número mínimo de conexões na pool
    acquire: 30000, // Tempo máximo (em milissegundos) para obter uma conexão da pool
    idle: 10000     // Tempo máximo (em milissegundos) que uma conexão pode estar ociosa antes de ser liberada
  }
});

module.exports = sequelize;

const sequelize = require('../config/database');

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false }); // Altere para true se precisar recriar as tabelas
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

syncDatabase();

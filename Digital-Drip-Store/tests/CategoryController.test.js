const request = require('supertest');
const app = require('../src/app'); // Substitua com o caminho para o arquivo principal da sua aplicação
const { sequelize } = require('../src/models'); // Instância do Sequelize

describe('Category API', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true }); // Limpar o banco de dados antes dos testes
  });

  afterAll(async () => {
    await sequelize.close(); // Fechar a conexão com o banco de dados após os testes
  });

  it('Deve criar uma nova categoria', async () => {
    const res = await request(app)
      .post('/api/categories')
      .send({
        name: 'Roupas',
        slug: 'roupas',
        use_in_menu: true
      });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('Deve retornar todas as categorias', async () => {
    const res = await request(app).get('/api/categories');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('Deve retornar uma categoria pelo ID', async () => {
    const res = await request(app).get('/api/categories/1'); // Altere conforme o ID criado
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', 1);
  });

  it('Deve atualizar uma categoria', async () => {
    const res = await request(app)
      .put('/api/categories/1')
      .send({
        name: 'Roupas Atualizadas',
        slug: 'roupas-atualizadas'
      });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'Roupas Atualizadas');
  });

  it('Deve deletar uma categoria', async () => {
    const res = await request(app).delete('/api/categories/1');
    expect(res.statusCode).toEqual(204);
  });
});

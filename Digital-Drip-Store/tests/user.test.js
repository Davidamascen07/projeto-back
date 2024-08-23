// \src\server.js
const request = require('supertest');
const app = require('../src/app'); // Ajuste o caminho se necessário

describe('User API', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        firstname: 'John',
        surname: 'Doe',
        email: 'john.doe@example.com',
        password: 'password123',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('firstname', 'John');
    expect(res.body).toHaveProperty('surname', 'Doe');
    expect(res.body).toHaveProperty('email', 'john.doe@example.com');
  });

  // Adicione outros testes para getUserById, updateUser, deleteUser
});



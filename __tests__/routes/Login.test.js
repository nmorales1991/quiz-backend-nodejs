const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../src/routes/index');

describe('Test the root path', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/quiz', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });
  afterAll((done) => {
    mongoose.connection.close();
    done();
  });

  test('login success', async () => {
    const response = await request(app).post('/server/login').send({
      email: 'nicomorales297@gmail.com',
      password: '12345',
    });
    expect(response.status).toBe(200);
  });
});

const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const User = require('../src/models/userModel');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  // ensure a clean database for tests - wait for `db` to be available
  if (!mongoose.connection.db) {
    await new Promise((resolve) => mongoose.connection.once('open', resolve));
  }
  // await mongoose.connection.db.dropDatabase();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('User CRUD API', () => {
  let userId;

  it('should create a user', async () => {
    const res = await request(app).post('/api/users').send({
      name: 'Tarun',
      email: 'tarun@example.com',
      age: 29,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.data.email).toBe('tarun@example.com');
    userId = res.body.data._id;
  });

  it('should fetch all users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
  });

  it('should get user by id', async () => {
    const res = await request(app).get(`/api/users/${userId}`);
    expect(res.statusCode).toBe(200);
  });

  it('should update user', async () => {
    const res = await request(app)
      .put(`/api/users/${userId}`)
      .send({ age: 30 });
    expect(res.statusCode).toBe(200);
    expect(res.body.data.age).toBe(30);
  });

  it('should delete user', async () => {
    const res = await request(app).delete(`/api/users/${userId}`);
    expect(res.statusCode).toBe(200);
  });
});

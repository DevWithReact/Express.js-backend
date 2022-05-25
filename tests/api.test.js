const request = require('supertest')
const app = require('../server.js')
describe('API Tests', () => {
  it('Create new Catalog', async () => {
      const res = await request(app)
        .post('/catalog')
        .send({
          "name": "watch",
          "description": "Omega watch",
          "imageUrl": "https://localhost/watch",
          "cost1": 100,
          "cost2": 200,
          "cost3": 300,
          "req1": 1000,
          "req2": 2000,
          "req3": 3000,
          "category": 1
      })
      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('name')
      expect(res.body).toHaveProperty('imageUrl')
  })
  it('Buy Product - Catalog Not Found', async () => {
    const res = await request(app)
      .post('/buyProduct')
      .send({
        "id": 100,
        "address": "TestUser1"
      })
    expect(res.statusCode).toEqual(400)
    expect(res.body).toHaveProperty('error')
    expect(res.body.error.errorMessage).toEqual("Can't find catalog by id")
  })
  it('Buy Product - User Not Found', async () => {
    const res = await request(app)
      .post('/buyProduct')
      .send({
        "id": 1,
        "address": "TestUser12"
      })
    expect(res.statusCode).toEqual(400)
    expect(res.body).toHaveProperty('error')
    expect(res.body.error.errorMessage).toEqual("Can't find user by id")
  })
  it('Buy Product - Success', async () => {
    const res = await request(app)
      .post('/buyProduct')
      .send({
        "id": 1,
        "address": "TestUser1"
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('data')
  })
})
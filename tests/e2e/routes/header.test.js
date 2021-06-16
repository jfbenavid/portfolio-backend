const supertest = require('supertest')
const { app, server } = require('../../../index.js')

const api = supertest(app)

describe('Using the database', () => {
  test('header/photoInfo should be able to connect and return 200', async () => {
    await api
      .get('/header/photoInfo')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
})

afterAll(() => {
  server.close()
})

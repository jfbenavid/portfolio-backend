const supertest = require('supertest')
const app = require('../../index.js')

const api = supertest(app)

test('something...', async () => {
  await api
    .get('/header/photoInfo')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

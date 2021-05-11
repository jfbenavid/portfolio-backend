const { Router } = require('express')

function test (app, { axios }) {
  const router = Router()
  app.use('/people', router)

  router.get('/', async (_, res, next) => {
    try {
      const people = await axios.get('/users')

      res.json(people)
    } catch (err) {
      next(err)
    }
  })
}

module.exports = test

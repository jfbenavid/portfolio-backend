const { Router } = require('express')

function test (app) {
  const router = Router()
  app.use('/test', router)

  router.get('/', (req, res, next) => {
    try {
      res.json({ message: 'test' })
    } catch (err) {
      next(err)
    }
  })
}

module.exports = test

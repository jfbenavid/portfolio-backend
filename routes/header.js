const { Router } = require('express')

function header (app, { headerService }) {
  const router = Router()
  app.use('/header', router)

  router.get('/photoInfo', async (_, res, next) => {
    try {
      const photoInfo = await headerService.getPhotoInfo()
      res.json(photoInfo)
    } catch (err) {
      next(err)
    }
  })
}

module.exports = header

const validationHandler = require('../utils/middleware/validationHandler')
const cacheResponse = require('../utils/cacheResponse')
const {
  idSchema,
  langSchema,
  createProfileSchema,
  updateProfileSchema
} = require('../schemas')

const PROFILE_INFO = 'profile'

function profile (app, { mongoService, crudService, Router }, { mongoDb }) {
  const router = Router()
  const profileInfoService = crudService(mongoService(mongoDb, PROFILE_INFO), cacheResponse)

  app.use('/profile', router)

  router
    .get(
      '/:lang?',
      validationHandler({ lang: langSchema }, 'params'),
      profileInfoService.get)
    .post(
      '/',
      validationHandler(createProfileSchema),
      profileInfoService.post)
    .patch(
      '/:id',
      validationHandler({ id: idSchema }, 'params'),
      validationHandler(updateProfileSchema),
      profileInfoService.patch)
    .delete(
      '/:id',
      validationHandler({ id: idSchema }, 'params'),
      profileInfoService.delete)
}

module.exports = profile

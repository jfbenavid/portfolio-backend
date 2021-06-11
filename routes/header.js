const validationHandler = require('../utils/middleware/validationHandler')
const cacheResponse = require('../utils/cacheResponse')
const {
  idSchema,
  langSchema,
  createPhotoInfoSchema,
  updatePhotoInfoSchema,
  createPersonalInfoSchema,
  updatePersonalInfoSchema,
  createSocialMediaSchema,
  updateSocialMediaSchema
} = require('../schemas')

const PHOTO_INFO = 'header.photo'
const PERSONAL_INFO = 'header.information'
const SOCIAL_MEDIA = 'socialMedia'

function header (app, { mongoService, crudService, Router }, { mongoDb }) {
  const router = Router()
  const personalInfoService = crudService(mongoService(mongoDb, PERSONAL_INFO), cacheResponse)
  const photoInfoService = crudService(mongoService(mongoDb, PHOTO_INFO), cacheResponse)
  const socialMediaService = crudService(mongoService(mongoDb, SOCIAL_MEDIA), cacheResponse)
  app.use('/header', router)

  // photoInfo
  router
    .get('/photoInfo/', photoInfoService.get)
    .post(
      '/photoInfo',
      validationHandler(createPhotoInfoSchema),
      photoInfoService.post)
    .patch(
      '/photoInfo/:id',
      validationHandler({ id: idSchema }, 'params'),
      validationHandler(updatePhotoInfoSchema),
      photoInfoService.patch)
    .delete(
      '/photoInfo/:id',
      validationHandler({ id: idSchema }, 'params'),
      photoInfoService.delete)

  // personalInfo
  router
    .get(
      '/personalInfo/:lang?',
      validationHandler({ lang: langSchema }, 'params'),
      personalInfoService.get)
    .post(
      '/personalInfo',
      validationHandler(createPersonalInfoSchema),
      personalInfoService.post)
    .patch(
      '/personalInfo/:id',
      validationHandler({ id: idSchema }, 'params'),
      validationHandler(updatePersonalInfoSchema),
      personalInfoService.patch)
    .delete(
      '/personalInfo/:id',
      validationHandler({ id: idSchema }, 'params'),
      personalInfoService.delete)

  router
    .get('/social', socialMediaService.get)
    .post(
      '/social',
      validationHandler(createSocialMediaSchema),
      socialMediaService.post)
    .patch(
      '/social/:id',
      validationHandler({ id: idSchema }, 'params'),
      validationHandler(updateSocialMediaSchema),
      socialMediaService.patch)
    .delete(
      '/social/:id',
      validationHandler({ id: idSchema }, 'params'),
      socialMediaService.delete)
}

module.exports = header

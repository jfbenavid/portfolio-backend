const { Mongo } = require('../lib/index')

const PHOTO_INFO = 'header.photo'
const MAIN_INFO = 'header.information'
const mongoDb = new Mongo()

const HeaderService = {
  createPhotoInfo: async (data) => {
    await mongoDb.create(PHOTO_INFO, data)
  },
  updatePhotoInfo: async (id, data) => {
    await mongoDb.update(PHOTO_INFO, id, data)
  },
  getPhotoInfo: async (query) => {
    await mongoDb.get(PHOTO_INFO, query)
  },
  createMainInformation: async (data) => {
    await mongoDb.create(MAIN_INFO, data)
  },
  updateMainInformation: async (id, data) => {
    await mongoDb.update(MAIN_INFO, id, data)
  },
  getMainInformation: async (query) => {
    await mongoDb.get(MAIN_INFO, query)
  }
}

module.exports = HeaderService

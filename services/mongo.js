// const { mongoDb } = require('../lib/index')

const MongoService = (mongoDb, collection) => ({
  create: async (data) => {
    return await mongoDb.create(collection, data)
  },
  update: async (id, data) => {
    return await mongoDb.update(collection, id, data)
  },
  delete: async (id) => {
    return await mongoDb.delete(collection, id)
  },
  get: async (query = {}) => {
    return await mongoDb.get(collection, query)
  }
})

module.exports = MongoService

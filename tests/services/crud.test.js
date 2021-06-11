const { crudService } = require('../../services')
const { mongoService } = require('../../services')
const { mongoDb } = require('../../lib')
const cacheResponse = require('../utils/cacheResponse')

let sut
beforeAll(() => {
  sut = crudService(mongoService(mongoDb, 'test'), cacheResponse)
})

describe('Crud service', () => {
  describe('get', () => {
    it('should get data from database', () => {
      sut.get()
    })
  })
})

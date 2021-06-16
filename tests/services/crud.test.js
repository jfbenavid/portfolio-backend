const { crudService } = require('../../services')
const { mongoService } = require('../../services')
const { mongoDb } = require('../../lib')
const cacheResponse = require('../../utils/cacheResponse')
const { reqMock, resMock, nextMock } = require('../mocks/crud')

jest.mock('../../utils/cacheResponse')
jest.mock('../../lib')

const sut = crudService(mongoService(mongoDb, 'test'), cacheResponse)
cacheResponse.mockImplementation(() => undefined)

beforeEach(() => {
  resMock.result = {}
})

describe('Crud service', () => {
  describe('get', () => {
    it('should get data from database', async () => {
      mongoDb.get
        .mockImplementation((_collection, _query) => ({ data: 'test' }))

      reqMock.params.lang = 'prueba'

      await sut.get(reqMock, resMock, nextMock)
      expect(resMock.result).toStrictEqual({ data: 'test' })
    })

    it('should throw an exception when something fails', async () => {
      mongoDb.get
        .mockRejectedValue(new Error('test'))

      await sut.get(reqMock, resMock, nextMock)
      expect(resMock.result).toStrictEqual({ error: 'test' })
    })
  })

  describe('post', () => {
    it('should create data to the database', async () => {
      mongoDb.create
        .mockImplementation((_collection, _data) => 10)

      await sut.post(reqMock, resMock, nextMock)
      expect(resMock.result).toStrictEqual({ _id: 10 })
    })

    it('should throw an exception when something fails', async () => {
      mongoDb.create
        .mockRejectedValue(new Error('test'))

      await sut.post(reqMock, resMock, nextMock)
      expect(resMock.result).toStrictEqual({ error: 'test' })
    })
  })

  describe('patch', () => {
    it('should update data in the database', async () => {
      mongoDb.update
        .mockImplementation((_collection, _id, _data) => 10)

      reqMock.params.id = 10

      await sut.patch(reqMock, resMock, nextMock)
      expect(resMock.result).toStrictEqual({ _id: 10 })
    })

    it('should throw an exception when something fails', async () => {
      mongoDb.update
        .mockRejectedValue(new Error('test'))

      await sut.patch(reqMock, resMock, nextMock)
      expect(resMock.result).toStrictEqual({ error: 'test' })
    })
  })

  describe('delete', () => {
    it('should delete data in the database', async () => {
      mongoDb.delete
        .mockImplementation((_collection, _id) => undefined)

      await sut.delete(reqMock, resMock, nextMock)
      expect(resMock.result).toStrictEqual({ test: 'test' })
    })

    it('should throw an exception when something fails', async () => {
      mongoDb.delete
        .mockRejectedValue(new Error('test'))

      await sut.delete(reqMock, resMock, nextMock)
      expect(resMock.result).toStrictEqual({ error: 'test' })
    })
  })
})

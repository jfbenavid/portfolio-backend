const { mongoService } = require('../../services')
const { mongoDb } = require('../../lib')

describe('On mongo service', () => {
  describe('On create', () => {
    it('should create a new item', async () => {
      const sut = mongoService(mongoDb, 'test')
      const spy = jest
        .spyOn(mongoDb, 'create')
        .mockImplementation(() => undefined)

      await sut.create({})

      expect(spy).toHaveBeenCalledTimes(1)
    })

    it('should throw an exception', async () => {
      const sut = mongoService(mongoDb, 'test')
      const errorDescription = 'test'
      jest
        .spyOn(mongoDb, 'create')
        .mockImplementation(() => { throw new Error(errorDescription) })

      try {
        await sut.create({})
      } catch (err) {
        expect(err.message).toBe(errorDescription)
      }
    })
  })

  describe('On update', () => {
    it('should update an item', async () => {
      const sut = mongoService(mongoDb, 'test')
      const spy = jest
        .spyOn(mongoDb, 'update')
        .mockImplementation(() => undefined)

      await sut.update(1, {})

      expect(spy).toHaveBeenCalledTimes(1)
    })

    it('should throw an exception', async () => {
      const sut = mongoService(mongoDb, 'test')
      const errorDescription = 'test'
      jest
        .spyOn(mongoDb, 'create')
        .mockImplementation(() => { throw new Error(errorDescription) })

      try {
        await sut.update(1, {})
      } catch (err) {
        expect(err.message).toBe(errorDescription)
      }
    })
  })

  describe('On get', () => {
    it('should get an item', async () => {
      const sut = mongoService(mongoDb, 'test')
      const spy = jest
        .spyOn(mongoDb, 'get')
        .mockImplementation(() => undefined)

      await sut.get()

      expect(spy).toHaveBeenCalledTimes(1)
    })

    it('should throw an exception', async () => {
      const sut = mongoService(mongoDb, 'test')
      const errorDescription = 'test'
      jest
        .spyOn(mongoDb, 'get')
        .mockImplementation(() => { throw new Error(errorDescription) })

      try {
        await sut.get({})
      } catch (err) {
        expect(err.message).toBe(errorDescription)
      }
    })
  })

  describe('On delete', () => {
    it('should delete an item', async () => {
      const sut = mongoService(mongoDb, 'test')
      const spy = jest
        .spyOn(mongoDb, 'delete')
        .mockImplementation(() => undefined)

      await sut.delete(1)

      expect(spy).toHaveBeenCalledTimes(1)
    })

    it('should throw an exception', async () => {
      const sut = mongoService(mongoDb, 'test')
      const errorDescription = 'test'
      jest
        .spyOn(mongoDb, 'delete')
        .mockImplementation(() => { throw new Error(errorDescription) })

      try {
        await sut.delete(1)
      } catch (err) {
        expect(err.message).toBe(errorDescription)
      }
    })
  })
})

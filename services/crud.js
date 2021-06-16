const crud = (service, cacheResponse) => ({
  get: async (req, res, next) => {
    cacheResponse(res)
    try {
      const query = {}
      if (req.params.lang) {
        query.lang = { $eq: req.params.lang }
      }

      const info = await service.get(query)
      res.json(info)
    } catch (err) {
      next(err)
    }
  },
  post: async (req, res, next) => {
    try {
      const data = req.body
      const insertedId = await service.create(data)

      res.status(201).json({ _id: insertedId, ...data })
    } catch (err) {
      next(err)
    }
  },
  patch: async (req, res, next) => {
    try {
      const data = req.body
      const id = req.params.id

      await service.update(id, data)
      res.status(202).json({ _id: id, ...data })
    } catch (err) {
      next(err)
    }
  },
  delete: async (req, res, next) => {
    try {
      const id = req.params.id
      await service.delete(id)

      res.status(204).send()
    } catch (err) {
      next(err)
    }
  }
})

module.exports = crud

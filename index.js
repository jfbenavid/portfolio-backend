const express = require('express')
const cors = require('cors')

const config = require('./config')
const configRoutes = require('./routes')
const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandler')
const notFoundHandler = require('./utils/middleware/notFoundHandler')

const app = express()
  .use(cors(config.cors))
  .use(express.json())

configRoutes(app)

const server = app
  .use(notFoundHandler)
  .use(logErrors)
  .use(wrapErrors)
  .use(errorHandler)
  .listen(config.port, () => console.log(`Server running on port ${config.port}`))

module.exports = { app, server }

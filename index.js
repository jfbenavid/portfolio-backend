const express = require('express')
const cors = require('cors')

const config = require('./config')
const configRoutes = require('./routes')
const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandler')
const notFoundHandler = require('./utils/middleware/notFoundHandler')

const app = express()

app.use(cors(config.cors))
app.use(express.json())

configRoutes(app)

app.use(notFoundHandler)

app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

app.listen(config.port)
console.log(`Server running on http://localhost:${config.port}`)

require('dotenv').config()

const config = {
  port: process.env.PORT || 3000,
  cors: process.env.CORS || '*',
  dev: process.env.NODE_ENV?.trim() !== 'production'
}

module.exports = config

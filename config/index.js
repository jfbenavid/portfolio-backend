require('dotenv').config()

const config = {
  port: process.env.PORT || 3000,
  cors: process.env.CORS || '*',
  dev: process.env.NODE_ENV?.trim() !== 'production',
  externalApiBaseUrl: process.env.API_URL,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME
}

module.exports = config

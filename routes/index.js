const headerRoute = require('./header')
const services = require('../services')

const configRoutes = (app) => {
  headerRoute(app, services)
}

module.exports = configRoutes

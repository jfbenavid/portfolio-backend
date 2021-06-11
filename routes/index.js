
const headerRoute = require('./header')
const profileRoute = require('./profile')
const services = require('../services')
const libs = require('../lib')

const configRoutes = (app) => {
  headerRoute(app, services, libs)
  profileRoute(app, services, libs)
}

module.exports = configRoutes

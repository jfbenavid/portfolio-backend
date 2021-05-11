const peopleRoute = require('./people')
const services = require('../services')

const configRoutes = (app) => {
  peopleRoute(app, services)
}

module.exports = configRoutes

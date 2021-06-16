const { Router } = require('express')
const mongoService = require('./mongo')
const crudService = require('./crud')

module.exports = {
  Router,
  mongoService,
  crudService
}

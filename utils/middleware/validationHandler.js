const boom = require('boom')
const joi = require('joi')

function validate (data, schema) {
  const { error } = joi.object(schema).validate(data)
  return error
}

function validationHandler (schema, check = 'body') {
  return function (req, _, next) {
    const error = validate(req[check], schema)

    error ? next(boom.badRequest(error)) : next()
  }
}

module.exports = validationHandler

const config = require('../../config')
const boom = require('boom')

function withErrorStack (err, stack) {
  if (config.dev) { return { ...err, stack } }

  return err
}

function wrapErrors (err, _, __, next) {
  if (!err.isBoom) { next(boom.badImplementation(err)) }

  next(err)
}

function logErrors (err, _, __, next) {
  console.log(err)
  next(err)
}

function errorHandler (err, _, res, __) {
  const { output: { statusCode, payload } } = err
  res.status(statusCode)
  res.json(withErrorStack(payload, err.stack))
}

module.exports = {
  logErrors,
  errorHandler,
  wrapErrors
}

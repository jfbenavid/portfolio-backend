const headerInfoSchema = require('./header')
const bodySchema = require('./body')
const common = require('./common')

module.exports = {
  ...common,
  ...headerInfoSchema,
  ...bodySchema
}

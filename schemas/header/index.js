const photoInfoSchema = require('./photoInfo')
const personalInfoSchema = require('./personalInfo')

module.exports = {
  ...photoInfoSchema,
  ...personalInfoSchema
}

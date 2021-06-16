const profileSchema = require('./profile')
const socialMediaSchema = require('./socialMedia')

module.exports = {
  ...profileSchema,
  ...socialMediaSchema
}

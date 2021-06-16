const { linkSchema } = require('../common')

const createSocialMediaSchema = {
  linkedIn: linkSchema.required(),
  github: linkSchema.required()
}

const updateSocialMediaSchema = {
  linkedIn: linkSchema,
  github: linkSchema
}

module.exports = {
  createSocialMediaSchema,
  updateSocialMediaSchema
}

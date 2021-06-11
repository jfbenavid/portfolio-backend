const joi = require('joi')
const { langSchema } = require('../common')

const profileDataSchema = joi.string().min(100)
const profileWordSchema = joi.string()

const createProfileSchema = {
  data: profileDataSchema.required(),
  word: profileWordSchema.required(),
  lang: langSchema.required()
}

const updateProfileSchema = {
  data: profileDataSchema,
  word: profileWordSchema,
  lang: langSchema
}

module.exports = {
  createProfileSchema,
  updateProfileSchema
}

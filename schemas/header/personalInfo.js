const joi = require('joi')
const { langSchema } = require('../common')

const personalInfoNameSchema = joi.string().min(15)
const personalInfoOccupationSchema = joi.string().min(5)

const createPersonalInfoSchema = {
  name: personalInfoNameSchema.required(),
  occupation: personalInfoOccupationSchema.required(),
  lang: langSchema.required()
}

const updatePersonalInfoSchema = {
  name: personalInfoNameSchema,
  occupation: personalInfoOccupationSchema,
  lang: langSchema
}

module.exports = {
  createPersonalInfoSchema,
  updatePersonalInfoSchema
}

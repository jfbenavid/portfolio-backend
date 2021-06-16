const joi = require('joi')

const photoInfoSourceSchema = joi.string().regex(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/)
const photoInfoAltSchema = joi.string().max(80)

const createPhotoInfoSchema = {
  source: photoInfoSourceSchema.required(),
  alt: photoInfoAltSchema.required()
}

const updatePhotoInfoSchema = {
  source: photoInfoSourceSchema,
  alt: photoInfoAltSchema
}

module.exports = {
  createPhotoInfoSchema,
  updatePhotoInfoSchema
}

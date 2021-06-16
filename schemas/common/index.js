const joi = require('joi')

const idSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/)
const linkSchema = joi.string().regex(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/)
const langSchema = joi
  .string()
  .regex(/^[eE](([nN][gG])|([sS][pP]))$/)
  .message('The language must be specified as english (eng) or spanish (esp)')

module.exports = {
  langSchema,
  idSchema,
  linkSchema
}

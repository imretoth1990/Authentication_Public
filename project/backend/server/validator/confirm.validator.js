/* const Joi = require("joi");

const validator = (schema) => (payload) => schema.validate(payload, { abortEarly: false });

const confirmSchema = Joi.object({
  secureCode: Joi.string().pattern(new RegExp("^[a-z0-9]{12}$")), // accepts only a combination of 12 lowercase letters and numbers
  username: Joi.string().required(),
});

module.exports.validateConfirmation = validator(confirmSchema); */

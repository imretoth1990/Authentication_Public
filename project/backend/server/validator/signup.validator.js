const Joi = require("joi");

const validator = (schema) => (payload) => schema.validate(payload, { abortEarly: false });

const signupSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(10).required(),
  //   confirmPassword: Joi.ref("password"),
});

module.exports.validateSignup = validator(signupSchema);

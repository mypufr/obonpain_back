import Joi from 'joi';

const password = /^[a-zA-ZÀ-ÿ0-9-]{8,30}$/;

export default Joi.object({
  email: Joi.string()
    .required(),
  password: Joi.string()
    .pattern(password)
    .required(),
})
  .required();

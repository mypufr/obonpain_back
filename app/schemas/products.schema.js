import Joi from 'joi';

export default Joi.object({
  id: Joi.number()
    .integer(),
  weight: Joi.number()
    .integer()
    .required(),
  price: Joi.number()
    .required(),
  status: Joi.boolean()
    .required(),
  bread_type_id: Joi.number()
    .integer()
    .required(),
  mould_id: Joi.number()
    .integer(),
})
  .required();

const Joi = require('joi');

const editProductSchema = Joi.object({
  id: Joi.number().required(),
  title: Joi.string().required().max(255),
  description: Joi.string(),
  category: Joi.string().required().max(255),
  imgUrl: Joi.string().required().max(255),
  price: Joi.number().required(),
});

const editProductValidation = (dataObject) => editProductSchema.validateAsync(dataObject);
module.exports = { editProductValidation };

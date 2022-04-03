const Joi = require('joi');

const addProductSchema = Joi.object({
  title: Joi.string().required().max(255),
  description: Joi.string(),
  category: Joi.string().required().max(255),
  imgUrl: Joi.string().required().max(255),
  price: Joi.number().required(),

});

const addProudctValidation = (dataObject) => addProductSchema.validateAsync(dataObject);
module.exports = { addProudctValidation };

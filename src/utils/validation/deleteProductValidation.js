const Joi = require('joi');

const deleteProductSchema = Joi.Object({
  id: Joi.number().required(),
});

const deleteProductValidation = (dataObject) => deleteProductSchema.validateAsyn(dataObject);

module.exports = { deleteProductValidation };

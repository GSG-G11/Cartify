const Joi = require('joi');

const deleteProductSchema = Joi.object({
  id: Joi.number().required(),
});

const deleteProductValidation = (dataObject) => deleteProductSchema.validateAsync(dataObject);

module.exports = { deleteProductValidation };

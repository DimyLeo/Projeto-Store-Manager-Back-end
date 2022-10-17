const { idSchema, prodSchema, salesSchema } = require('./schema');

const idValid = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: error.details[0].type, message: 'Invalid ID' };
  return { type: null, message: '' };
};

const prodValid = (product) => {
  const { error } = prodSchema.validate(product);
  if (error) return { type: error.details[0].type, message: error.message };
  return { type: null, message: '' };
};

const salesValid = (sales) => {
  const { error } = salesSchema.validate(sales);
  if (error) return { type: error.details[0].type, message: error.message };
  return { type: null, message: '' };
};

module.exports = {
  idValid,
  prodValid,
  salesValid,
};
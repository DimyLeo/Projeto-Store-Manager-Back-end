const { idSchema } = require('./schema');

const idValid = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: error.details[0].type, message: 'Invalid ID' };
  return { type: null, message: '' };
};

module.exports = {
  idValid,
};
const joy = require('joi');

const idSchema = joy.number().integer().min(1).required();

const prodSchema = joy.object({ name: joy.string().min(5).required() });

const sale = joy.object({ productId: idSchema.label('productId'),
  quantity: idSchema.label('quantity'),
});
const salesSchema = joy.array().items(sale);

module.exports = {
  idSchema,
  prodSchema,
  salesSchema,
};
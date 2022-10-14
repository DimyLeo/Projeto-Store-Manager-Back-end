const productModels = require('../models');
const validationName = require('../middlewares/validationName');

const reciveAllProducts = async () => {
  const response = await productModels.reqProducts();
  return response;
};

const reciveProductsById = async (id) => {
  const response = await productModels.reqProductsById(Number(id));
    if (!response) {
    throw new Error('Product not found');
  }
  return response;
};

const reciveProduct = async (name) => {
  validationName(name);
  const response = await productModels.newProduct(name);
  const obj = { id: response.insertId, name };
  return obj;
};

module.exports = {
  reciveAllProducts,
  reciveProductsById,
  reciveProduct,
};
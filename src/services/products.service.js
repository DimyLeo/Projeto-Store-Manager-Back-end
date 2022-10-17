const validationName = require('../middlewares/validationName');
const { reqProducts, reqProductsById, newProduct } = require('../models/products.models');

const reciveAllProducts = async () => {
  const response = await reqProducts();
  return response;
};

const reciveProductsById = async (id) => {
  const response = await reqProductsById(Number(id));
    if (!response) {
    throw new Error('Product not found');
  }
  return response;
};

const reciveProduct = async (name) => {
  validationName(name);
  const response = await newProduct(name);
  const obj = { id: response.insertId, name };
  return obj;
};

module.exports = {
  reciveAllProducts,
  reciveProductsById,
  reciveProduct,
};
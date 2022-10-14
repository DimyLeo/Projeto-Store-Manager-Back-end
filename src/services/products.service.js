const productModels = require('../models');

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

module.exports = {
  reciveAllProducts,
  reciveProductsById,
};
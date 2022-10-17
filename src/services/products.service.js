const validationName = require('../middlewares/validationName');
const {
  reqProducts,
  reqProductsById,
  newProduct,
  updateProdModel,
  deleteProdModel,
} = require('../models/products.models');
const { idValid, prodValid } = require('../middlewares/validationSale');

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

const updateProdService = async (id, product) => {
  const validId = idValid(id);
  const validProd = prodValid(product);
  if (validId.type) return validId;
  if (validProd.type) return validProd;

  const response = await reqProductsById(id);
  if (!response) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  const { name } = product;
  await updateProdModel(id, name);
  const update = await reqProductsById(id);
  return { type: null, message: update };
};

const deleteProdService = async (id) => {
  const validId = idValid(id);
  if (validId.type) return validId;

  const response = await reqProductsById(id);
  if (!response) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  await deleteProdModel(id);
  return { type: null, message: '' };
};

module.exports = {
  reciveAllProducts,
  reciveProductsById,
  reciveProduct,
  updateProdService,
  deleteProdService,
};
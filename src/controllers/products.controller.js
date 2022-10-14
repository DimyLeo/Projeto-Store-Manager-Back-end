const {
  reciveAllProducts,
  reciveProductsById,
  reciveProduct } = require('../services/products.service');

const getProducts = async (_req, res) => {
  const allProducts = await reciveAllProducts();
  return res.status(200).json(allProducts);
};

const getProductsId = async (req, res) => {
  const { id } = req.params;
  try {
  const productId = await reciveProductsById(Number(id));
  return res.status(200).json(productId);
  } catch (err) {
     return res.status(404).json({ message: err.message });
  }
};

const addProduct = async (req, res) => {
  const { name } = req.body;
  const attProduct = await reciveProduct(name);
  return res.status(201).json(attProduct);
};

module.exports = {
  getProducts,
  getProductsId,
  addProduct,
};
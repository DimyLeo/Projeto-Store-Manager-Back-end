const {
  reciveAllProducts,
  reciveProductsById,
  reciveProduct,
  updateProdService,
} = require('../services/products.service');
const errorMap = require('../middlewares/errorMap');

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
  try {
  const attProduct = await reciveProduct(name);
  return res.status(201).json(attProduct);
  } catch (e) {
    const error = JSON.parse(e.message);
    return res.status(error.code).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  const { type, message } = await updateProdService(id, product);

  if (type) { return res.status(errorMap.mapError(type)).json({ message }); }
  return res.status(200).json(message);
};

module.exports = {
  getProducts,
  getProductsId,
  addProduct,
  updateProduct,
};
const express = require('express');
const controller = require('../controllers/products.controller');

const {
  getProducts,
  getProductsId,
  addProduct,
  updateProduct,
  deleteProduct,
} = controller;

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductsId);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
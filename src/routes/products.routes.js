const express = require('express');
const controller = require('../controllers/products.controller');

const { getProducts, getProductsId, addProduct, updateProduct } = controller;

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductsId);
router.post('/', addProduct);
router.put('/:id', updateProduct);

module.exports = router;
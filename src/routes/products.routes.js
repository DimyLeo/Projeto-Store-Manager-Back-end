const express = require('express');
const controller = require('../controllers/products.controller');

const { getProducts, getProductsId, addProduct } = controller;

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductsId);
router.post('/', addProduct);

module.exports = router;
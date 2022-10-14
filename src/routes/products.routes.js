const express = require('express');
const controller = require('../controllers/products.controller');

const { getProducts, getProductsId } = controller;

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductsId);

module.exports = router;
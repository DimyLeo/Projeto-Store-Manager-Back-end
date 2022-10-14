const express = require('express');
const controller = require('../controllers/sale.controller');
const validationSale = require('../middlewares/validationSale');

const { addSale } = controller;

const router = express.Router();

router.post('/', validationSale, addSale);

module.exports = router;
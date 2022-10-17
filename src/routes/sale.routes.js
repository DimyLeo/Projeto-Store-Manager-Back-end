const express = require('express');
const { salesController } = require('../controllers');

const routes = express.Router();

routes.get('/', salesController.AllSales);
routes.get('/:id', salesController.SaleById);

module.exports = routes;
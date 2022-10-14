const productModels = require('../models');
const validationSale = require('../middlewares/validationSale');
const { newSale } = require('../models/sale.product.model');
const { newSaleProduct  } = require('../models/sale_products.model');

const addNewSale = async (sales) => {
  const saleId = await newSale();
  sales.forEach((sale) => {
    newSaleProduct(sale, saleId);
  });
  const obj = {
    id: saleId,
    itemsSold: sales,
  }
  return obj;
};

module.exports = {
  addNewSale,
};
const { addNewSale } = require('../services/sale.service');

const addSale = async (req, res) => {
  const sales = req.body;
  const response = await addNewSale(sales);
  return res.status(201).json(response);
};

module.exports = {
  addSale,
};
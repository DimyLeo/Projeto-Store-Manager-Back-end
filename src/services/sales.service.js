const { salesModel } = require('../models');
const { idValid } = require('../middlewares/validationSale');

const AllSalesService = async () => {
  const response = await salesModel.AllSalesModel();
  return { type: null, message: response };
};

const SaleByIdService = async (id) => {
  const valid = idValid(id);
  if (valid.type) return valid;

  const response = await salesModel.SaleByIdModel(id);
  if (response.length === 0) { return { type: 'SALE_NOT_FOUND', message: 'Sale not found' }; }

  return { type: null, message: response };
};

module.exports = {
  AllSalesService,
  SaleByIdService,
};
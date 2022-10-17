const { salesService } = require('../services');
const errorMap = require('../middlewares/errorMap');

const AllSales = async (_req, res) => {
  const { message } = await salesService.AllSalesService();
  return res.status(200).json(message);
};

const SaleById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.SaleByIdService(id);
  if (type) { return res.status(errorMap.mapError(type)).json({ message }); }
  return res.status(200).json(message);
};

module.exports = {
  AllSales,
  SaleById,
};
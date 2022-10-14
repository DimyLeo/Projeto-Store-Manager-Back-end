const { reqProducts } = require('../models/products.models');

const validationSale = async (req, res, next) => {
  const sales = req.body;
  sales.forEach(async (obj) => {
  if (!obj.productId) return res.status(400).json({ message: '"productId" is required' });
  if (obj.quantity <= 0) {
    console.log(obj);
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  if (!obj.quantity) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  const arrayProducts = await reqProducts();
  const includesId = arrayProducts.map((index) => index.id).includes(obj.productId);
  if (!includesId) {
    return res.status(404).json({ message: 'Product not found' });
  }
  });
  return next();
};

module.exports = validationSale;

const connection = require('./connection');

const newSaleProduct = async (vendas, saleId) => {
  console.log(saleId, vendas.productId, vendas.quantity);
  await connection.execute(
    'INSERT INTO  StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?,?,?)',
    [saleId, vendas.productId, vendas.quantity],
  );
  return saleId;
};

module.exports = {
  newSaleProduct,
};

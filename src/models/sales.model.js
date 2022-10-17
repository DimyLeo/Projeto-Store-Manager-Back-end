const camelize = require('camelize');
const connection = require('./connection');

const AllSalesModel = async () => {
  const [response] = await connection.execute(
    `
    SELECT sale_id, date, product_id, quantity 
    FROM StoreManager.sales_products as sp
    INNER JOIN StoreManager.sales as s
    ON sp.sale_id = s.id
    `,
  );
  return camelize(response);
};

const SaleByIdModel = async (id) => {
  const [response] = await connection.execute(
    `
    SELECT date, product_id, quantity
    FROM StoreManager.sales_products as sp
    INNER JOIN StoreManager.sales as s
    ON sp.sale_id = s.id
    WHERE sp.sale_id = ?
    `,
    [id],
  );
  return camelize(response);
};

module.exports = {
  AllSalesModel,
  SaleByIdModel,
};
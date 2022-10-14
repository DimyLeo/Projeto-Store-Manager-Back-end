const connection = require('./connection');

const reqProducts = async () => {
  const [result] = await connection.query(
    'SELECT * FROM StoreManager.products ORDER BY id ASC',
  );
  return result;
};

const reqProductsById = async (id) => {
  const [[result]] = await connection.query(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return result;
};

module.exports = {
  reqProducts,
  reqProductsById,
};
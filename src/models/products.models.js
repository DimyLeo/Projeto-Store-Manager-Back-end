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

const newProduct = async (name) => {
  const [result] = await connection.execute(
    'INSERT INTO  StoreManager.products (name) VALUE (?)',
    [name],
  );
  return result;
};

const updateProdModel = async (id, name) => {
  const response = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name, id],
  );
  return response;
};

module.exports = {
  reqProducts,
  reqProductsById,
  newProduct,
  updateProdModel,
};
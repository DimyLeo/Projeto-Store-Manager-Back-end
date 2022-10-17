const connection = require('./connection');

const reqProducts = async () => {
  const [response] = await connection.query(
    'SELECT * FROM StoreManager.products ORDER BY id ASC',
  );
  return response;
};

const reqProductsById = async (id) => {
  const [[response]] = await connection.query(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return response;
};

const newProduct = async (name) => {
  const [response] = await connection.execute(
    'INSERT INTO  StoreManager.products (name) VALUE (?)',
    [name],
  );
  return response;
};

const updateProdModel = async (id, name) => {
  const response = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name, id],
  );
  return response;
};

const deleteProdModel = async (id) => {
  const response = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return response;
};

module.exports = {
  reqProducts,
  reqProductsById,
  newProduct,
  updateProdModel,
  deleteProdModel,
};
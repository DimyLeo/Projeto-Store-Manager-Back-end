const connection = require('./connection');

const newSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO  StoreManager.sales (date) VALUES (NOW())',
  );
  return insertId;
};

module.exports = {
  newSale
};
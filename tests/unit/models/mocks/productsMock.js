const allProducts = [
  {
    id: 1,
    name: "Martelo de Thor",
  },
  {
    id: 2,
    name: "Traje de encolhimento",
  },
  {
    id: 3,
    name: "Escudo do Capitão América",
  },
];

const productId = {
  id: 1,
  name: "Martelo de Thor",
};

const newProductDB = { insertId: 3, affectedRows: 1 };

module.exports = {
  allProducts,
  productId,
  newProductDB,
};
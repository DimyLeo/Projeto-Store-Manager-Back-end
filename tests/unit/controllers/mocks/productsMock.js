const success = {
  type: null,
  message: [
    {
      id: 1,
      name: "Martelo de Thor",
    },
    {
      id: 2,
      name: "Traje de encolhimento",
    },
  ],
};

const successId = {
  type: null,
  message: 
    {
      id: 1,
      name: "Martelo de Thor",
    },
};

const idNotFound = {
  type: "PRODUCT_NOT_FOUND",
  message: "Product not found",
};

const idInvalid = {
  type: "INVALID_ID",
  message: "please enter a valid id",
};

module.exports = {
  success,
  successId,
  idNotFound,
  idInvalid,
};
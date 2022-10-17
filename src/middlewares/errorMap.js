const errorMap = {
  'number.min': 422,
  PRODUCT_NOT_FOUND: 404,
  SALE_NOT_FOUND: 404,
  'string.min': 422,
  'any.required': 400,
};

const mapError = (type) => errorMap[type] || 500; 

module.exports = {
  mapError,
};
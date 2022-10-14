const validationName = (name) => {
  if (!name) {
    throw new Error(JSON.stringify({ code: 400, message: '"name" is required' }));
  }
  if (name.length < 5) {
    throw new Error(JSON.stringify({
      code: 422,
      message: '"name" length must be at least 5 characters long',
    }));
  }
};

module.exports = validationName;
// START: konverzija camelCase u snake_case za pronalaženje slike
const toSnakeCase = (str) =>
  str.replace(/([A-Z])/g, '_$1').toLowerCase();
// END

const getCardImagePath = (key) => {
  // START: korišćenje snake_case imena za slike
  const snakeKey = toSnakeCase(key);
  return `/cards/${snakeKey}.webp`;
  // END
};

export { getCardImagePath };

// utils/stringUtils.js

export const toSnakeCase = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[\s-]+/g, "_")
    .toLowerCase();
};

// START: snake_case u camelCase (za prevod ključeve)
export function normalizeKey(str) {
  return str
    .split("_")
    .map((w, i) => (i === 0 ? w : w[0].toUpperCase() + w.slice(1)))
    .join("");
}
// END: snake_case u camelCase (za prevod ključeve)

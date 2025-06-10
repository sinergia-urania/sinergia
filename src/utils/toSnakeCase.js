// START: toSnakeCase funkcija
export function toSnakeCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/\s+/g, "_")
    .replace(/-+/g, "_")
    .toLowerCase();
}
// END: toSnakeCase funkcija

// START: snake_case konverzija
export function toSnakeCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2') // razdvaja camelCase
    .replace(/[\s\-]+/g, '_')            // zamenjuje razmake i crtice
    .toLowerCase();                      // pretvara sve u mala slova
}
// END: snake_case konverzija

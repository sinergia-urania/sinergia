
/**
 * Nasumično bira N jedinstvenih karata iz špila bez ponavljanja.
 * @param {string[]} deck - niz svih dostupnih karti (npr. ključevi iz baze)
 * @param {number} count - broj karti koje treba izvući
 * @returns {string[]} - izvučene karte
 */
export function shuffleAndSelect(deck, count) {
  const shuffled = [...deck].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

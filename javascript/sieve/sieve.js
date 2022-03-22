/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @since Marzo 17 2022
 * @desc Darts
 * @see {@link https://exercism.org/tracks/javascript/exercises/darts}
 *
 */

/**
 * Find all primes with the Sieve of Eratosthenes alogrithm
 * @param {number} limit the upper limit to search for the primes
 * @return {[]} array with all prime number
 */
export const primes = (limit) => {
  // generate array with all the numbers
  const PRIMES = [...Array(limit+1).keys()];
  PRIMES[1] = 0; // 1 is not prime

  const BOUNDARY = Math.sqrt(limit);

  // set numbers to zero which arent prime
  for (let i = 2; i <= BOUNDARY; i++) {
    for (let j = i*i; j <= limit; j+=i) {
      PRIMES[j] = 0;
    }
  }

  // delete zeroes of the array
  return PRIMES.filter(Number);
};

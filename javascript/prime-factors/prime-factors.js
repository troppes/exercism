/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @since Marzo 17 2022
 * @desc Prime Factors
 * @see {@link https://exercism.org/tracks/javascript/exercises/prime-factors}
 *
 */

'use strict';

/**
* Caculates the prime factors of given number
* @param {number} inputPrimeNumber prime number to check
* @return {number[]} the prime factors of the number
*/
export const primeFactors = (inputPrimeNumber) => {
  const primeFactors = [];

  let divisor = 2;
  while (inputPrimeNumber >= 2) {
    if (inputPrimeNumber % divisor === 0) { // Found factor
      primeFactors.push(divisor);
      /* divide by divisor since all other prime factors
        need to be smaller than that */
      inputPrimeNumber = inputPrimeNumber / divisor;
    } else {
      divisor++;
    }
  }

  return primeFactors;
};

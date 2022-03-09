/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @since Marzo 3 2022
 * @desc N-th prime
 * @see {@link https://exercism.org/tracks/javascript/exercises/nth-prime}
 *
 */

'use strict';

export const prime = ( targetNumber ) => {
  if (targetNumber <= 0) throw new Error('there is no zeroth prime');

  let foundPrimes = 0;
  let currentNumber = 1;

  while (foundPrimes < targetNumber) {
    currentNumber++;
    if (isPrime(currentNumber)) foundPrimes++;
  }

  return currentNumber;
};

const isPrime = number => {
  if(number < 1) return false;

  let goal = Math.sqrt(number);

  for(let i = 2; i <= goal; i++){
    if(number % i === 0) return false; 
  }

  return true;
}
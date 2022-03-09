/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @since Marzo 3 2022
 * @desc Sum of Multiples
 * @see {@link https://exercism.org/tracks/javascript/exercises/sum-of-multiples}
 *
 */

'use strict';

export const sum = (numbers, limit) => {
  const possibleMultipliers = [...Array(limit).keys()]; // Create new array with values up to limit
  const multipliers = possibleMultipliers.filter(entry => isDivisor(numbers, entry));

  return multipliers.reduce((number1, number2) => number1 += number2, 0); // If not possible = 0;
};

const isDivisor = (numbers, n) => {
  return numbers.some(factor => n % factor === 0);
} 
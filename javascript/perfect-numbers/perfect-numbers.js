/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @since Marzo 3 2022
 * @desc Perfect Numbers
 * @see {@link https://exercism.org/tracks/javascript/exercises/perfect-numbers}
 *
 */

'use strict';

export const classify = (number) => {
  if (number < 1 || parseInt(number) !== number) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  let sumOfFactors = getSumOfFactors(getFactors(number));

  return sumOfFactors < number ? 'deficient' : 
    sumOfFactors > number ? 'abundant' : 'perfect';
};

const getSumOfFactors = (factors) => {
  if(factors.length === 0) return 0;
  
  return factors.reduce((number1, number2) => number1 + number2);
}

const getFactors = (number) => {
  let factors = [];

  for (let i = 1; i < number; i++){
    if (number % i == 0) factors.push(i);
  }

  return factors;
}
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @since Marzo 17 2022
 * @desc Armstrong Numbers
 * @see {@link https://exercism.org/tracks/javascript/exercises/armstrong-numbers}
 *
 */

'use strict';

export const isArmstrongNumber = (numberToCheck) => {
  let totalSum = 0;
  const digitsOfNumber = numberToCheck.toString().length;
  let tempNumberToCheck = numberToCheck;

  while (tempNumberToCheck > 0) {
    const remainder = tempNumberToCheck % 10;
    totalSum += remainder ** digitsOfNumber;
    // remove last digit of the number
    tempNumberToCheck = Math.floor(tempNumberToCheck / 10);
  }
  return totalSum === numberToCheck;
};

/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @since Feb 26 2022
 * @desc Collatz Problem
 * @see {@link https://exercism.org/tracks/javascript/exercises/collatz-conjecture}
 *
 */

export const steps = (inputNumber) => {
  if(inputNumber < 1) throw new Error('Only positive numbers are allowed');
  let count = 0;
  while (inputNumber > 1) {
    if (inputNumber % 2 === 0) {
      inputNumber = inputNumber / 2;
    } else {
      inputNumber = inputNumber * 3 + 1;
    }
    count++;
  }
  return count;
};

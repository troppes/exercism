/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @since Marzo 17 2022
 * @desc Strain
 * @see {@link https://exercism.org/tracks/javascript/exercises/strain}
 *
 */

'use strict';

/**
 * Keeps element in the array if the given function returns true
 * @param {[]} inputArray array with elements to check
 * @param {function} functionToCheck function to check every element of array
 * @return {[]} the array with only the elements that pass the function
 */
export const keep = (inputArray, functionToCheck) => {
  return inputArray.filter((elem) => functionToCheck(elem));
};

/**
 * Keeps element in the array if the given function returns false
 * @param {[]} inputArray array with elements to check
 * @param {function} functionToCheck function to check every element of array
 * @return {[]} the array with only the elements that did not pass the function
 */
export const discard = (inputArray, functionToCheck) => {
  return inputArray.filter((elem) => !functionToCheck(elem));
};

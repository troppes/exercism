/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @since Feb 26 2022
 * @desc Checks if Input is a Pangram
 * @see {@link https://exercism.org/tracks/javascript/exercises/pangram}
 *
 */

'use strict';

export const isPangram = (userInput) => {
  return new Set(userInput.toLowerCase().match(/[a-z]/g)).size === 26; // Regex checks if only a-z is there
};
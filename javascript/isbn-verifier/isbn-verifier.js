/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @since March 5 2022
 * @desc ISBN-Verifier
 * @see {@link https://exercism.org/tracks/javascript/exercises/isbn-verifier}
 *
 */

'use strict';

export const isValid = (isbn) => {
  let isbnArray = isbn.replaceAll('-','').split('');
  isbnArray[isbnArray.length - 1] = 
    isbnArray[isbnArray.length - 1] === 'X' ? 10 : isbnArray[isbnArray.length - 1];

  if (isbnArray.length !== 10) return false;

  let isbnSum = 0;
  for(let number in isbnArray){
    isbnSum += isbnArray[number]*(10-number)
  }

  return isbnSum % 11 == 0;
};

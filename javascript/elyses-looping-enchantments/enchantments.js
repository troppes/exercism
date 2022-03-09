/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @since Marzo 3 2022
 * @desc Elyses Looping Enchantments
 * @see {@link https://exercism.org/tracks/javascript/exercises/elyses-looping-enchantments}
 *
 */

'use strict';

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let cardCounter = 0;

  stack.forEach(currentCard => {
    if(currentCard === card) cardCounter++;
  });

  return cardCounter;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let cardCounterEven = 0;
  let cardCounterOdd = 0;
  
  stack.forEach(currentCard => {
    if(currentCard % 2 === 0){
      cardCounterEven++;
    }else{
      cardCounterOdd++;
    }
  });
  if(type){
    return cardCounterEven;
  }
  return cardCounterOdd;
}

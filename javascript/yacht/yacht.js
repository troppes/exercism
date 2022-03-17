/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @since Marzo 17 2022
 * @desc Yacht
 * @see {@link https://exercism.org/tracks/javascript/exercises/yacht}
 *
 */

'use strict';

/**
  * Calculates the yacht score of  the given dice
  * @param {number[]} dices array with elements to check
  * @param {string} type type of scoring that should be checked
  * @return {number} the score archived with the dice
  */
export const score = (dices, type) => {
  switch (type) {
    case 'ones': return scoreMultiple(dices, 1);
    case 'twos': return scoreMultiple(dices, 2);
    case 'threes': return scoreMultiple(dices, 3);
    case 'fours': return scoreMultiple(dices, 4);
    case 'fives': return scoreMultiple(dices, 5);
    case 'sixes': return scoreMultiple(dices, 6);

    case 'little straight': return dices.sort().join('') === '12345' ? 30 : 0;
    case 'big straight': return dices.sort().join('') === '23456' ? 30 : 0;

    case 'choice': return dices.reduce((a, b) => a + b, 0);
    case 'yacht': return dices.every((dice) => dice === dices[0]) ? 50 : 0;

    case 'four of a kind': return getValueOfFourOfAKind(dices);
    case 'full house': return getValueOfFullHouse(dices);

    default: return 0;
  }
};

/**
  * Calculates the score of the trow with multiple numbers
  * @param {number[]} dices array with elements to check
  * @param {string} number the eye number that should be checked
  * @return {number} the score archived with the dice
  */
const scoreMultiple = (dices, number) => {
  // Filter out the other numbers and then sum
  return dices.filter((dice) => dice === number).reduce((a, b) => a + b, 0);
};

/**
  * Calculates the score of a four of a kind throw
  * @param {number[]} dices array with elements to check
  * @return {number} the score archived with the dice
  */
const getValueOfFourOfAKind = (dices) => {
  const counts = sortDicesInCategories(dices);

  for (let i = 0; i < counts.length; i++) {
    if (counts[i] >= 4) return i * 4;
  }

  return 0;
};

/**
  * Calculates the score of a full house throw
  * @param {number[]} dices array with elements to check
  * @return {number} the score archived with the dice
  */
const getValueOfFullHouse = (dices) => {
  const counts = sortDicesInCategories(dices);

  let score = 0;
  // the booleans check if both conditions are run
  let foundThree = false;
  let foundTwo = false;

  for (let i = 0; i < counts.length; i++) {
    if (counts[i] === 3) {
      score += i * 3;
      // if the condition is run multiple times, it get false again
      foundThree = !foundThree;
    }
    if (counts[i] === 2) {
      score += i * 2;
      foundTwo = !foundTwo;
    }
  }

  if (!foundTwo || !foundThree) score = 0;

  return score;
};

/**
  * sorts the dice depeding of the eye in categories
  * @param {number[]} dices array with elements to check
  * @return {number[]} the dice sorted in categories
  */
const sortDicesInCategories = (dices) => {
  const counts = [-1, 0, 0, 0, 0, 0, 0]; // -1 as dummy to have right index
  dices.forEach((dice) => counts[dice] = (counts[dice]||0) + 1);

  return counts;
};

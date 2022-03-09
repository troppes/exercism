/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @since March 5 2022
 * @desc Amusement Park
 * @see {@link https://exercism.org/tracks/javascript/exercises/annalyns-infiltration}
 *
 */

'use strict';

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  return (kind === 'car' || kind === 'truck')
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  const betterVehicle = (option1.localeCompare(option2) < 0) ? option1 : option2;
  return `${betterVehicle} is clearly the better choice.`;
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  if (age > 10) {
    return 0.5 * originalPrice;
  }
  if (age < 3) {
    return 0.8 * originalPrice;
  }
  return 0.7 * originalPrice;
}

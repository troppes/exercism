/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @since March 5 2022
 * @desc Mixed Juices
 * @see {@link https://exercism.org/tracks/javascript/exercises/mixed-juices}
 *
 */

'use strict';

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name){
    case 'Pure Strawberry Joy':
      return 0.5
      break;

    case 'Energizer':
    case 'Green Garden':
      return 1.5
      break;
    
    case 'Tropical Island':
      return 3
      break;

    case 'All or Nothing':
      return 5
      break;

    default:
      return 2.5
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let count = 0;
  let totalWedges = 0;

  for(const wedge of limes){
    if(totalWedges >= wedgesNeeded) return count;
    switch(wedge){
      case 'small':
        totalWedges += 6
        break;
      case 'medium':
        totalWedges += 8
        break;
      case 'large':
        totalWedges += 10
        break;
      default:
        totalWedges += 0;
    }
    count++;
  }
  return count;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while(timeLeft > 0 && orders.length >= 0){
    timeLeft -= timeToMixJuice(orders.shift());
  }
  return orders;
}
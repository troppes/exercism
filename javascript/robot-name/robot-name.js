/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @module robot-name
 * @since Abril 7 2022
 * @desc Robot name
 * @see{@link{https://exercism.org/tracks/javascript/exercises/robot-name}}
 *
 */

'use strict';

/** Class representing a robot */
export class Robot {
  #name;
  static #USED_NAMES = [];
  static #ALPHABET = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';

  /** Create a new Robot.   */
  constructor() {
    this.#generateName();
  }

  /**
  * @desc Getter for the robot name
  * @return {string} the current name
  */
  get name() {
    return this.#name;
  }

  /** resets the robots name */
  reset() {
    this.#generateName();
  }

  /** generates a new robots name */
  #generateName() {
    let name = '';
    do {
      const FIRST_LETTER = Robot.#ALPHABET[Math.floor(Math.random() *
          Robot.#ALPHABET.length)];
      const SECOND_LETTER = Robot.#ALPHABET[Math.floor(Math.random() *
          Robot.#ALPHABET.length)];
      const NUMBERS = Math.floor(Math.random() * 10).toString() +
                        Math.floor(Math.random() * 10).toString() +
                          Math.floor(Math.random() * 10).toString();

      name = FIRST_LETTER + SECOND_LETTER + NUMBERS;
    } while (Robot.#USED_NAMES.includes(name));

    Robot.#USED_NAMES.push(name);
    this.#name = name;
  }

  /** Clears the robots used names */
  clearNames() {
    Robot.#USED_NAMES.clear();
  }
}

Robot.releaseNames = () => {};

/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @module robot-simulator
 * @since Abril 7 2022
 * @desc Robot simulator
 * @see{@link{https://exercism.org/tracks/javascript/exercises/robot-simulator}}
 *
 */

'use strict';

/** Class representing an error with the robot. */
export class InvalidInputError extends Error {
  /**
   * Create a InvalidInputError.
   * @param {string} message The error message.
   */
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

/** Class representing the robot. */
export class Robot {
  static NORTH = 'north';
  static EAST = 'east';
  static SOUTH = 'south';
  static WEST = 'west';

  static BEARINGS = [Robot.NORTH, Robot.EAST, Robot.SOUTH, Robot.WEST];

  #bearing = Robot.NORTH;
  #coordinates = [0, 0];

  /**
  * @desc Getter for the bearing
  * @return {string} the current bearing
  */
  get bearing() {
    return this.#bearing;
  }

  /**
  * @desc Getter for the coordinates
  * @return {array} the current coordinates
  */
  get coordinates() {
    return this.#coordinates;
  }

  /**
  * @desc Setter for the new bearing
  * @param {string} newBearing the new bearing of the robot
  */
  setBearing(newBearing) {
    if (!Robot.BEARINGS.includes(newBearing)) {
      throw new InvalidInputError();
    }
    this.#bearing = newBearing;
  }

  /**
  * @desc Setter for new coordinates
  * @param {string} coordinateX the new X coordinates of the robot
  * @param {string} coordinateY the new Y coordinates of the robot
  */
  setCoordinates(coordinateX, coordinateY) {
    this.#coordinates = [coordinateX, coordinateY];
  }

  /** Turns the robot right */
  turnRight() {
    this.setBearing(
        Robot.BEARINGS[
            (Robot.BEARINGS.indexOf(this.#bearing) + 1) % Robot.BEARINGS.length
        ]);
  }

  /** Turns the robot left */
  turnLeft() {
    this.setBearing(
        Robot.BEARINGS[
            (Robot.BEARINGS.indexOf(this.#bearing) + 3) % Robot.BEARINGS.length
        ]);
  }

  /** Advances the robot one step */
  advance() {
    switch (this.bearing) {
      case Robot.NORTH:
        this.#coordinates[1]++;
        break;
      case Robot.EAST:
        this.#coordinates[0]++;
        break;
      case Robot.SOUTH:
        this.#coordinates[1]--;
        break;
      case Robot.WEST:
        this.#coordinates[0]--;
        break;
      default:
        throw new InvalidInputError('Bearing not found!');
    }
  }

  /**
  * @desc Places the robot in the coordinate field
  * @param {object} object the coordinate and facing direction
  */
  place({x, y, direction}) {
    this.setCoordinates(x, y);
    this.setBearing(direction);
  }

  /**
  * @desc Runs instructions for the robot
  * @param {string} instructions the instructions at the robot
  */
  evaluate(instructions) {
    for (const INSTRUCTION of instructions.split('')) {
      switch (INSTRUCTION) {
        case 'A':
          this.advance();
          break;
        case 'R':
          this.turnRight();
          break;
        case 'L':
          this.turnLeft();
          break;
        default:
          throw new InvalidInputError('Instruction not found!');
      }
    }
  }
}


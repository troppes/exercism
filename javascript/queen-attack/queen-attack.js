/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @since Abril 19 2022
 * @desc Queen Attack
 * @see{@link{https://exercism.org/tracks/javascript/exercises/queen-attack}}
 *
 */

/** Class for the QueenAttack
  * @property {array} black array with the position of the black queen
  * @property {array} white array with the position of the white queen
 */
export class QueenAttack {
  /** Constructor to set the queens
   * @param {object} Rows and columns of the black and white piece
   */
  constructor({white = [7, 3], black = [0, 3]} = {}) {
    this.white = white;
    this.black = black;

    if (this.white[0] < 0 || this.white[0] > 7 ||
          this.white[1] < 0 || this.white[1] > 7) {
      throw new RangeError('White Queen must be placed on the board');
    }
    if (this.black[0] < 0 || this.black[0] > 7 ||
      this.black[1] < 0 || this.black[1] > 7) {
      throw new RangeError('Black Queen must be placed on the board');
    }
    if (this.white.toString() === this.black.toString()) {
      throw new RangeError('Queens cannot share the same space');
    }
  }

  /**
   * @desc Draws board and places queens
   * @function
   * @return {string} board with queens
   */
  toString() {
    const BOARD_SIZE = 8;
    // Create array with 8 spaces and put array with 8 time _ in them
    const BOARD =
      Array.from(Array(BOARD_SIZE), () => Array(BOARD_SIZE).fill('_'));
    BOARD[this.white[0]][this.white[1]] = 'W';
    BOARD[this.black[0]][this.black[1]] = 'B';

    // Join Array with spaces between them and add an \n
    return BOARD.map((line) => line.join(' ')).join('\n');
  }

  /**
   * @desc Checks if the queens can attack each other
   * @function
   * @return {boolean} True if an attack is possible
   */
  get canAttack() {
    // check straight
    if (this.white[0] === this.black[0] ||
          this.white[1] === this.black[1]) {
      return true;
    }

    // check diagonal with distance
    const DISTANCE_X = Math.abs(this.black[1] - this.white[1]);
    const DISTANCE_Y = Math.abs(this.black[0] - this.white[0]);
    return DISTANCE_X === DISTANCE_Y;
  }
}

/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @since Abril 26 2022
 * @desc A runner for the myvector class
 *
 */

/** Class representing the clock
 * @property {number} #hours The hours of the clock
 * @property {number} #minutes The minutes of the clock
*/
export class Clock {
  #hours;
  #minutes;

  /** Create a new Clock Object.
    * @param {string|number} hours Hours of the clock
    * @param {string|number} minutes minutes of the clock
    * @throws {RangeError} if the time is not valid
  */
  constructor(hours = 0, minutes = 0) {
    this.#hours = Number(hours);
    this.#minutes = Number(minutes);

    this.#correctTime();
  }

  /**
   * @desc Checks if the time is a valid time
   * @function
   * @return {boolean} true if valid time, false if not
   */
  isValidTime() {
    if (this.#hours > 23 || this.#hours < 0 ||
            this.#minutes > 59 || this.#minutes < 0) {
      return false;
    }
    return true;
  };

  /**
   * @desc Returns the time out as string
   * @function
   * @return {string} current time saved in the clock
   */
  toString() {
    return `${this.#hours.toString().padStart(2, '0')}:` +
            `${this.#minutes.toString().padStart(2, '0')}`;
  };

  /**
   * @desc Adds minutes to the clock
   * @function
   * @param {number} minutes The minutes that should be added
   * @return {Clock} this
   */
  plus(minutes) {
    if (minutes < 0) throw new RangeError('Only positive numbers');
    this.#minutes += minutes;
    this.#correctTime();

    return this;
  };

  /**
   * @desc Removes minutes from the clock
   * @function
   * @param {number} minutes The minutes that should be removed
   * @return {Clock} this
   */
  minus(minutes) {
    if (minutes < 0) throw new RangeError('Only positive numbers');
    this.#minutes -= minutes;
    this.#correctTime();

    return this;
  };

  /**
   * @desc Compares two MyClock Objects
   * @function
   * @param {Clock} otherClock The other object to compare to
   * @return {boolean} True if the two objects hold the same time
   */
  equals(otherClock) {
    if (otherClock.constructor !== this.constructor) return false;
    if (otherClock.#hours === this.#hours &&
            otherClock.#minutes === this.#minutes) {
      return true;
    }
    return false;
  };


  /**
   * @desc Corrects the time to correct format
   * @function
   */
  #correctTime() {
    const MINUTES_IN_HOUR = 60;
    const HOURS_IN_DAY = 24;

    if (this.#minutes > 59) {
      this.#hours += Math.floor(this.#minutes / MINUTES_IN_HOUR);
      this.#minutes %= MINUTES_IN_HOUR;
    } else if (this.#minutes < 0) {
      this.#hours += Math.floor(this.#minutes / MINUTES_IN_HOUR);
      this.#minutes = MINUTES_IN_HOUR + (this.#minutes % MINUTES_IN_HOUR);
      if (this.#minutes % MINUTES_IN_HOUR === 0) this.#minutes = 0;
    }
    if (this.#hours > 23) {
      this.#hours %= HOURS_IN_DAY;
    } else if (this.#hours < 0) {
      this.#hours = HOURS_IN_DAY + (this.#hours % HOURS_IN_DAY);
      if (this.#hours % HOURS_IN_DAY === 0) this.#hours = 0;
    }
  };
}

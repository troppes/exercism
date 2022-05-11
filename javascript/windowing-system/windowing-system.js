/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @since Abril 19 2022
 * @desc Windowing System
 * @see {@link https://exercism.org/tracks/javascript/exercises/windowing-system}
 *
 */

'use strict';


/** Class representing the Size
  * @param {number} width The width
  * @param {number} height The height
*/
export class Size {
  width = 80;
  height = 60;

  /** Creates a new Size Object.
    * @param {number} width The width
    * @param {number} height The height
  */
  constructor(width = 80, height = 60) {
    this.resize(width, height);
  };

  /** Function for the resizing the object
    * @param {number} width The width
    * @param {number} height The height
  */
  resize(width, height) {
    this.width = width;
    this.height = height;
  };
}

/** Class representing the Position
  * @param {number} x The x coordinate
  * @param {number} y The y coordinate
*/
export class Position {
  x = 0;
  y = 0;

  /** Creates a new Size Object.
  * @param {number} x The x coordinate
  * @param {number} y The y coordinate
*/
  constructor(x = 0, y = 0) {
    this.move(x, y);
  }

  /** Moves the Position object
  * @param {number} x The x coordinate
  * @param {number} y The y coordinate
*/
  move(x, y) {
    this.x = x;
    this.y = y;
  }
}

/** Class representing a program Windows
  * @param {number} x The x coordinate
  * @param {number} y The y coordinate
*/
export class ProgramWindow {
  size = null;
  position = null;
  screenSize = null;

  /** Creates a new ProgramWindow Object. */
  constructor() {
    this.size = new Size();
    this.position = new Position();
    this.screenSize = new Size(800, 600);
  }

  /** Function to resize the window
  * @param {Size} newSize Size Object to resize
  */
  resize(newSize) {
    if (newSize.width < 1) newSize.width = 1;
    if (newSize.height < 1) newSize.height = 1;
    if (newSize.width > this.screenSize.width) {
      newSize.width = this.screenSize.width - this.position.x;
    }
    if (newSize.height > this.screenSize.height) {
      newSize.height = this.screenSize.height - this.position.y;
    }
    this.size.height = newSize.height;
    this.size.width = newSize.width;
  }

  /** Function to move the window to a new position
  * @param {Position} newPosition Position object to move
  */
  move(newPosition) {
    if (newPosition.x < 0) newPosition.x = 0;
    if (newPosition.y < 0) newPosition.y = 0;
    if (newPosition.x + this.size.width > this.screenSize.width) {
      newPosition.x = this.screenSize.width - this.size.width;
    }
    if (newPosition.y + this.size.height > this.screenSize.height) {
      newPosition.y = this.screenSize.height - this.size.height;
    }
    this.position.x = newPosition.x;
    this.position.y = newPosition.y;
  }
}


/** Changes a Program Window
  * @param {ProgramWindow} programWindow The x coordinate
  * @return {ProgramWindow} the new Programwindow
*/
export function changeWindow(programWindow) {
  const NEW_SIZE = new Size(400, 300);
  const NEW_POSITION = new Position(100, 150);

  programWindow.resize(NEW_SIZE);
  programWindow.move(NEW_POSITION);

  return programWindow;
}

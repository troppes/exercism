/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @since March 5 2022
 * @desc Windowing System
 * @see {@link https://exercism.org/tracks/javascript/exercises/windowing-system}
 *
 */

'use strict';

// Size
export function Size(width = 80, height = 60) {
	this.resize(width, height);
}

Size.prototype.resize = function(width, height) {
  this.width = width;
  this.height = height;
}

//Positon
export function Position(x = 0, y = 0) {
	this.move(x, y);
}

Position.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
}

export class ProgramWindow {
  constructor() {
    this.size = new Size()
    this.position = new Position()
    this.screenSize = new Size(800,600)
  }

  resize(newSize) {
    if(newSize.width < 1) newSize.width = 1;
    if(newSize.height < 1) newSize.height = 1;
    if( newSize.width > this.screenSize.width) {
      newSize.width = this.screenSize.width - this.position.x;
    }
    if( newSize.height > this.screenSize.height) {
      newSize.height = this.screenSize.height - this.position.y;
    }
    
    this.size.height = newSize.height
    this.size.width = newSize.width
  }

  move(newPosition) {
    if(newPosition.x < 0) newPosition.x = 0;
    if(newPosition.y < 0) newPosition.y = 0;
    if(newPosition.x + this.size.width > this.screenSize.width) {
      newPosition.x = this.screenSize.width - this.size.width;
    } 
    if(newPosition.y + this.size.height > this.screenSize.height) {
      newPosition.y = this.screenSize.height - this.size.height;
    } 
  
    this.position.x = newPosition.x;
    this.position.y = newPosition.y;
  }
}

export function changeWindow(programWindow) {
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);

  programWindow.resize(newSize);
  programWindow.move(newPosition);

  return programWindow;
}
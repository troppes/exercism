/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @since Feb 26 2022
 * @desc Palindrome Products
 * @see {@link https://exercism.org/tracks/javascript/exercises/palindrome-products}
 *
 */

'use strict';

export class Palindromes {
  static generate(numberRange) {
    let foundPalindromes = [];
    for(let i = numberRange.minFactor; i <= numberRange.maxFactor; i++){
      for(let j = i; j <= numberRange.maxFactor; j++){
        if(this.checkPalindrome(i*j)){
          let index = foundPalindromes.findIndex(elem => elem.value = i*j);
          if(index !== -1){
            foundPalindromes[index].factors.push[i,j];
          }else{
            foundPalindromes.push({value: i*j, factors: [[i,j]]});
          }
          
        }
      }
    }
    let smallest = foundPalindromes.reduce((prev, curr) => prev.value < curr.value ? prev : curr);
    let largest = foundPalindromes.reduce((prev, curr) => prev.value > curr.value ? prev : curr);

    return {smallest, largest}
  }

  static checkPalindrome(inputNumber) {
    return inputNumber.toString() === inputNumber.toString().split("").reverse().join("");
  }
}

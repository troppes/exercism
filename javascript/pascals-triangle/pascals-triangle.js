/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @since Feb 26 2022
 * @desc Pascals Triangle Problem
 * @see {@link https://exercism.org/tracks/javascript/exercises/pascals-triangle}
 *
 */

export const rows = (inputRows) => {
  if (inputRows === 0) return [];
  let result = [[1]];

  for (let row = 1; row < inputRows; row++) {
      let currentRow = [1];
      let lastRow = result[row-1];

      for(let i = 0; i < lastRow.length-1; i++){
        currentRow.push(lastRow[i]+lastRow[i+1]);
      }
      currentRow.push(1);
      result.push(currentRow);
  }
  return result;
};
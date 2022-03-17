/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @since Marzo 17 2022
 * @desc Darts
 * @see {@link https://exercism.org/tracks/javascript/exercises/darts}
 *
 */

export const score = (x, y) => {
  const distanceToTarget = Math.sqrt(x * x + y * y);

  if (distanceToTarget > 10) return 0;
  if (distanceToTarget > 5) return 1;
  if (distanceToTarget > 1) return 5;
  // Bullseye
  return 10;
};

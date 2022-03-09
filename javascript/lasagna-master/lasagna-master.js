/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Florian Reitz
 * @since March 5 2022
 * @desc Lasagna Master
 * @see {@link https://exercism.org/tracks/javascript/exercises/lasagna-master}
 *
 */

'use strict';

export function cookingStatus(remainingTime) {
	if(remainingTime === undefined) return 'You forgot to set the timer.';
	if(remainingTime === 0){
		return 'Lasagna is done.';
	}else{
		return 'Not done, please wait.';
	}
}

export function preparationTime(layers, timeNeededPerLayer = 2) {
	return layers.length * timeNeededPerLayer;
}

export function quantities(layers) {
	let noodles = 0;
	let sauce = 0;

	for(const layer of layers){
		if(layer === 'noodles') noodles += 50;
		if(layer === 'sauce') sauce += 0.2;
	}
	return { noodles, sauce };
}

export function addSecretIngredient(friendsList, myList){
	myList.push(friendsList[friendsList.length-1]);
}

export function scaleRecipe(recipe, persons){
	let newRecipe = {}
	for (const ingredient in recipe) {
		newRecipe[ingredient] = recipe[ingredient] * (persons/2);
	}
	return newRecipe;
}

// GENETIC EXPERIENCE MANAGEMENT
// by Paul Prae
function Population(numberOfIndividuals, numberOfTraits, possibleTraits, desiredTraits){
	
	var Individual = require('./Individual');

	// PROPERTIES
	this.numberOfIndividuals = typeof numberOfIndividuals !== 'undefined' ? numberOfIndividuals : 10;
	this.numberOfTraits = typeof numberOfTraits !== 'undefined' ? numberOfTraits : 3;
	this.possibleTraits = typeof possibleTraits !== 'undefined' ? possibleTraits : new Array( "red", "blue", "yellow", "green", "teal", "purple", "orange", "brown", "black", "white");
	this.desiredTraits = typeof desiredTraits !== 'undefined' ? desiredTraits : new Array("teal", "purple");


	this.newGeneration = function(numberOfTraits, possibleTraits){

		var generation = new Array();

		for (var i = 0; i < this.numberOfIndividuals; i++) {
			var individual = new Individual(this.numberOfTraits, this.possibleTraits);
			generation.push(individual);
		}

		return generation;

	}

	this.currentGeneration = this.newGeneration();
	this.nextGeneration = new Array();


	// GENETIC OPERATORS
	this.combine = function(individual, mate, crossover, gen){

		var mate = typeof mate !== 'undefined' ? mate : this.findRandomFitIndividual();
		var crossoverPoint = typeof crossover !== 'undefined' ? crossover : Math.floor(individual.traits.length / 2);
		var generation = typeof gen !== 'undefined' ? gen : this.currentGeneration;
		var child = new Individual();

		for (var i = 0; i < child.traits.length; i++) {
			if(i < crossoverPoint){
				child.traits[i] = individual.traits[i];
			} else {
				child.traits[i] = mate.traits[i];
			}
		}
		return child;
	}

	this.evaluate = function(desiredTraits, gen){

		var desiredTraits = typeof desiredTraits !== 'undefined' ? desiredTraits : this.desiredTraits;
		var generation = typeof gen !== 'undefined' ? gen : this.currentGeneration;

		for (var i = 0; i < generation.length; i++) {
			if(generation[i].hasTraits(desiredTraits)){
				generation[i].fitness = true;
			}
		}

	}

	this.findRandomFitIndividual = function(gen){

		var generation = typeof gen !== 'undefined' ? gen : this.currentGeneration;
		var fitIndividuals = this.allFitIndividuals();
		var randomInt = this.getRandomInt(0, fitIndividuals.length - 1);
		return fitIndividuals[randomInt];

	}

	this.allFitIndividuals = function(gen){

		var generation = typeof gen !== 'undefined' ? gen : this.currentGeneration;
		var fitIndividuals = new Array();

		for (var i = 0; i < generation.length; i++) {
			if(generation[i].fitness === true){
				fitIndividuals.push(generation[i]);
			}
		}

		return fitIndividuals;

	}

	// HELPERS
	this.getRandomInt = function(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// PRINTS
	this.prettyPrintGeneration = function(gen){

		var generation = typeof gen !== 'undefined' ? gen : this.currentGeneration;

		for (var i = 0; i < generation.length; i++) {
			console.log('(' + i + ')');
			generation[i].prettyPrint();
		}

	}

}

module.exports = Population;
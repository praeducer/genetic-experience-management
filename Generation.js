// GENETIC EXPERIENCE MANAGEMENT
// by Paul Prae
// First created Janurary 3rd, 2015

var Individual = require('./Individual');

function Generation(generationJSON){

	/* Setup Generation using configuration object */
	var generationArray = JSON.parse(generationJSON);
	
	var individualArray = generationArray['individual'];
	var individualJSON = JSON.stringify(individualArray);

	var numberOfIndividuals = generationArray['numberOfIndividuals'];
	var individuals = new Array();

	/* Methods for initialization */
	this.setRandomIndividuals = function(){

		for (var i = 0; i < numberOfIndividuals; i++) {
			var individual = new Individual(individualJSON);
			individuals.push(individual);
		}

	}

	/* Initialization */
	this.setRandomIndividuals();

	/* Genetic Operators */
	this.mutate = function(){

		for (var i = 0; i < individuals.length; i++) {
			individuals[i].mutate();
		}

	}

	/* More Getters and Setters */
	this.getIndividuals = function(){
		return individuals;
	}

	// by fitness
	this.getSortedIndividuals = function(){

		var toBeSorted = individuals.slice(0);
		return toBeSorted.sort(this.compareFitness);

	}

	this.getAverageFitness = function(){

		var totalFitness = 0;

		for (var i = 0; i < individuals.length; i++) {
			totalFitness += individuals[i].getFitness();
		}

		return totalFitness / individuals.length;

	}

	this.getFittestIndividuals = function(amount){

		var sorted = this.getSortedIndividuals();
		var fittestIndividuals = new Array();

		if(amount > individuals.length){
			amount = individuals.length;
		}

		for (var i = individuals.length - 1; i >= individuals.length - amount; i--) {
		
			fittestIndividuals.push(sorted[i]);

		}

		return fittestIndividuals;

	}

	// Helpers
	this.compareFitness = function(individual1, individual2){

		var fitness1 = individual1.getFitness();
		var fitness2 = individual2.getFitness();
		return fitness1 - fitness2;

	}

	// Prints
	this.printIndividuals = function(amountToPrint){

		for (var i = 0; i < individuals.length; i++) {
		
			individuals[i].print();

		}

	}

	this.printFittest = function(amount){

		var fittestIndividuals = this.getFittestIndividuals(amount);

		for (var i = 0; i < fittestIndividuals.length; i++) {
		
			fittestIndividuals[i].print();

		}

	}

	this.stats = function(){

	}

}

module.exports = Generation;
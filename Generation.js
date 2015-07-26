// GENETIC EXPERIENCE MANAGEMENT
// by Paul Prae
// First created Janurary 3rd, 2015

var Individual = require('./Individual');

function Generation(generationJSON){

	/* Setup Generation using configuration object */
    // private variables
    var generationArray = JSON.parse(generationJSON);
	var individualArray = generationArray['individual'];
	var individualJSON = JSON.stringify(individualArray);

    // public variables
	this.numberOfIndividuals = generationArray['numberOfIndividuals'];
	this.individuals = new Array();

    /* Methods for initialization */
	this.createIndividuals = function (amount) {
	    if (amount < 1) amount = 1;
	    for (var i = 0; i < amount; i++) {
	        this.individuals.push(new Individual(individualJSON));
	    }
	}

    /* The state of the generation */
	Object.defineProperty(this, 'averageFitness', {
	    get: function () {
	        var totalFitness = 0;
	        for (var i = 0; i < this.individuals.length; i++) {
	            totalFitness += this.individuals[i].fitness;
	        }
	        return totalFitness / this.individuals.length;
	    }
	})

    // Returns the most fit individuals as an array or the fittest individual object if amount is 1
	this.findFittest = function(amount){
	    var length = this.individuals.length;
	    var fittestIndividuals = new Array();
	    // sort the individuals
	    this.sort();
	    if (amount > length) {
	        amount = length;
	    } else if (amount <= 1) {
	        return this.individuals[length - 1];
	    }
	    for (var i = length - 1; i >= length - amount; i--) {
	        fittestIndividuals.push(this.individuals[i]);
	    }
	    return fittestIndividuals;
	}

	/* Genetic Operators */
	this.mutate = function(){
        for (var i = 0; i < this.individuals.length; i++) {
			this.individuals[i].mutate();
		}
    }

    /* Helpers */
    // Sort by fitness
	this.sort = function () {
	    this.individuals.sort(this.compareFitness);
	}

	this.compareFitness = function (individual1, individual2) {
		return individual1.fitness - individual2.fitness;
	}

	// Prints
	this.printIndividuals = function (sort) {
	    if (sort) this.sort();
        for (var i = 0; i < this.individuals.length; i++) {
			this.individuals[i].print();
		}
	}

	this.printFittest = function (amount) {
	    var fittestIndividuals = this.findFittest(amount);
		for (var i = 0; i < amount; i++) {
			fittestIndividuals[i].print();
		}
	}

    /* Initialization */
	this.createIndividuals(this.numberOfIndividuals);

}

module.exports = Generation;
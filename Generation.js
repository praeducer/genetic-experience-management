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
	    if (!amount) amount = this.numberOfIndividuals;
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

    // Returns the most fit individuals as an array
	this.findFittest = function(amount){
	    this.sort();
	    return this.individuals.reverse().slice(0, amount);;
	}

	this.findWeakest = function (amount) {
	    this.sort();
	    return this.individuals.slice(0, amount);
	}

	/* Genetic Operators */
	this.mutate = function(){
        for (var i = 0; i < this.individuals.length; i++) {
			this.individuals[i].mutate();
		}
	}

    // Given the some amount of fittest individuals from this generation and some other fit individuals, create a new generation.
	this.mate = function (amountFittest, otherFitIndividuals) {
        // Join the fittest individuals with any others from outside this generation that are chosen to mate.
	    var matingPool = this.findFittest(amountFittest).concat(otherFitIndividuals);
	    var children = new Array();
        // do it
	    for (var session = 0; session < this.numberOfIndividuals; session++) {
	        var partnerA = getRandomInt(0, matingPool.length - 1);
	        var partnerB;
            // get a random individual to mate with but make sure it is not the current individual.
	        do {
	            partnerB = getRandomInt(0, matingPool.length - 1);
	        } while (partnerA == partnerB)
	        var child = matingPool[partnerA].crossover(matingPool[partnerB]);
	        children.push(child);
	    } // done it
	    var childGeneration = new Generation(generationJSON);
        childGeneration.individuals = children;
	    return childGeneration;
	}

    /* Helpers */
    // Sort by fitness
	this.sort = function () {
	    this.individuals.sort(this.compareFitness);
	}

	this.compareFitness = function (individual1, individual2) {
		return individual1.fitness - individual2.fitness;
	}

	var getRandomInt = function (min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

    // Prints
	this.print = function (sort) {
	    if (sort) this.sort();
	    this.printIndividuals();
	}

	this.printIndividuals = function (individuals) {
	    if (!individuals) individuals = this.individuals;
        for (var i = 0; i < individuals.length; i++) {
			individuals[i].print();
		}
	}

	this.printFittest = function (amount) {
	    this.printIndividuals(this.findFittest(amount));
	}

	this.printWeakest = function (amount) {
	    this.printIndividuals(this.findWeakest(amount));
	}

}

module.exports = Generation;
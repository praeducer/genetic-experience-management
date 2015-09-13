// GENETIC EXPERIENCE MANAGEMENT
// by Paul Prae
// First created December 5th, 2014

function Individual(individualJSON){
	
	var Genome = require('./Genome');

    /* Setup Individual using configuration object */
    // private variables
	var individualArray = JSON.parse(individualJSON);
	var genomeArray = individualArray['genome'];
	var genomeJSON = JSON.stringify(genomeArray);
	var fitnessArray = individualArray['fitness'];
	var fittestGenomeJSON = JSON.stringify(fitnessArray['fittestGenome']);
	var mutationArray = individualArray['mutation'];

    // public variables
	this.genome = new Genome(genomeJSON);
	this.fittestGenome = new Genome(fittestGenomeJSON);
	this.mutationRate = mutationArray['rate'];
	this.fitness = 0;

	Object.defineProperty(this, 'JSON', {
	    get: function () {
	        var individual = new Object();
	        individual['Genome'] = this.genome.genes;
	        individual['fitness'] = new Object();
	        individual['fitness']['value'] = this.fitness;
	        individual['mutation'] = new Object();
	        individual['mutation']['rate'] = this.mutationRate;
	        return JSON.stringify(individual, null, '\t');
	    }
	})

    /* Genetic operators */
	this.evaluate = function(){
		this.fitness = this.genome.howSimilar(this.fittestGenome);
	}

	this.mutate = function(){
		this.genome.mutate(this.mutationRate);
		this.evaluate();
	}

	this.crossover = function(mate){
		var Child = new Individual(individualJSON);
		Child.genome = this.genome.crossover(mate.genome);
		Child.evaluate();
		return Child;
	}

    /* Helpers */
	this.print = function(){
		console.log(this.JSON);
	}

    /* Initialization */
	this.evaluate();

}

module.exports = Individual;
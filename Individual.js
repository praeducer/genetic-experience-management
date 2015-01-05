// GENETIC EXPERIENCE MANAGEMENT
// by Paul Prae
// First created December 5th, 2014
// TODO: Unit Test thoroughly
var Genome = require('./Genome');

function Individual(individualJSON){
	
	/* Setup Individual using configuration object */
	var individualArray = JSON.parse(individualJSON);

	var genomeArray = individualArray['genome'];
	var genomeJSON = JSON.stringify(genomeArray);
	var genome = new Genome(genomeJSON);

	var fitnessArray = individualArray['fitness'];
	var fittestGenomeJSON = JSON.stringify(fitnessArray['fittestGenome']);
	var fittestGenome = new Genome(fittestGenomeJSON);

	var mutationArray = individualArray['mutation'];
	var mutationRate = mutationArray['rate'];

	var fitness = 0;

	/* Methods for initialization */
	this.evaluate = function(){

		fitness = genome.howSimilar(fittestGenome);

	}

	/* Initialization */
	this.evaluate();

	/* More Getters and Setters */
	this.getJSON = function(){

		var individual = new Object();
		individual['genome'] = genome.getGenes();
		individual['fitness'] = new Object();
		individual['fitness']['value'] = fitness;
		individual['mutation'] = new Object();
		individual['mutation']['rate'] = mutationRate;
		return JSON.stringify(individual, null, '\t');

	}

	this.getGenome = function(){
		return genome;
	}

	this.getFittestGenome = function(){
		return fittestGenome;
	}

	this.getMutationRate = function(){
		return mutationRate;
	}

	this.getFitness = function(){
		return fitness;
	}


	/* Genetic operators */
	this.mutate = function(){

		genome.mutate(mutationRate);
		this.evaluate();

	}


	// PRINTS
	this.print = function(){
		
		console.log(this.getJSON());

	}

}

module.exports = Individual;
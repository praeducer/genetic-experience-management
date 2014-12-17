// GENETIC EXPERIENCE MANAGEMENT
// by Paul Prae
// TODO: Unit Test thoroughly
// TODO: A Generation should probably be its own class
// TODO: Learn how to override methods properly
// TODO: Figure out how to set things up so there are methods that alter 'this' object's properties versus those of an object that is passed in.
function Population(numberOfIndividuals, numberOfTraits, possibleTraits, desiredTraits){
	
	var Individual = require('./Individual');

	// PROPERTIES
	// TODO: Configuration file.
	var defaultPossibleTraits = new Array( "red", "blue", "yellow", "green", "turquoise", "purple", "orange", "brown", "black", "white");
	var defaultDesiredTraits = new Array("turquoise", "purple");
	var defaultNumberOfIndividuals = 10;
	var defaultNumberOfTraits = 3;
	var defaultChanceOfMutation = 0.05;

	this.numberOfIndividuals = typeof numberOfIndividuals !== 'undefined' ? numberOfIndividuals : defaultNumberOfIndividuals;
	this.numberOfTraits = typeof numberOfTraits !== 'undefined' ? numberOfTraits : defaultNumberOfTraits;
	this.possibleTraits = typeof possibleTraits !== 'undefined' ? possibleTraits : defaultPossibleTraits;
	this.desiredTraits = typeof desiredTraits !== 'undefined' ? desiredTraits : defaultDesiredTraits;


	this.newGeneration = function(numberOfIndividuals, numberOfTraits, possibleTraits){

		var numberOfIndividuals = typeof numberOfIndividuals !== 'undefined' ? numberOfIndividuals : defaultNumberOfIndividuals;
		var numberOfTraits = typeof numberOfTraits !== 'undefined' ? numberOfTraits : defaultNumberOfTraits;
		var possibleTraits = typeof possibleTraits !== 'undefined' ? possibleTraits : defaultPossibleTraits;
		var generation = new Array();

		for (var i = 0; i < this.numberOfIndividuals; i++) {
			var individual = new Individual(this.numberOfTraits, this.possibleTraits);
			generation.push(individual);
		}

		return generation;

	}

	this.lastGeneration = new Array();
	this.currentGeneration = this.newGeneration();


	// GENETIC OPERATORS
	//TODO: test more
	// TODO: make work right
	this.evolve = function(desiredTraits, generation){

		this.lastGeneration = this.currentGeneration;
		var desiredTraits = typeof desiredTraits !== 'undefined' ? desiredTraits : this.desiredTraits;
		var generation = typeof generation !== 'undefined' ? generation : this.currentGeneration;
		var mostFitParent = this.findAMostFitIndividual(generation);
		var selection = this.selectFitMembers(generation.length, generation);
		var nextGeneration = new Array();
		var indexOfUnfitChild = null;

		nextGeneration = this.crossoverGeneration(selection);
		nextGeneration = this.mutateGeneration(defaultChanceOfMutation, nextGeneration);

		indexOfUnfitChild = this.findIndexOfALeastFitIndividual(nextGeneration);
		nextGeneration[indexOfUnfitChild] = mostFitParent;
		this.currentGeneration = nextGeneration;

		return nextGeneration;

	}

	this.evaluate = function(desiredTraits, generation){

		var desiredTraits = typeof desiredTraits !== 'undefined' ? desiredTraits : this.desiredTraits;
		var generation = typeof generation !== 'undefined' ? generation : this.currentGeneration;

		for (var i = 0; i < generation.length; i++) {
			generation[i].evaluate(desiredTraits);
		}

		return generation;

	}

	this.averageFitness = function(generation){

		var generation = typeof generation !== 'undefined' ? generation : this.currentGeneration;
		var totalFitness = 0;

		for (var i = 0; i < generation.length; i++) {
			totalFitness += generation[i].fitness;
		}

		return (totalFitness / generation.length);

	}

	// TODO: Always make sure previous fittest individuals survive. 
	// TODO: When choosing random individuals, always choose fittest members.
	this.selectFitMembers = function(numberOfIndividuals, generation){

		var numberOfIndividuals = typeof numberOfIndividuals !== 'undefined' ? numberOfIndividuals : defaultNumberOfIndividuals;
		var generation = typeof generation !== 'undefined' ? generation : this.currentGeneration;
		var fitIndividuals = this.allFitIndividuals(generation);
		var selection = new Array();
		for (var i = 0; i < numberOfIndividuals; i++) {
			
			if(i < fitIndividuals.length){
				selection.push(fitIndividuals[i]);
			} else {
				selection.push(this.findRandomFitIndividual(fitIndividuals));
			}

		};

		return selection;

	}

	this.mutateGeneration = function(chance, generation){

		var generation = typeof generation !== 'undefined' ? generation : this.currentGeneration;
		var chance = typeof chance !== 'undefined' ? chance : defaultChanceOfMutation;
		
		for (var i = 0; i < generation.length; i++) {
			generation[i].mutate();
		}

		return generation;

	}

	this.crossoverGeneration = function(generation, crossoverPoint){

		var generation = typeof generation !== 'undefined' ? generation : this.currentGeneration;
		var crossoverPoint = typeof crossoverPoint !== 'undefined' ? crossoverPoint : Math.floor(generation[0].traits.length / 2);
		var nextGeneration = new Array();

		for (var i = 0; i < generation.length; i++) {
			nextGeneration.push(this.crossover(generation[i]));
		}

		return nextGeneration;

	}

	// TODO: Do a real crossover and prouce two children
	this.crossover = function(individual, mate, crossoverPoint, generation){

		// this default mate selection will drive fitness up. yay! except watch for local maximums.
		var mate = typeof mate !== 'undefined' ? mate : this.findRandomFitOrFitterIndividual();
		var crossoverPoint = typeof crossoverPoint !== 'undefined' ? crossoverPoint : Math.floor(individual.traits.length / 2);
		var generation = typeof generation !== 'undefined' ? generation : this.currentGeneration;
		var child = new Individual();

		for (var i = 0; i < child.traits.length; i++) {
			if(i < crossoverPoint){
				child.traits[i] = individual.traits[i];
			} else {
				child.traits[i] = mate.traits[i];
			}
		}

		child.evaluate();

		return child;
	}

	this.findAMostFitIndividual = function(generation){

		var generation = typeof generation !== 'undefined' ? generation : this.currentGeneration;
		var fittest = new Individual();

		for (var i = 0; i < generation.length; i++) {
			if(generation[i].fitness >= fittest.fitness){
				fittest = generation[i];
			}
		}

		return fittest;

	}

	this.findALeastFitIndividual = function(generation){

		var generation = typeof generation !== 'undefined' ? generation : this.currentGeneration;
		var leastFit = new Individual();
		var leastFitIndex = 0;

		for (var i = 0; i < generation.length; i++) {
			if(generation[i].fitness <= leastFit.fitness){
				leastFit = generation[i];
				leastFitIndex = i;
			}
		}

		return leastFit;

	}

	this.findIndexOfALeastFitIndividual = function(generation){

		var generation = typeof generation !== 'undefined' ? generation : this.currentGeneration;
		var leastFit = new Individual();
		var leastFitIndex = 0;

		for (var i = 0; i < generation.length; i++) {
			if(generation[i].fitness <= leastFit.fitness){
				leastFit = generation[i];
				leastFitIndex = i;
			}
		}

		return leastFitIndex;

	}

	this.findRandomFitOrFitterIndividual = function(fitness, generation){

		var fitness = typeof fitness !== 'undefined' ? fitness : 1;
		var fitOrFitterIndividuals = this.allFitIndividuals(generation, fitness);
		var generation = typeof generation !== 'undefined' ? generation : this.currentGeneration;

		if (fitOrFitterIndividuals.length != 0){
			var randomInt = this.getRandomInt(0, fitOrFitterIndividuals.length - 1);
			return fitOrFitterIndividuals[randomInt];			
		}
		return null;

	}

	this.findRandomFitIndividual = function(generation){

		var generation = typeof generation !== 'undefined' ? generation : this.currentGeneration;
		var fitIndividuals = this.allFitIndividuals(generation);

		if (fitIndividuals.length > 0){
			var randomInt = this.getRandomInt(0, fitIndividuals.length - 1);
			return fitIndividuals[randomInt];			
		}

		return null;

	}

	this.allFitIndividuals = function(generation, fitness){

		var fitness = typeof fitness !== 'undefined' ? fitness : 1;
		var generation = typeof generation !== 'undefined' ? generation : this.currentGeneration;

		var fitIndividuals = new Array();

		for (var i = 0; i < generation.length; i++) {
			if(generation[i].fitness >= fitness){
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
	this.prettyPrintGeneration = function(generation){

		var generation = typeof generation !== 'undefined' ? generation : this.currentGeneration;

		for (var i = 0; i < generation.length; i++) {
			console.log('(' + i + ')');
			generation[i].prettyPrint();
		}

	}

}

module.exports = Population;
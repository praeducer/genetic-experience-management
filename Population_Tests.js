// GENETIC EXPERIENCE MANAGEMENT
// by Paul Prae
// First created September 13th, 2015

var Population = require('./Population');

var populationConfig = '{\
    "numberOfGenerations": 10,\
    "generation": {\
	    "numberOfIndividuals": 100,\
	    "individual": {\
		    "genome": {\
			    "headerFontFamily" : ["Lobster", "Raleway", "Allerta", "Arvo", "Dancing Script", "Allan", "Molengo", "Droid Serif", "Corben", "Ubuntu", "Bree Serif", "Bevan", "Abril Fatface", "Playfair Display", "Sansita One", "Istok Web", "Pacifico", "Nixie One", "Cantata One", "Rancho"],\
			    "paragraphFontFamily" : ["Cabin", "Goudy Bookletter 1911", "Crimson Text", "PT Sans", "Josefin Sans", "Lekton", "Molengo", "Droid Sans", "Nobile", "Vollkorn", "Open Sans", "Pontano Sans", "Average", "Muli", "Kameron", "Lora", "Arimo", "Ledger", "Imprima", "Gudea"],\
			    "headerColor" : ["white", "black", "gray", "red", "orange", "yellow", "green", "blue", "purple", "brown", "pink", "turquoise"],\
			    "paragraphColor" : ["white", "black", "gray", "red", "orange", "yellow", "green", "blue", "purple", "brown", "pink", "turquoise"],\
			    "backgroundColor" : ["white", "black", "gray", "red", "orange", "yellow", "green", "blue", "purple", "brown", "pink", "turquoise"]\
		    },\
		    "fitness": {\
			    "fittestGenome": {\
				    "headerFontFamily" : ["Nixie One"],\
				    "paragraphFontFamily" : ["Imprima"],\
				    "headerColor" : ["turquoise"],\
				    "paragraphColor" : ["turquoise"],\
				    "backgroundColor" : ["turquoise"]\
			    }\
		    },\
		    "mutation": {\
			    "rate" : 0.10\
		    }\
	    }\
    }\
}';

var population = new Population(populationConfig);
console.log('\nAverage Fitness of First Parent Generation:');
console.log('--------------------');
console.log(population.parentGeneration.averageFitness);

console.log('\nTop 10 Percent Fittest Individuals in Population:');
console.log('--------------------');
population.printTopPercent(0.10);

console.log('\nFittest Individual in Population:');
console.log('--------------------');
population.printFittest(1);

console.log('\n...Iterating generation 10 times...');
population.evolve(10);

console.log('\nAverage Fitness of 11th Child Generation:');
console.log('--------------------');
console.log(population.childGeneration.averageFitness);

console.log('\nFittest Individual in Population Now:');
console.log('--------------------');
population.printFittest(1);

console.log('\n...Iterating generation ' + population.numberOfGenerations + ' more times...');
population.evolve(false);

console.log('\nAverage Fitness of Child Generation Now:');
console.log('--------------------');
console.log(population.childGeneration.averageFitness);

console.log('\nFittest Individual in Population Now:');
console.log('--------------------');
population.printFittest(1);

console.log();
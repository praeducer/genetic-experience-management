// GENETIC EXPERIENCE MANAGEMENT
// by Paul Prae
// First created Janurary 4th, 2015

var Generation = require('./Generation');

var generationConfig = '{\
	"numberOfIndividuals": 5,\
	"individual": {\
		"genome": {\
			"headerFontFamily" : ["Nixie One", "Cantata One", "Rancho"],\
			"paragraphFontFamily" : ["Ledger", "Imprima", "Gudea"],\
			"headerColor" : ["brown", "pink", "turquoise"],\
			"paragraphColor" : ["brown", "pink", "turquoise"],\
			"backgroundColor" : ["brown", "pink", "turquoise"]\
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
			"rate" : 0.25\
		}\
	}\
}';

console.log('~ Individuals from a New Generation ~');
console.log('--------------------');
var generation = new Generation(generationConfig);
generation.printIndividuals(true);

console.log('\nCompare fitness of individuals 1 and 2 (1 - 2):');
console.log('--------------------');
console.log(generation.compareFitness(generation.individuals[1], generation.individuals[2]));

console.log('\nTop 3 Fittest Individuals:');
console.log('--------------------');
generation.printFittest(3);

console.log('\nAverage Fitness of Entire Generation:');
console.log('--------------------');
console.log(generation.averageFitness);

generation.mutate();
console.log('\n\n~ Mutated Individuals ~');
console.log('--------------------');
generation.printIndividuals(true);

console.log('\nTop 3 Fittest Individuals after Mutation:');
console.log('--------------------');
generation.printFittest(3);

console.log('\nAverage Fitness after Mutation:');
console.log('--------------------');
console.log(generation.averageFitness);


console.log();
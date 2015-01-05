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
generation.printIndividuals();

console.log('\nCompare fitness of individuals 1 and 2 (1 - 2):');
console.log('--------------------');
console.log(generation.compareFitness(generation.getIndividuals()[1], generation.getIndividuals()[2]));

console.log('\nTop 3 Fittest Individuals:');
console.log('--------------------');
generation.printFittest(3);

console.log('\nAverage Fitness:');
console.log('--------------------');
console.log(generation.getAverageFitness());

console.log('\n\n~ Mutated Individuals ~');
console.log('--------------------');
generation.mutate();
generation.printIndividuals();

console.log('\nTop 3 Fittest Mutated Individuals:');
console.log('--------------------');
generation.printFittest(3);

console.log('\nAverage Mutated Fitness:');
console.log('--------------------');
console.log(generation.getAverageFitness());


console.log();
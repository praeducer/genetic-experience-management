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

console.log('~ First Generation ~');
console.log('--------------------');
var generation = new Generation(generationConfig);
generation.createIndividuals();
generation.print(true);

console.log('\nCompare fitness of individuals 1 and 2 (1 - 2):');
console.log('--------------------');
console.log(generation.compareFitness(generation.individuals[1], generation.individuals[2]));

console.log('\nTop 3 Fittest Individuals:');
console.log('--------------------');
generation.printFittest(3);

console.log('\nWeakest 2 Individuals:');
console.log('--------------------');
generation.printWeakest(2);

console.log('\nAverage Fitness of Entire Generation:');
console.log('--------------------');
console.log(generation.averageFitness);

generation.mutate();
console.log('\n\n~ Mutated Individuals ~');
console.log('--------------------');
generation.print(true);

console.log('\nFittest Individual after Mutation:');
console.log('--------------------');
generation.printFittest(1);

console.log('\nWeakest Individual after Mutation:');
console.log('--------------------');
generation.printWeakest(1);

console.log('\nAverage Fitness after Mutation:');
console.log('--------------------');
console.log(generation.averageFitness);

console.log('\n~ Second Generation: Mating of three fittest from first generation ~');
console.log('--------------------');
var generation2 = generation.mate(0.5, []);
generation2.print(true);

console.log('\nFittest Individual from Second Generation:');
console.log('--------------------');
generation2.printFittest(1);

console.log('\nWeakest Individual from Second Generation:');
console.log('--------------------');
generation2.printWeakest(1);

console.log('\nAverage Fitness of Second Generation:');
console.log('--------------------');
console.log(generation2.averageFitness);

generation2.mutate();
console.log('\n Mutated Second Generation:');
console.log('--------------------');
generation2.print(true);

console.log('\n~ Third Generation: Mating of three fittest from first and three fittest from second generation ~');
console.log('--------------------');
var generation3 = generation.mate(0.5, generation2.findTopPercent(0.5));
generation3.print(true);

console.log('\nFittest Individual from Third Generation:');
console.log('--------------------');
generation3.printFittest(1);

console.log('\nFittest Twenty Percent from Third Generation:');
console.log('--------------------');
generation3.printTopPercent(0.2);

console.log('\nWeakest Individual from Third Generation:');
console.log('--------------------');
generation3.printWeakest(1);

console.log('\nAverage Fitness of Third Generation:');
console.log('--------------------');
console.log(generation3.averageFitness);


console.log();
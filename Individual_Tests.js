// GENETIC EXPERIENCE MANAGEMENT
// by Paul Prae
// First created Janurary 3rd, 2015
var Individual = require('./Individual');

var individualConfig = '{\
						"genome": {\
							"headerFontFamily" : ["Nixie One", "Cantata One", "Rancho"],\
							"paragraphFontFamily" : ["Ledger", "Imprima", "Gudea"],\
							"headerColor" : ["brown", "pink", "turquoise"],\
							"paragraphColor" : ["brown", "pink", "turquoise"],\
							"backgroundColor" : ["brown", "pink", "turquoise"]\
						},\
						"fitness": {\
							"fittestGenome": {\
								"headerFontFamily" : ["Istok Web"],\
								"paragraphFontFamily" : ["Open Sans"],\
								"headerColor" : ["purple"],\
								"paragraphColor" : ["black"],\
								"backgroundColor" : ["turquoise"]\
							}\
						},\
						"mutation": {\
							"rate" : 0.25\
						}\
				}';

console.log('~ First Individual ~');
console.log('--------------------');
var individual1 = new Individual(individualConfig);
individual1.print();

console.log('\nMutating First Individual with 25% chance of mutation:');
console.log('-----------------------');
individual1.mutate();
individual1.print();

console.log('\n~ Second Individual ~');
console.log('------------------------');
var individual2 = new Individual(individualConfig);
individual2.print();

console.log('\nChild after mating the two individuals:');
console.log('-----------------------');
child = individual1.crossover(individual2);
child.print();

console.log();
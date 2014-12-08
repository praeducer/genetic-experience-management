// GENETIC EXPERIENCE MANAGEMENT
// by Paul Prae
var Individual = require('./Individual');
var Population = require('./Population');

console.log('\n~ TESTING ~');
console.log('==============\n');

console.log('~ New Individual ~');
console.log('--------------------');
var individual = new Individual();
individual.prettyPrint();
console.log('Set fitness to 1:');
console.log('---------------------');
individual.fitness = 1;
individual.prettyPrint();
console.log('Set fitness to count of \'purple\' or \'teal\' traits:');
console.log('----------------------');
individual.fitness = individual.countDesiredTraits();
individual.prettyPrint();

console.log('\n~ Another Individual ~');
console.log('------------------------');
var individual = new Individual();
individual.prettyPrint();
console.log('Evaluate individual to see if it has desired traits of \'purple\' or \'teal\':');
console.log('-------------------------------------------------------------------------------');
individual.evaluate();
individual.prettyPrint();
console.log('100% chance of mutation:');
console.log('-------------------------');
individual.mutate(1);
individual.prettyPrint();
console.log('50% chance of mutation:');
console.log('------------------------');
individual.mutate(.5);
individual.prettyPrint();
console.log('5% chance of mutation:');
console.log('-----------------------');
individual.mutate();
individual.prettyPrint();
console.log('Has the trait \'' + individual.traits[0] + '\'?:');
console.log('---------------------');
console.log(individual.hasTrait(individual.traits[0]));
console.log('Has the trait \'tan\'?:');
console.log('---------------------');
console.log(individual.hasTrait('tan'));

console.log('\n' + '~ New Population ~');
console.log('-------------------');
var population = new Population();
population.prettyPrintGeneration();
console.log('\nEvaluate population to see if it has desired traits of \'purple\' or \'teal\':');
console.log('-------------------------------------------------------------------------------');
population.evaluate();
population.prettyPrintGeneration();
console.log('\nAll fit individuals:');
console.log('------------------------------------');
population.prettyPrintGeneration(population.allFitIndividuals());
console.log('\nA random fit individual:');
console.log('------------------------------------');
population.findRandomFitIndividual().prettyPrint();
console.log('\nAll individuals with a fitness 2 or greater:');
console.log('------------------------------------');
population.prettyPrintGeneration(population.allFitIndividuals(2));
console.log('\nA random individual with a fitness 2 or greater:');
console.log('------------------------------------');
individual = population.findRandomFitOrFitterIndividual(2);
if (individual != null){ individual.prettyPrint();}
console.log('\nCombining first individual with second produces:');
console.log('-------------------------------------------------');
first = population.currentGeneration[0];
second = population.currentGeneration[1];
child = population.combine(first, second);
child.prettyPrint();
console.log('Combining first individual with a random fit individual:');
console.log('-------------------------------------------------');
child = population.combine(first);
child.prettyPrint();

console.log('\n=================================================================\n');


// GENETIC EXPERIENCE MANAGEMENT
// by Paul Prae
// First created December 5th, 2014
var Individual = require('./Individual');
var Population = require('./Population');

console.log('\n~ TESTING ~');
console.log('==============\n');

console.log('~ First Individual: Fitness Evaluation ~');
console.log('--------------------');
var individual = new Individual();
individual.prettyPrint();
console.log('Set fitness to 0:');
console.log('---------------------');
individual.fitness = 0;
individual.prettyPrint();
console.log('Set fitness to count of \'purple\' or \'turquoise\' traits:');
console.log('----------------------');
individual.fitness = individual.countDesiredTraits();
individual.prettyPrint();
console.log('Evaluate individual to see if it has desired traits of \'purple\' or \'turquoise\':');
console.log('-------------------------------------------------------------------------------');
individual.evaluate();
individual.prettyPrint();

console.log('\n~ Next Individual: Mutation ~');
console.log('------------------------');
var individual = new Individual();
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

console.log('\n' + '~ First Population: Fitness Evaluation ~');
console.log('----------------------------------------');
var population = new Population();
population.prettyPrintGeneration();
console.log('\nEvaluate population to see if it has desired traits of \'purple\' or \'turquoise\':');
console.log('-------------------------------------------------------------------------------');
population.evaluate();
population.prettyPrintGeneration();
console.log('\nAverage fitness:');
console.log('--------------------');
console.log(population.averageFitness());
console.log('\nIndex of a least fit individual:');
console.log('------------------------------------');
index = population.findIndexOfALeastFitIndividual();
console.log(index);
console.log('\nAll fit individuals:');
console.log('------------------------------------');
population.prettyPrintGeneration(population.allFitIndividuals());
console.log('\nA most fit individual:');
console.log('------------------------------------');
fittest = population.findAMostFitIndividual();
fittest.prettyPrint();
console.log('\nA random fit individual:');
console.log('------------------------------------');
rando = population.findRandomFitIndividual();
rando.prettyPrint();
console.log('\nAll individuals with a fitness 2 or greater:');
console.log('------------------------------------');
population.prettyPrintGeneration(population.allFitIndividuals(population.currentGeneration, 2));
console.log('\nA random individual with a fitness 2 or greater:');
console.log('------------------------------------');
individual = population.findRandomFitOrFitterIndividual(2);
if (individual != null){ individual.prettyPrint();}
console.log('\nSelect 10 fit individuals:');
console.log('------------------------------------');
population.prettyPrintGeneration(population.selectFitMembers());

console.log('\n' + '~ Next Population: Crossing Over ~');
console.log('------------------------------------');
var population = new Population();
population.prettyPrintGeneration();
console.log('\nCombining first individual with second produces:');
console.log('-------------------------------------------------');
first = population.currentGeneration[0];
second = population.currentGeneration[1];
child = population.crossover(first, second);
child.prettyPrint();
console.log('Combining first individual with a random fit individual:');
console.log('-------------------------------------------------');
child = population.crossover(first);
child.prettyPrint();
console.log('\nCrossing over entire generation. Each member mates with a random fit member:');
console.log('------------------------------------------------------------------------------');
crossedGeneration = population.crossoverGeneration();
population.prettyPrintGeneration(crossedGeneration);

console.log('\n' + '~ Next Population: Mutation ~');
console.log('-------------------------------');
var population = new Population();
population.prettyPrintGeneration();
console.log('\nMutating entire generation. 30% chance of mutation:');
console.log('------------------------------------------------------------------------------');
mutatedGeneration = population.mutateGeneration();
population.prettyPrintGeneration(mutatedGeneration);

// not ready yet
console.log('\n' + '~ Next Population: Evolution ~');
console.log('-------------------------------');
var population = new Population();
population.prettyPrintGeneration();
console.log('\nA most fit individual:');
console.log('------------------------------------');
fittest = population.findAMostFitIndividual();
fittest.prettyPrint();
console.log('\nA least fit individual:');
console.log('------------------------------------');
fittest = population.findALeastFitIndividual();
fittest.prettyPrint();
console.log('\nAverage fitness:');
console.log('--------------------');
console.log(population.averageFitness());
console.log('\nEvolve the current generation to the next (selection, crossover, mutation):');
console.log('------------------------------------------------------------------------------');
population.prettyPrintGeneration(population.evolve());
console.log('\nEvolve again:');
console.log('------------------------------------');
population.prettyPrintGeneration(population.evolve());
console.log('\nAnd then again:');
console.log('------------------------------------');
population.prettyPrintGeneration(population.evolve());
console.log('\nAnd again:');
console.log('------------------------------------');
population.prettyPrintGeneration(population.evolve());
console.log('\nSix generations later, much more fit!:');
console.log('------------------------------------');
population.prettyPrintGeneration(population.evolve());
console.log('\nA most fit individual:');
console.log('------------------------------------');
fittest = population.findAMostFitIndividual();
fittest.prettyPrint();
console.log('\nA least fit individual:');
console.log('------------------------------------');
fittest = population.findALeastFitIndividual();
fittest.prettyPrint();
console.log('\nAverage fitness:');
console.log('--------------------');
console.log(population.averageFitness());



console.log('\n=================================================================\n');


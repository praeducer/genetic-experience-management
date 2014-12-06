// GENETIC EXPERIENCE MANAGEMENT
// by Paul Prae
var Individual = require('./Individual');
var Population = require('./Population');

console.log('~ New Individual ~');
var individual = new Individual();
individual.prettyPrint();
console.log('    set fitness to true...');
individual.fitness = true;
individual.prettyPrint();
console.log('    100% mutation...');
individual.mutate(1);
individual.prettyPrint();
console.log('    has the trait ' + individual.traits[0] + '...?');
console.log(individual.hasTrait(individual.traits[0]));

console.log('\n' + '~ New Population ~');
var population = new Population();
population.prettyPrintGeneration();
console.log('    evaluate population to see if it has desired traits of \'purple\' or \'teal\'...');
population.evaluate();
console.log('\n' + '~ Evaluated Population ~');
population.prettyPrintGeneration();
console.log('    combine first individual with second produces...');
first = population.currentGeneration[0];
second = population.currentGeneration[1];
child = population.combine(first, second);
child.prettyPrint();
// GENETIC EXPERIENCE MANAGEMENT
// by Paul Prae
// First created September 13th, 2015

var Population = require('./Population');
var fs = require('fs');
var configJSONPath = "./gem.json"; // filepath of the file to read
var configJSON = fs.readFileSync(configJSONPath, 'utf8');
var configArray = JSON.parse(configJSON);
var populationArray = configArray['gem']['population'];
var populationJSON = JSON.stringify(populationArray);

var population = new Population(populationJSON);
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
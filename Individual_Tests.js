// GENETIC EXPERIENCE MANAGEMENT
// by Paul Prae
// First created Janurary 3rd, 2015
var Individual = require('./Individual');

var fs = require('fs');
var configJSONPath = "./gem.json"; // filepath of the file to read
var configJSON = fs.readFileSync(configJSONPath, 'utf8');
var configArray = JSON.parse(configJSON);
var individualArray = configArray['gem']['population']['generation']['individual'];
var individualJSON = JSON.stringify(individualArray);

console.log('~ First Individual ~');
console.log('--------------------');
var individual1 = new Individual(individualJSON);
individual1.print();

console.log('\nMutating First Individual:');
console.log('-----------------------');
individual1.mutate();
individual1.print();

console.log('\n~ Second Individual ~');
console.log('------------------------');
var individual2 = new Individual(individualJSON);
individual2.print();

console.log('\nChild after mating the two individuals:');
console.log('-----------------------');
var child = individual1.crossover(individual2);
child.print();

console.log();
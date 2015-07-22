var Genome = require('./Genome');

var genomeConfig = '{\
						"headerFontFamily" : ["Nixie One", "Cantata One", "Rancho"],\
						"paragraphFontFamily" : ["Ledger", "Imprima", "Gudea"],\
						"headerColor" : ["brown", "pink", "turquoise"],\
						"paragraphColor" : ["brown", "pink", "turquoise"],\
						"backgroundColor" : ["brown", "pink", "turquoise"]\
					}';

console.log("\nA new Genome:")
console.log('---------------');
var genome = new Genome(genomeConfig);
genome.print();

console.log("\nNumber of Genes:")
console.log('---------------');
console.log(genome.length);

console.log("\nNames of Genes:")
console.log('---------------');
console.log(genome.names);

console.log("\n100% Mutation:")
console.log('---------------');
genome.mutate(1);
genome.print();

console.log("\n50% Mutation:")
console.log('---------------');
genome.mutate(0.5);
genome.print();

console.log("\nEqual to itself?")
console.log('---------------');
console.log(genome.isEqual(genome));

console.log("\nAnother Genome:")
console.log('---------------');
var genome2 = new Genome(genomeConfig);
genome2.print();

console.log("\nEqual to new genome?")
console.log('---------------');
console.log(genome.isEqual(genome2));

console.log("\nHow similar is it to the to new genome?")
console.log('---------------');
console.log(genome.howSimilar(genome2));


console.log("\nHow similar is it to itself?")
console.log('---------------');
console.log(genome.howSimilar(genome));

console.log("\nChild of original genome and new genome:")
console.log('---------------');
childGenome = genome.crossover(genome2);
childGenome.print();

console.log("\nHow similar is the child to the first parent?")
console.log('---------------');
console.log(childGenome.howSimilar(genome));

console.log("\nHow similar is the child to the second parent?")
console.log('---------------');
console.log(childGenome.howSimilar(genome2));

console.log();
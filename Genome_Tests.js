var Genome = require('./Genome');

var genomeConfig = '{\
						"headerFontFamily" : ["Lobster", "Raleway", "Allerta", "Arvo", "Dancing Script", "Allan", "Molengo", "Droid Serif", "Corben", "Ubuntu", "Bree Serif", "Bevan", "Abril Fatface", "Playfair Display", "Sansita One", "Istok Web", "Pacifico", "Nixie One", "Cantata One", "Rancho"],\
						"paragraphFontFamily" : ["Cabin", "Goudy Bookletter 1911", "Crimson Text", "PT Sans", "Josefin Sans", "Lekton", "Molengo", "Droid Sans", "Nobile", "Vollkorn", "Open Sans", "Pontano Sans", "Average", "Muli", "Kameron", "Lora", "Arimo", "Ledger", "Imprima", "Gudea"],\
						"headerColor" : ["white", "black", "gray", "red", "orange", "yellow", "green", "blue", "purple", "brown", "pink", "turquoise"],\
						"paragraphColor" : ["white", "black", "gray", "red", "orange", "yellow", "green", "blue", "purple", "brown", "pink", "turquoise"],\
						"backgroundColor" : ["white", "black", "gray", "red", "orange", "yellow", "green", "blue", "purple", "brown", "pink", "turquoise"]\
					}';

console.log("\nA new Genome:")
console.log('---------------');
var genome = new Genome(genomeConfig);
genome.printGenome();

console.log("\nNumber of Genes:")
console.log('---------------');
console.log(genome.getCount());

console.log("\nNames of Genes:")
console.log('---------------');
console.log(genome.getNames());

console.log("\n100% Mutation:")
console.log('---------------');
genome.mutate(1);
genome.printGenome();

console.log("\n50% Mutation:")
console.log('---------------');
genome.mutate(0.5);
genome.printGenome();

console.log("\nEqual to itself?")
console.log('---------------');
console.log(genome.isEqual(genome));

console.log("\nAnother Genome:")
console.log('---------------');
var genome2 = new Genome(genomeConfig);
genome2.printGenome();

console.log("\nEqual to new genome?")
console.log('---------------');
console.log(genome.isEqual(genome2));
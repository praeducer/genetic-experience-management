

function Genome(genomeJSON){

	// Setup Genome using configuration object
	this.potentialGenes = JSON.parse(genomeJSON);
	this.count = Object.keys(this.potentialGenes).length;
	this.genes = new Array();

	// Methods for initialization
	this.setRandomGenes = function(){

		var geneNames = Object.keys(this.potentialGenes);
		for (var i = 0; i < this.count; i++){
			var geneName = geneNames[i];
			var geneValues = this.potentialGenes[geneName];
			var randomGeneValue = geneValues[Math.floor(Math.random()*geneValues.length)];;
			this.genes[geneName] = randomGeneValue;
		}

	}

	// Initialize Genes
	this.setRandomGenes();

	// Prints
	this.printGenome = function(){
		genes = this.genes
		Object.keys(genes).forEach(function (key) {
			console.log(key + ": " + genes[key]);
		});
	}

}

module.exports = Genome;
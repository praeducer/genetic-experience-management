

function Genome(genomeJSON){

	/* Setup Genome using configuration object */
	var potentialGenes = JSON.parse(genomeJSON);
	var names = Object.keys(potentialGenes);
	var count = Object.keys(potentialGenes).length;
	var genes = new Object();

	/* Methods for initialization */
	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min)) + min;
	}

	this.getRandomGene = function(name){

			var values = potentialGenes[name];
			var index = getRandomInt(0, values.length);
			return values[index];
		
	}

	this.setRandomGene = function(name){

		genes[name] = this.getRandomGene(name);

	}

	this.setRandomGenes = function(){

		for (var i = 0; i < count; i++){

			this.setRandomGene(names[i]);

		}

	}

	// Initialize Genes
	this.setRandomGenes();

	/* More Getters and Setters */

	this.getGenes = function(){
		return genes;
	}

	this.getNames = function(){
		return names;
	}

	this.getCount = function(){
		return count;
	}

	this.getJSON = function(){
		return JSON.stringify(genes, null, '\t');
	}

	/* Genetic operators */

	this.mutate = function(rate){

		for (var i = 0; i < count; i++){

			if(Math.random() <= rate){
				var name = names[i];
				this.setRandomGene(name);
			}

		}

	}

	/* Helper Methods */

	this.hasGene = function(nameToMatch, valueToMatch){

		if(names.indexOf(nameToMatch) > -1){

			if(valueToMatch == genes[nameToMatch]){
				return true;
			}

		}
		return false;

	}

	this.isEqual = function(genomeToMatch){
		var namesToMatch = genomeToMatch.getNames();
		var genesToMatch = genomeToMatch.getGenes();
		for (var i = 0; i < genomeToMatch.getCount(); i++){
			var nameToMatch = namesToMatch[i];
			var valueToMatch = genesToMatch[nameToMatch];
			if(!this.hasGene(nameToMatch, valueToMatch)){
				return false;
			}
		}
		return true;
	}

	this.howSimilar = function(genomeToCompare){

		var geneMatchCount = 0;
		var namesToMatch = genomeToCompare.getNames();
		var genesToMatch = genomeToCompare.getGenes();
		for (var i = 0; i < genomeToCompare.getCount(); i++){
			var nameToMatch = namesToMatch[i];
			var valueToMatch = genesToMatch[nameToMatch];
			if(this.hasGene(nameToMatch, valueToMatch)){
				geneMatchCount++;
			}
		}

		return geneMatchCount / count;

	}


	// Prints
	this.print = function(){

		console.log(this.getJSON());

	}

}

module.exports = Genome;
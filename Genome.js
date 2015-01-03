

function Genome(genomeJSON){

	/* Setup Genome using configuration object */
	this.potentialGenes = JSON.parse(genomeJSON);
	this.names = Object.keys(this.potentialGenes);
	this.count = Object.keys(this.potentialGenes).length;
	this.genes = new Array();

	/* Methods for initialization */

	// NOTE: This distribution may not be completely random.
	this.getRandomGene = function(name){

			var values = this.potentialGenes[name];
			return values[Math.floor(Math.random()*values.length)];;
		
	}

	this.setRandomGene = function(name){

		this.genes[name] = this.getRandomGene(name);

	}

	this.setRandomGenes = function(){

		for (var i = 0; i < this.count; i++){

			this.setRandomGene(this.names[i]);

		}

	}

	// Initialize Genes
	this.setRandomGenes();

	/* More Getters and Setters */

	this.getGenes = function(){
		return this.genes;
	}

	this.getNames = function(){
		return this.names;
	}

	this.getCount = function(){
		return this.count;
	}

	/* Genetic operators */

	this.mutate = function(chance){

		for (var i = 0; i < this.count; i++){

			if(Math.random() <= chance){
				var name = this.names[i];
				this.setRandomGene(name);
			}

		}

	}

	/* Helper Methods */

	this.hasGene = function(nameToMatch, valueToMatch){

		if(this.names.indexOf(nameToMatch) > -1){

			if(valueToMatch == this.genes[nameToMatch]){
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


	// Prints
	this.printGenome = function(){

		genes = this.genes
		Object.keys(genes).forEach(function (key) {
			console.log(key + ": " + genes[key]);
		});

	}

}

module.exports = Genome;
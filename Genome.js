

function Genome(genomeJSON){

    /* Setup Genome using configuration object */
    // private variables
    var potentialGenes = JSON.parse(genomeJSON);

    // public variables
	this.names = Object.keys(potentialGenes);
	this.length = Object.keys(potentialGenes).length;
	this.genes = new Object();

	Object.defineProperty(this, 'JSON', {
	    get: function () {
	        return JSON.stringify(this.genes, null, '\t');
	    }
	})

	/* Methods for initialization */
	var getRandomInt = function(min, max) {
	  return Math.floor(Math.random() * (max - min)) + min;
	}

	this.getRandomGene = function(name){
			var values = potentialGenes[name];
			var index = getRandomInt(0, values.length);
			return values[index];		
	}

	this.setRandomGene = function(name){
		this.genes[name] = this.getRandomGene(name);
	}

	this.setRandomGenes = function(){
		for (var i = 0; i < this.length; i++){
			this.setRandomGene(this.names[i]);
		}
	}

	/* Genetic operators */
	this.mutate = function(rate){
	    for (var i = 0; i < this.length; i++) {
			if(Math.random() <= rate){
				var name = this.names[i];
				this.setRandomGene(name);
			} // end if
		} // end for
	} // end mutate

	// Random chance any particular gene is from either parent.
	this.crossover = function(mate){
		var Child = new Genome(genomeJSON);
		// Duplicate this parent. Assuming the same species i.e. from the same config.
		Child.copyGenes(this.genes);
		var mateNames = mate.names;
		var mateGenes = mate.genes;
		for (var i = 0; i < mate.length; i++){
			if(Math.random() <= 0.5){
				var nameToPass = mateNames[i];
				var valueToPass = mateGenes[nameToPass];
				Child.genes[nameToPass] = valueToPass;
			}
		}
		return Child;
	} // end crossover

	/* Helper Methods */
	this.copyGenes = function (genesToCopy) {
		var namesToCopy = Object.keys(genesToCopy);
		var geneCount = Object.keys(genesToCopy).length; 
		for (var i = 0; i < geneCount; i++){
			var nameToCopy = namesToCopy[i];
			this.genes[nameToCopy] = genesToCopy[nameToCopy];
		} // end for
	} // end copyGenes

	this.hasGene = function(nameToMatch, valueToMatch){
		if(this.names.indexOf(nameToMatch) > -1){
			if(valueToMatch == this.genes[nameToMatch]){
				return true;
			}
		} // end if index exists
		return false;
	} // end hasGene

	this.isEqual = function(genomeToMatch){
	    if (this.length != genomeToMatch.length) {
			return false;
		}
		var namesToMatch = genomeToMatch.names;
		var genesToMatch = genomeToMatch.genes;
		for (var i = 0; i < genomeToMatch.length; i++){
			var nameToMatch = namesToMatch[i];
			var valueToMatch = genesToMatch[nameToMatch];
			if(!this.hasGene(nameToMatch, valueToMatch)){
				return false;
			} // end if not hasGene
		} // end for
		return true;
	} // end isEqual

	// returns the percentage of genes that are the same
	this.howSimilar = function(genomeToCompare){
		var geneMatchCount = 0;
		var namesToMatch = genomeToCompare.names;
		var genesToMatch = genomeToCompare.genes;
		for (var i = 0; i < genomeToCompare.length; i++){
			var nameToMatch = namesToMatch[i];
			var valueToMatch = genesToMatch[nameToMatch];
			if(this.hasGene(nameToMatch, valueToMatch)){
				geneMatchCount++;
			} // end if hasGene
		} // end for
		return geneMatchCount / this.length;
	} // end howSimilar


	// Prints
	this.print = function(){
		console.log(this.JSON);
	}

    /* Initialization */
	this.setRandomGenes();

} // end Genome

module.exports = Genome;
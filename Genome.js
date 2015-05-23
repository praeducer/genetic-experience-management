

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

	this.setGenes = function(newGenes){
		this.newGenes = genes;
	}

	/* Genetic operators */

	this.mutate = function(rate){

		for (var i = 0; i < count; i++){

			if(Math.random() <= rate){
				var name = names[i];
				this.setRandomGene(name);
			} // end if
		} // end for
	} // end mutate

	//TODO: Implement
	// Random chance any particular gene is from either parent.
	this.crossover = function(mate){

		var Child = new Genome(genomeJSON);
		// Duplicate this parent. Assuming the same species i.e. from the same config.
		Child.setGenes(this.getGenes);

		var mateNames = mate.getNames();
		var mateGenes = mate.getGenes();
		for (var i = 0; i < mate.getCount(); i++){
			if(Math.random() <= 0.5){
				var nameToPass = mateNames[i];
				var valueToPass = mateGenes[nameToPass];
				Child.setGene(nameToPass, valueToPass);
			}
		}
		// // create a configuration array with one value of each gene from each parent
		// var childConfig = new Object();
		// // populate with this parents genes
		// childConfig['genome'] = genome.getGenes();
		// geneNames = genome.getNames();

		// var mateGenes = mate.getGenome().getGenes();

		// // for each gene name in the genome, push the mates genes onto the config object
		// for (var i = 0; i < genome.getCount(); i++) {
			
		// 	childConfig['genome'][geneNames[i]].push(mateGenes[geneNames[i]]);

		// };

		// // convert it to the JSON this class expects
		// var childJSON = JSON.stringify(childConfig, null, '\t');
		return Child;

	} // end crossover

	/* Helper Methods */

	this.hasGene = function(nameToMatch, valueToMatch){

		if(names.indexOf(nameToMatch) > -1){
			if(valueToMatch == genes[nameToMatch]){
				return true;
			}
		} // end if index exists
		return false;
	} // end hasGene


	this.isEqual = function(genomeToMatch){
		if(this.getCount() != genomeToMatch.getCount()){
			return false;
		}
		var namesToMatch = genomeToMatch.getNames();
		var genesToMatch = genomeToMatch.getGenes();
		for (var i = 0; i < genomeToMatch.getCount(); i++){
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
		var namesToMatch = genomeToCompare.getNames();
		var genesToMatch = genomeToCompare.getGenes();
		for (var i = 0; i < genomeToCompare.getCount(); i++){
			var nameToMatch = namesToMatch[i];
			var valueToMatch = genesToMatch[nameToMatch];
			if(this.hasGene(nameToMatch, valueToMatch)){
				geneMatchCount++;
			} // end if hasGene
		} // end for

		return geneMatchCount / count;

	} // end howSimilar


	// Prints
	this.print = function(){

		console.log(this.getJSON());

	}

}

module.exports = Genome;
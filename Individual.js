// GENETIC EXPERIENCE MANAGEMENT
// by Paul Prae
function Individual(numberOfTraits, possibleTraits){
	
	// PROPERTIES
	var defaultPossibleTraits = new Array( "red", "blue", "yellow", "green", "teal", "purple", "orange", "brown", "black", "white");
	var defaultNumberOfTraits = 3;

	this.numberOfTraits = typeof numberOfTraits !== 'undefined' ? numberOfTraits : defaultNumberOfTraits;
	this.possibleTraits = typeof possibleTraits !== 'undefined' ? possibleTraits : defaultPossibleTraits;

	// TODO: Why does this need to be defined before it is called below? Can we avoid this? Clumsy with a function defined inside this too...
	this.newTraits = function(){

		var traits = new Array();
		var getRandomInt = function(min, max) {
	    	return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		
		for (var i = 0; i < this.numberOfTraits; i++) {
			randomInt = getRandomInt(0, this.possibleTraits.length - 1);
			traits.push(this.possibleTraits[randomInt]);
		}

		return traits;

	}

	this.traits = this.newTraits();
	this.fitness = 0;

	// GENETIC OPERATIONS
	this.mutate = function(chance){

		var chance = typeof chance !== 'undefined' ? chance : 0.05;

		for (var i = 0; i < this.numberOfTraits; i++) {
			if(Math.random() <= chance){
				this.traits[i] = this.getRandomTrait();
			}
		}

	}

	this.evaluate = function(desiredTraits){

		this.fitness = this.countDesiredTraits();

	}

	// HELPERS
	this.getRandomInt = function(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	this.getRandomTrait = function(){
		randomInt = this.getRandomInt(0, this.possibleTraits.length - 1);
		return this.possibleTraits[randomInt];
	}

	this.hasTrait = function(trait){

		for (var i = 0; i < this.traits.length; i++) {
			if (this.traits[i] == trait){
				return true;
			}
		}
		return false;

	}

	this.hasTraits = function(traits){

		for (var i = 0; i < traits.length; i++) {
			if (this.hasTrait(traits[i])){
				return true;
			}
		}
		return false;

	}

	this.countDesiredTraits = function(desired){

		var desiredTraits = typeof desired !== 'undefined' ? desired : new Array("teal", "purple");
		var count = 0;

		for (var i = 0; i < this.traits.length; i++) {
			for (var j = 0; j < desiredTraits.length; j++) {
				if (this.traits[i] == desiredTraits[j]){
					count++;
				}
			}
		}
		return count;

	}

	// PRINTS
	this.prettyPrint = function(){
		
		console.log('\tTraits => ' + this.traitsToString());
		console.log('\tFitness => ' + this.fitness);

	}

	this.traitsToString = function(){

		var traits = '';

		for (var i = 0; i < this.numberOfTraits; i++) {
			traits += this.traits[i] + ' ';
		}

		return traits;

	}

}

module.exports = Individual;
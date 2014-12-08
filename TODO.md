##GEM
###'evolve': method that evolves the population
* executes 'generate' on the population some number of times. 
* param 'initialPopulation': population object to star with. 
* param 'numberOfGenerations': integer for number of times to iterate. 
* returns: population of the final individuals. 

##Population
###'generate': method that moves the population from one generation to the next. 
* executes 'evaluate' on every individual in the population. 
* executes 'combine' on every individual in the currentPopulation with a positive fitness until there are enough individuals in the next generation. 
* executes 'mutate' on every individual in the next generation. 
* executes 'copyGeneration' to copy next generation into current generation. 
* returns the nextGeneration. 
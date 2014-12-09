To run:
	$> node demo.js

#IDEA
Use genetic algorithms to optimize the customer experience on our sites. It could be implemented as a strategy in preamp. http://en.wikipedia.org/wiki/Genetic_algorithm

##Prototype:
To start, we have the algorithm optimize a combination of three colors that a person feels go together really well. We will use my favorite color, purple, and my girlfriend's favorite color, teal, as optimal values. We automate the user input so we can iterate faster. 

#GENETICS
Individual:
An array of three colors.

Generations: Initial and final states of the population:
A population is ten individuals initialized with three random colors from the pool of potential colors. 

Fitness operator:
It will simply count how many desired colors are in the individual.

Selection and combination:
Only parents with a fitness greater than zero will get to mate. They will create children for the next generation. All parents will be removed from the population after they create children except the most fit parent, which will replace the weakest child. Children will be roughly half the traits of one parent and another random fit parent.

Mutation:
We need to converge fairly quickly so will limit exploration. Crossover and the initial state should provide enough variation. There is a 5% chance that one of the child’s colors is switched to a random color from the color pool.
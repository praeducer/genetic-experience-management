This is my first time writing back-end, prototype-based JavaScript. There is much refactoring ahead before I can turn this into a full fledged web service. I hope to tie this into a basic web site that optimizes itself based on traits the users like.

##Demo
To try it out:
	$> node demo.js

To start, we have the algorithm optimize a combination of three colors that a person feels go together really well. We will use my favorite color, purple, and my girlfriend's favorite color, turquoise, as optimal values. We automate the user input so we can iterate faster. Enjoy!

##The Genetics
Individual:
An array of three colors.

Generations:
A population is ten individuals, each initialized with three random colors from the pool of potential colors. 

Fitness operator:
It will simply count how many desired colors are in the individual.

Selection and combination:
Only parents with a fitness greater than zero will get to mate. They will create children for the next generation. All parents will be removed from the population after they create children except the most fit parent, which will replace the weakest child. Children will be roughly half the traits of one parent and another random fit parent.

Mutation:
We need to converge fairly quickly so will limit exploration. Crossover and the initial state should provide enough variation. There is a 5% chance that any of the child’s colors is switched to a random color from the color pool.

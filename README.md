To run:
	$> node test.js

#IDEA
Using evolutionary computation or genetic algorithms to optimize the customer experience on our sites. It could be implemented as a strategy in preamp.

##Prototype:
To start, we can have the algorithm optimize a combination of three colors that users feel go together really well. At first the user will be presented three random colors from a pool of color options. Overtime, after many likes or dislikes (i.e. a boolean fitness operator), the colors will converge on a combination that the user really likes.

To proceed this, we can test with a list of three numbers and optimize that array. Then it can be tied in as a web service that displays three colors on a web page (in html and css). To start, we could automate the user input so we can iterate faster. We can assume the user is looking for three specific colors (e.g. any combination of purple and teal). If that combination is found, we can say that is the optimal combination. As long as at least one of the colors is found, the fitness could be evaluated to ‘1’ i.e. a 'like'.

#GENETICS
Individual:
An array of three colors.

Generations: Initial and final states of the population:
A population could exist of ten individuals initialized with three random colors from the pool of potential colors. They could evolve over ten generations or so (must be limited since user input is time consuming).

Fitness operator:
A user will ‘like’ or ‘dislike’ a color combination. Simple boolean operation.

Crossover to next generation:
Only individuals that are ‘liked’ will be bred to create ten children in the next generation. The parents will be killed off. Each parent will be randomly combined with another parent until ten children are created.

Mutation:
We can start out with no mutation or a very low chance for mutation. We need to converge fairly quickly so will limit exploration. Crossover and the initial state should provide enough variation. There could be something like a 5% chance that one of the child’s colors is switched to a random color from the color pool.
* Change variables (e.g. "var genes = new Object();") to be properties if the object (e.g. "this.genes = new Object();"). Then they can be mutated easier. 
* Use getters and setters properly. Explicit methods just to get the property are redundant. Useful if property needs to be altered before getting or setting: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters.
* Learn how to write good Node-ish, prototype-based JavaScript.
* Change individuals to represent the styling of a web page. See gem.json.
* Make more extensible.
* Consider creating a higher level 'main' class.
* Do all of the TODO's in the class files.
* Add in unit testing.
* Turn into a web service.
* Tie into a web site and have it optimize some simple attributes, such as the background color or font.
* Add methods to return a JSON of the state of the current object.
* Add ability to save the state of the objects in a database.
* Create legit encapsulation.
* Handle configuration file without a known fittest individual.
* Remove old test.js and files from repo.
* Update demo.js and README.
* Store results and final population in a database such as Mongo (fits this JSON approach well).
* Create test JSON objects in separate files for configuring each class e.g. genome.json.
* Move neccessary population code into generation.
* Should be able to speed up performance by adding some of my methods to the prototype (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain). This is useful for operations that are not unique to a particular instance of an object.
* Go through and see which methods and variables should be public versus private.
* Is 'this.' for properties redundant? 
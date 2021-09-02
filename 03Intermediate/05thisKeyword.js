//TODO: Part 1 for this Keyword

console.log(this);

var game = "basketball";

function sayName() {
    var name = "Amit";
    console.log(this);
}
sayName();

// - this keyword behaves different when run in node and browser or can say enviroment.
// - in node it gives empty scope.  
// - in browser it gives access to window object.


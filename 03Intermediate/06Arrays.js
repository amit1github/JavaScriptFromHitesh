// Array is just a collection of data.
// Used here POP, SHIFT, UNSHIFT

var countries = ["India", "USA", "Japan", "Russia"]

//maybe new way to define arrays
var states = new Array("Rajasthan", "Delhi", "Mumbai", "Goa");
//console.log(states[3]);
//console.log(states.length);

states[4]= "Punjab"; // replaced or pushed
//console.log(states);

//not a good data structure but 'll come here later talk on objects(! ?)
var user = ["amit", "amit@gmail.com", 3, 34, true];
//console.log(user);


// POP simply means to get rid of the value which is at very end.
user.pop();
user.pop();
//console.log(user);


/* unshift() method adds one or more elements to the beginning 
of an array and returns the new length of the array. */

user.unshift("Using Unshift");
//console.log(user);


/* The shift() method removes the first element from an array
 and returns that removed element. This method changes the
 length of the array. */

user.shift();
console.log(user);


/* The indexOf() method returns the index within the calling String 
object of the first occurrence of the specified value, starting 
the search at fromIndex. Returns -1 if the value is not found. */

console.log(user.indexOf(3));
console.log(user.indexOf("amit"));
console.log(user.indexOf(8));


/* The Array.from() static method creates a new, shallow-copied 
Array instance from an array-like or iterable object. */

console.log(Array.from("Amit"));


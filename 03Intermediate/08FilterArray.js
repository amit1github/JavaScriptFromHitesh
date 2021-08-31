/* The fill() method changes all elements in an array to 
a static value, from a start index (default 0) to an end index
(default array.length). It returns the modified array.
*/

//JavaScript Demo: Array.fill()

const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]

/* BY ME
for Array.fill */
const array = [1, 2, 3, 4, 5 , 6]
const result = array.fill(2, 3);
console.log(result);


/* for Array.filter 
when we use filter it returns totally new array. That's why we
are using 3rd varibale newArray here to store that */
const array2 = [1, 2, 3, 4, 5, 6];
const output = array2.filter((newArray) => newArray < 6 );
console.log(output);


const friends = ["amit", "uday", "sunil", "nikhil"];
const output2 = friends.filter((friend) => friend != "uday" );
console.log(output2);
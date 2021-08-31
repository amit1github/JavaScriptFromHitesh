/* Whenever you are passing the range the first value which is
the start point is always INCLUSIVE and the last value or the 
end range is always EXCLUSIVE.  ( NOT IMP by me for now ) */

// FOR SLICE
var array1 = ["Amit", "Tom", "Jerry", "Thomas", "Rocky"]
const result = array1.slice(1,4);

console.log(result);
  //or , type to print
console.log(array1.slice(1,3));

 

/* FOR SPLICE
 Doing it directly without storing it into any variable. */
array1.splice(1, 3, "hello", "Bye") // count value. You can put as much value as you can
console.log(array1);

//it will start from 1 to print
console.log(array1.splice(1));

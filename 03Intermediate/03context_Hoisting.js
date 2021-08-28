/*  IMPORTANT
                Context and Hoisting

Note: To get its better thoery watch Execution context on 
Youtube channel thapa.

Global / Default execution context. 
Execution Context.
Execution STACK. (LIFO) - (get this done to teach others).

Execution Context.
    - Variable Object
    - Scope Chain
    - this

    1. Function declarations are scanned and made availble
    2. Variable declarations are scanned and made availble
    
*/


// sayHello();

// function sayHello() {
//     console.log("Hello World");
// };

// myName= "Amit";
// if (myName === window.myName) {
//     console.log("A true statement");
// }; // run this on browser .i.e. chrome

// HOISTING

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
};

tipper("a");


// function bigTipper(a) {
    //     var bill = parseInt(a);
    //     console.log(bill + 15);
    // };
    
    var bigTipper = function(a) {
        var bill = parseInt(a);
        console.log(bill + 15);
    };

// Variable declarations are scanned and made availble.
// calling variable functions won't work and shows undefined-
// -if declared before its function.

bigTipper("200"); 

console.log(name);
var name= "amit"

function sayName(params) {
    var name = "Mr. A";
    console.log(name);
};
sayName();

console.log(name);















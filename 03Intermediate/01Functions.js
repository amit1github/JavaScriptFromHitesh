// function sayHello(){
//     console.log("Hello there, Amit");
// }

// difference of using parentheses
// sayHello(); //calling a function
// sayHello; //refrencing a function

function sayHello(name){
    console.log("Hello there, Amit");
    console.log(`Hello there, ${name}, How are You?`);
}

// sayHello("Amit"); 
// sayHello("Sammy"); 

function namastey() {
    return "Welcome in India";
}

var greetings = namastey();

// calling function by declaring variable
console.log(greetings);

// calling function without declaring variable
console.log(namastey());


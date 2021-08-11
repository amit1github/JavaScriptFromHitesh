const uid = "abc123";

// uid = "abcd1234";

var fullName = "Amit Yadav";
var email = "xyz@gmail.com";
var password = "123456";
var confirmPassword = "123456";
var courseCount = 0;
var isLoggedInFromGoogle = false;

// fullName = prompt("Enter your name");

console.log(uid);
console.log("full name is: " + fullName);
console.log("full name is:", fullName);
console.log(email);

//$ used for var to setup
console.log(`
    With Unique ID: ${uid} 
    User is: ${fullName}
    and his email is: ${email}
    and uses the password: ${password}
`);
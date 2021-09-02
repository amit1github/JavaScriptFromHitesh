/* For Object
firstName: Key , "Amit": value. We won't put equal to again after keys as = is already decalred
*/

// This is Key Value Pair
var user = {
    firstName: "Amit",
    lastName: "Yadav",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
};

console.log(user.firstName);
// other way to call
console.log(user["lastName"]);

// can assign value again
user.loginCount = 34
console.log(user.loginCount)

console.table(user);
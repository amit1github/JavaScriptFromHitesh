// Allow user to access course if he is:
// logged in from email
// logged in from google
// logged in from Facebook

var email = true;
var facebook = false;
var google = true;

if( email || facebook || google) {
    console.log("login success");
};

// if (isLoggedIn && isEmailVerified && cardInfo) {
//     console.log("Allow user to make a purchase");
// } else {
//     console.log("You are not allowed to do that");
// }
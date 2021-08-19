/*
Define a function that can answer the role of a user.
A user can be on following roles:
admin: with all access
subdomain: with access to create/delete courses
testprep: with access to create/delete tests
user: consume all content
other: trial user

Input: getUserRole(name, role)
*/

//here we have used function with and without variables for ref. get to lec.01function


var getUserRole = function(name, role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break;
        case "subadmin":
            return `${name} is sub-admin with access to create/delete courses`;
            break;
        case "testprep":
            return `${name} is test-prep with access to create/delete tests`;
            break;
        case "user":
            return `${name} is a user to consume and content`;
            break;

        default:
            return `${name} is a trial user`;
            break;
    }
};

console.log(getUserRole("Amit", "testprep"));

var getRole = getUserRole("sammy", "user");
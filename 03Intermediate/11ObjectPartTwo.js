/*
 - everything inside the object is key value pair
 - this: this simply means current context or current reference of the global 
   object but that is for the windows in case of Node it was empty.
*/
var user = {
    firstName: "Amit",
    lastName: "Yadav",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    // Method into the Object or Object Method
    // to have method, call function without its name as its name is already shifted as buycourse.
    buyCourse: function (courseName) {
        //for here this simply means user. Not writing directly user bcos we are already in user.
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length}`;        
    },
    info: function () {
        return `The user info is ${this}`
    }
};

var courseList = true;
console.log(user.firstName);

console.log(user.getCourseCount());
user.buyCourse("React JS Course");
user.buyCourse("Angular JS Course");
console.log(user.getCourseCount());
console.log(user);
// user.info();
// console.log(user.info()); something wrong there by me.

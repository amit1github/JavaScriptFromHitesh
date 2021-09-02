
const myStates = [
    "Goa", 
    "Kolkata",
    1947,
    "Punjab", 
    "Manipur", 
    "Bihar"
];

for (let index = 0; index < myStates.length; index++) {
    if (typeof myStates[index] !== "string") continue;
    console.log(myStates[index]);    
};

// let i = 0;
// while (i < myStates.length) {
//     console.log(myStates[i]);
//     i++;
// }

// let i =20;
// do {
//     console.log(i);
//     i++;
// } while (i < 10);



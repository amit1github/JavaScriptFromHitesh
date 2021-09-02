
 var name = "amit";
 console.log("line number 3", name);

function naming() {
  var name = "amit";
console.log("line number 3", name);
}
naming();

function askName() {
  var name = "jerry";
  console.log("line number 7 ", name);
};
askName();

function askAgain() {
  console.log("line number 12", name);
};
askAgain();



var names = "Uday";

console.log("line number 20", names);

function askNames() {
  var names = "jerry";
  console.log("line number 24", names);
  askAgain();
  
  function askAgain() {
    console.log("line number 28", names);
  }
 };

 askNames();

//      HOSTING


// Hoisting - pushes functions and var at the begining of the code
// no meeter where the code is written they still get "called" at the top
//it is confusing cause its seems like the code is written before we even use it



hello(); // function works cause its being called on top of the code
function hello() {
  console.log("hello");
}
console.log(greeting); //undefined — function is called before var is created
var greeting = "hello";



// problem - confusing
// how to solve -  # const  # let
// u cant use let and const before "calling" them


// Function Expression - function u can save in verible

hi();
function hi() {
  console.log("hi");
}

bye();
const bye = function() {
  console.log("bye");
};

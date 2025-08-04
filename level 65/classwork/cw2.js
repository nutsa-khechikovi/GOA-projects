function greet() {
  console.log("hello world");
}

// magali rangis punqcia
function higherOrderFunction(callback) {
  console.log("hight order function");
  callback();// vidzaxebt punqcias
}
higherOrderFunction(greet);

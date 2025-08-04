const person = {
  firstname: "nutsa",
  lastname: "khechikovi",
  introduce: function () {
    console.log("My name is " + this.firstname + " " + this.lastname);
  }
};
person.introduce();

class Person {
  constructor(name, age, lastname, country) {
    this.name = name;
    this.age = age;
    this.lastname = lastname;
    this.country = country;
  }
}
const person1 = new Person('name', 20, 'surname', 'Georgia');
const person2 = new Person('name', 30, 'surname', 'georgia');
const person3 = new Person('name', 10, 'surname', 'georgia');
const person4 = new Person('name', 40, 'surname', 'georgia');
console.log(person1, person2, person3, person4);



// class - is template witch we can make objects from
// we use it if we want to more similar objects with same structure

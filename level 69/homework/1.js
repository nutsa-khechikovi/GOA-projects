function Person(name, surname, age, country){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    if (this.name.length >= 4) {
        console.log(this.name);
    } esle {
        console.log("The person's name should contain at least 4 characters")
    }
    this.aboutThePerson = function (){
        console.log("The person's name is ${name}, surname ${surname}, the person's age is ${age} and person lives in ${country}")
    }
}
const personObj = new Person("nutsa", "khechikovi", 16, "georgia")
console.log(personObj);
personObj.aboutThePerson;
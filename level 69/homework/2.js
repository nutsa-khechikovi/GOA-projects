const user = {
  name: 'nutsa',
  surname: 'khechikovi',
  age: 17,
  country: 'Georgia',
  get info() {
    return `${this.name} ${this.surname} lives in ${this.country}`;
  },
  set updateAge(newAge) {
    if (newAge >= 18) {
      this.age = newAge;
    } else {
      console.log('The person is not an adult');
    }
  }
};
console.log(user.info);
user.updateAge = 16;
console.log(user.age);
user.updateAge = 20;
console.log(user.age);
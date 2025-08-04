Car.prototype.getDescription = function() {
  if (this.year < 2000) {
    console.log('This is an old car');
  } else {
    console.log('This is a modern car');
  }
  console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`);
};
const car1 = new Car('Toyota', 'Corolla', 1999, 'Red');
const car2 = new Car('Honda', 'Civic', 2010, 'Blue');
const car3 = new Car('Ford', 'Mustang', 2022, 'Black');
car1.getDescription();
car2.getDescription();
car3.getDescription();

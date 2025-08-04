//  konstruqtori gamoiyeneba axali obieqtebis shesaqmnelad.mis shashvalebi shesadzlebelia erti struqturit sxvadasxa obieqtebis sheqmna
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.introduce = function() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}
const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("BMW", "X5", 2019);
const car3 = new Car("Tesla", "Model 3", 2023);
const car4 = new Car("Mercedes", "C-Class", 2021)
car1.introduce();
car2.introduce();
car3.introduce();
car4.introduce();

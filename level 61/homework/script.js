// 1
let arr1 = [5, 10, 15, 20, 25];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// 2
let arr2 = [2, 4, 6, 8, 10];
let sum = 0;
for (let i = 0; i < arr2.length; i++) {
  sum += arr2[i];
}
console.log("Sum of arr2:", sum);

// 3
let fruits = ["apple", "cherry", "strawberry", "apple", "orange"];
let countApple = 0;
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].toLowerCase() === "apple") {
    countApple++;
  }
}
console.log("Number of apples:", countApple);

//  4
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  let square = numbers[i] ** 2;
  console.log(`Square of ${numbers[i]} is ${square}`);
}

// 5
let names = ["Nino", "Alice", "Charlie"];
for (let i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}

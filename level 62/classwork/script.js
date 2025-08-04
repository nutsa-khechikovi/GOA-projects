//   1

// for loop - გამოიყენება როცა ზუსტად ვიცი რამდენჯერაც მინდა ციკლის გამეორება
// while loop - გამოიყენება როცა არ ვიცი ზუსტად რამდენჯერაც მინდა ციკლის გამეორება

//   2

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

//   3

let count = 0;
do {
  count++;
  console.log(count);
} while (count < 10);

//   4

// do while - კოდი ერთხელ მაიც გაეშვება პირობის შემოწმებამდე
// while loop - ჯერ მოწმდება პირობა და მერე გაეშვება კოდი

let num = 7;
while (num < 7) {
  console.log("wont work");
}

let num1 = 7;
do {
  console.log("will work");
} while (num1 < 57);

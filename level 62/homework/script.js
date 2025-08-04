// 1
let arr = ['apple', 'banana', 'cherry', 'date', 'fig'];
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// 2
let number = 7;
do {
  console.log("The Number is " + number);
  number--;
} while (number > 0);

// 3
let num = 1;
while (num <= 30) {
  if (num % 3 === 0) {
    console.log(num);
  }
  num++;
}

// 4
let word = "banana";
let index = 0;
let count = 0;

while (index < word.length) {
  if (word[index] === 'a') {
    count++;
  }
  index++;
}
console.log(`The letter 'a' appears ${count} times in the word "${word}".`);

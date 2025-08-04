const nums = [1, 2, 3, 4, 5, 6];
nums.forEach(num => {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
});

const arr = [2, 4, 6, 7, 8];
console.log(arr.some(num => num % 2 !== 0));
console.log([1, 3, 5].some(n => n > 4));
console.log([1, 3, 5].some(n => n < 0));
console.log([2, 3, 4].every(n => n > 1));
console.log([5, 10, 15].every(n => n % 5 === 0));
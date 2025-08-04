let arr = [10, 20, 30, 40, 50];
console.log(arr.slice(0, 3));
console.log(arr.slice(-2));
console.log(arr.slice());


let arr1 = [1, 2, 3, 4, 5];
arr.splice(1, 2); 
console.log(arr);
arr.splice(2, 0, 'a', 'b');
console.log(arr);
arr.splice(0, 1, 'start');
console.log(arr)


let arr2 = ['a', 'b', 'c', 'd'];
let first = arr.shift();
console.log(first);
console.log(arr);
let emptyArr = [];
console.log(emptyArr.shift());
console.log(emptyArr);


let arr3 = [3, 4, 5];
let newLength = arr.unshift(1, 2);
console.log(arr);
console.log(newLength);
arr.unshift('start');
console.log(arr);


let arr4 = ['apple', 'banana', 'orange', 'banana'];
console.log(arr.indexOf('banana'));
console.log(arr.indexOf('grape'));
console.log(arr.indexOf('banana', 2));

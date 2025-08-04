const words = ['apple', 'banana', 'kiwi'];
const totalLength = words.reduce((acc, word) => acc + word.length, 0);
console.log(totalLength);

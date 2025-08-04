const words = ['apple', 'banana', 'grape'];
words.forEach(word => {
  const reversed = word.split('').reverse().join('');
  console.log(reversed);
});

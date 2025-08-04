const mixed = [true, 42, 'hello', [1, 2], {a: 1}, 'world'];
const onlyStrings = mixed.filter(item => typeof item === 'string');
console.log(onlyStrings);

function manualMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const newValue = callback(array[i], i, array)
    result.push(newValue);
  }
  return result;
}
const numbers3 = [1, 2, 3];
const doubled2 = manualMap(numbers3, (num) => num * 2);
console.log(doubled2);

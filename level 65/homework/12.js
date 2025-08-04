function manualForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
const items = [1, 2, 3];
manualForEach(items, (item) => {
  console.log(item * 2);
});

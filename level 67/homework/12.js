// Manual findIndex
function manualFindIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return i; // პირველი ინდექსი, რომელიც აკმაყოფილებს პირობას
    }
  }
  return -1; // თუ არაფერი მოიძებნა
}

// Manual filter
function manualFilter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]); // მხოლოდ იმ ელემენტებს ვამატებთ, რომლებიც აკმაყოფილებენ პირობას
    }
  }
  return result;
}

// Manual map
function manualMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array)); // ვქმნით ახალ მასივს callback-ით მიღებული მნიშვნელობებით
  }
  return result;
}

// Manual reduce
function manualReduce(array, callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  // თუ initialValue არ არის მოცემული, accumulator-ს ვანიჭებთ პირველ ელემენტს
  if (accumulator === undefined) {
    accumulator = array[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}

// მოკლე ტესტი manualReduce-ის:
const nums = [1, 2, 3, 4];
const total = manualReduce(nums, (acc, curr) => acc + curr, 0);
console.log(total); // 10

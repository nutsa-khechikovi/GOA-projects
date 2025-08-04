const reduce = (arr, cb, startingValue) => {
    let accumulator = startingValue;

    for(let i = 0; i < arr.length; i++) {
        accumulator = cb(accumulator, arr[i]);
    }

    return accumulator;
}


const words = ["hello", "!", "wellcome", "to the", "world."];
const sentence = words.reduce((acc, curr) => acc + " " + curr);
console.log(sentence);



const nums = [3, 4, 7, 8];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

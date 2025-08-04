const spacesCount = (sentence) => {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === " ") {
            count++;
        }
    }
    return count;
}
const result = spacesCount("this is a sentence with spaces to test function.");
console.log(result);

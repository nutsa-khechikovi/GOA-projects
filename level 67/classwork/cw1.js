const numbers = [4, 7, 9, -3, 2, -8];
const negativeIndex = numbers.findIndex(num => num < 0);
console.log(negativeIndex)
// ვპოულობტ რიცხვს რომელიც კალებია ნულზე და ვაბრუნებტ cosole.log-იტ



// findIndex() - გამოიყენება იმისტვის რო ვიპოვოტ უნდექსი
// ბრუნდება პრიველი ელემენტი რომელიც ამ პუნქციას სჰეხვდება და ბრუნდება ის ელემენტი



const findIndex = (arr, cb) => {   //  ვქმიტ ცვლადს
    for(let i = 0; i < arr.length; i++) {   //  მტელ მასივზე გადავდივარტ  for-იტ
        if(cb(arr[i])) {
            return i
        }
    }
}



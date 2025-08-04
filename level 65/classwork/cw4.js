const names = ["Luka", "Lile", "Nia", "Lika", "Vladimeri"];

// for(let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }

// names.forEach(name => console.log(`My name is ${name}`))

const manualForEach = (arr, cb) => {
    for(let i = 0; i < arr.length; i++) {
        cb(arr[i])
    }
}
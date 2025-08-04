const people = [
  {
    name: 'anastasia',
    age: 19,
    talk() {
      console.log("hi");
    },
    friends: [1, 2, 3],
    address: {
      street: 'rendom st',
      place: 'georgia'
    }
  },
  {
    name: 'Lika',
    age: 18,
    talk() {
      console.log("hi");
    },
    friends: [1, 2, 3, 4],
    address: {
      street: 'rendom st',
      place: 'georgia'
    }
  },
  {
    name: 'lizi',
    age: 20,
    talk() {
      console.log("hi");
    },
    friends: [1],
    address: {
      street: 'rendom st',
      place: 'georgia'
    }
  },
  {
    name: 'luka',
    age: 17,
    talk() {
      console.log("hi");
    },
    friends: [1, 2],
    address: {
      street: 'rendom st',
      place: 'georgia'
    }
  },
  {
    name: 'nika',
    age: 16,
    talk() {
      console.log("hi");
    },
    friends: [1, 2],
    address: {
      street: 'rendom st',
      place: 'georgia'
    }
  }
];


const filtered = [];
for (let i = 0; i < people.length; i++) {
  if (people[i].age > 18 && people[i].friends.length >= 2) {
    filtered.push(people[i]);
  }
}
console.log(filtered);


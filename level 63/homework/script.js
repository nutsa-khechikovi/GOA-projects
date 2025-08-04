// 1
const addIfNotExists = (str, arr) => {
  let newArr = [];
  if (!arr.includes(str)) {
    newArr.push(str);
  }
  console.log(newArr);
};

// 2
const averageOfThree = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
};

// 3
function checkPassword(password) {
  if (password.length < 6) {
    return "Password is Too Short Try again";
  }

  let hasNumber = false;
  let hasLetter = false;

  for (let i = 0; i < password.length; i++) {
    const char = password[i];
    if (char >= '0' && char <= '9') {
      hasNumber = true;
    } else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      hasLetter = true;
    }
  }
  if (hasNumber && hasLetter) {
    return "Password Is strong";
  } else {
    return "The Password Must Contain numbers and letters and it should be at least 6 characters long";
  }
}

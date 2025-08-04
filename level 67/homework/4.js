const nums2 = [10, 25, 5, 40, 20];
const max = nums2.reduce((acc, curr) => (curr > acc ? curr : acc), nums2[0]);
console.log(max);

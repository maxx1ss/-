//task1

// function getFactorial(num) {
//   if (num === 1 || num === 0) {
//     return 1;
//   }

//   return num * getFactorial(num - 1);
// }

// console.log(getFactorial(5));

//task2

// function getDegree(number, degree) {
//   if (degree === 1) {
//     return number;
//   }

//   return number * getDegree(number, degree - 1);
// }

// console.log(getDegree(2, 5));

//task 3

// function getSum(a, b) {
//   if (b === 0) {
//     return a;
//   }

//   return getSum(++a, --b);
// }

// console.log(getSum(20, 4));

//task 4

// let obj = {
//   result: 0,
//   step: 0,
// };

// function pallindrome(num) {
//   obj.result = Number(num.toString().split("").reverse().join(""));

//   if (obj.result === num) {
//     return obj;
//   }

//   obj.step++;
//   return pallindrome(num + obj.result);
// }

// console.log(pallindrome(96));

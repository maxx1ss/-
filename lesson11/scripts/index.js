// 1;
// let sum = 0;
// function myFunction(num) {
//   let result = (sum += num);
//   sum = result;
//   return result;
// }

// myFunction(3);

// myFunction(10);

// console.log(myFunction(20));

// 2;
// function myFunction() {
//   const numbers = [];
//   for (let i = 1; i <= 100; i++) {
//     numbers.push(i);
//   }
//   return function () {
//     const index = Math.floor(Math.random() * numbers.length);
//     const number = numbers.splice(index, 1)[0];

//     return number;
//   };
// }

// const getRandomNum = myFunction();

// for (let i = 0; i <= 100; i++) {
//   console.log(getRandomNum());
// }

//2
// function closureFunc() {
//   const generatedNumbers = [];

//   function generatingNumbers() {
//     if (generatedNumbers.length === 100) {
//       return generatedNumbers;
//     }
//     const randomNum = Math.round(Math.random() * 100); //генерирует числа от 1 до 100

//     if (generatedNumbers.includes(randomNum)) {
//       return generatingNumbers();
//     }

//     generatedNumbers.push(randomNum);

//     return generatedNumbers;
//   }

//   return generatingNumbers;
// }
// let result = closureFunc();

// for (let i = 0; i <= 100; i++) {
//   console.log(result());
// }

// const arr = []

// for (let i = 0; i < arr.length; i++) {
//   console.log(i, arr.includes(i));
// }

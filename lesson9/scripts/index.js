//1
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = arr1.concat(arr2);
// console.log(arr3);

//2
// const arr1 = [1, 2, 3];

// const arr2 = arr1.reverse();
// console.log(arr2);

//3
// const arr1 = [1, 2, 3];

// arr1.push(4, 5, 6);
// console.log(arr1);

//4
// const arr1 = [1, 2, 3];

// arr1.unshift(4, 5, 6);
// console.log(arr1);

//5
// const arr1 = ["js", "css", "jq"];

// console.log(arr1.shift());

//6
// const arr1 = ["js", "css", "jq"];

// console.log(arr1.pop());

//7
// const arr1 = [1, 2, 3, 4, 5];

// const arr2 = arr1.toSpliced(3, 2);
// console.log(arr2);

//8
// const arr1 = [1, 2, 3, 4, 5];

// const arr2 = arr1.toSpliced(0, 3);
// console.log(arr2);

//9
// const arr1 = [1, 2, 3, 4, 5];

// arr1.splice(1, 2);
// console.log(arr1);

//10
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = arr1.filter((item) => item > 1 && item < 5);

// console.log(arr2);

//11
// const arr1 = [1, 2, 3, 4, 5];

// arr1.splice(3, 0, "a", "b", "c");
// console.log(arr1);

//12

// const arr1 = [1, 2, 3, 4, 5];

// arr1.splice(1, 0, "a", "b");
// arr1.splice(6, 0, "c");
// arr1.splice(8, 0, "e");
// console.log(arr1);

//13

// const arr1 = [3, 4, 1, 2, 7];

// arr1.sort();
// console.log(arr1);

//14
// const arr1 = [5, 6, 7, 8, 9];

// let sum = 0;
// const a = arr1.forEach((item) => {
//   sum += item;
// });

// console.log(sum);

//15

// const arr1 = [5, 6, 7, 8, 9];

// const arr2 = arr1.map((item) => item ** 2);
// console.log(arr2);

//16

// const arr1 = [1, -3, 5, 6, -7, 8, 9, -11];

// const arr2 = arr1.filter((item) => item < 0);
// console.log(arr2);

//17
// const arr1 = [1, -3, 5, 6, -7, 8, 9, -11];

// const arr2 = arr1.filter((item) => item % 2 === 0);
// console.log(arr2);

//18
// const arr1 = ["aaa", "aaaqqq", "zzzqq", "zz", "qsaa", "q", "az"];
// const arr2 = arr1.filter((item) => item.length > 5);
// console.log(arr2);

//19
// const arr1 = [1, 2, [3, 4], 5, [6, 7]];

// const arr2 = arr1.filter((item) => Array.isArray(item));
// console.log(arr2);

//20
// const arr1 = [5, -3, 6, -5, 0, -7, 8, 9];

// let counter = 0;
// arr1.forEach((item) => {
//   if (item < 0) {
//     counter++;
//   }
// });
// console.log(counter);

//2.1
// const arr = ["a", "b", "c", "d"];

// console.log(`${arr[0]}+${arr[1]},${arr[2]}+${arr[3]}`);

//2.2
// const arr = [2, 5, 3, 9];
// let a = arr[0] * arr[1];
// let b = arr[2] * arr[3];
// const result = a + b;
// console.log(result);

//2.3
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(arr[1][0]);

//2.4
// const obj = {js: ["jQuery", "Angular"], php: "hello", css: "world"};
// console.log(obj.js[0]);

//2.5
// let arr = [];
// for (let i = 0; i < 10; i++) {
//   arr.push("x".repeat(i + 1));
// }
// console.log(arr);

// 2.6;
// let arr = [];
// for (let i = 1; i < 10; i++) {
//   arr.push(i.toString().repeat(i + 1));
// }
// console.log(arr);

//2.7
// function arrayFill(item, amount) {
//   const array = [];

//   for (let i = 0; i < amount; i++) {
//     array.push(item);
//   }

//   return array;
// }
// console.log(arrayFill("x", "5"));

//2.8
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getArrSum(array) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];

//     if (sum > 10) {
//       return i + 1;
//     }
//   }
// }

// console.log(getArrSum(arr));

//2.9
// const arr = [1, 2, 3];
// function reverseArr(arr) {
//   const arrLength = arr.length;

//   const tempArr = new Array(arrLength);

//   for (let i = 0; i < arrLength; i++) {
//     tempArr[i] = arr[arrLength - i - 1];
//   }

//   arr = [...tempArr];

//   return arr;
// }

// console.log(reverseArr(arr));

//2.10

// const initArr = [[1, 2, 3], [4, 5], [6]];

// const arr = initArr.flat(Infinity);
// console.log(arr.reduce((a, b) => a + b));

//2.11
// const initArr = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];

// const arr = initArr.flat(Infinity);
// let sum = 0;
// arr.forEach((item) => {
//   sum += item;
// });
// console.log(sum);

//indexOf()
// const arr = ["girrafe", "picun", "f6", "p.diddy", "girrafe"];
// Array.prototype.myIndexOf = function (item, fromIndex = 0) {
//   for (let i = fromIndex; i < this.length; i++) {
//     if (item === this[i]) {
//       return i;
//     }
//   }

//   return -1;
// };

// console.log(arr.myIndexOf("girrafe", 3));

//lastIndexOf()
// const arr = ["girrafe", "picun", "f6", "p.diddy", "girrafe"];
// Array.prototype.myIndexOf = function (item, fromIndex = this.length) {
//   for (let i = fromIndex; i >= 0; i--) {
//     if (item === this[i]) {
//       return i;
//     }
//   }

//   return -1;
// };

// console.log(arr.myIndexOf("girrafe"));

//find()

// const arr = [1, 2, 3, 4, 5, 6, 7, 11];

// Array.prototype.myFind = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       return this[i];
//     }
//   }

//   return undefined;
// };

// const found = arr.myFind((item) => item > 11);
// console.log(found);

//findIndex()

// const arr = [1, 2, 3, 4, 5, 6, 7, 11];

// Array.prototype.myFind = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       return i;
//     }
//   }

//   return undefined;
// };

// const found = arr.myFind((item) => item > 10);
// console.log(found);

//includes
// const arr = ["girrafe", "picun", "f6", "p.diddy", "girrafe", "picun"];

// Array.prototype.myIncludes = function (searchItem, fromIndex = 0) {
//   for (let i = fromIndex; i < this.length; i++) {
//     if (searchItem === this[i]) {
//       return true;
//     }
//   }

//   return false;
// };

// console.log(arr.myIncludes("picun", 3));

//every
// const arr = [1, 2, 3, 4, 5, 11];

// Array.prototype.myEvery = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this) === false) {
//       return false;
//     }
//   }

//   return true;
// };

// let a = arr.myEvery((item) => item > 10);

// console.log(a);

//some
// const arr = [1, 13, 3, 4, 5, 11];

// Array.prototype.mySome = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       return true;
//     }
//   }

//   return false;
// };

// let a = arr.mySome((item) => item > 12);

// console.log(a);

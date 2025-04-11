// 1
// let ladder = {
//   step: 0,
//   up: function () {
//     this.step++;
//     return this;
//   },
//   down: function () {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     alert(this.step);
//     return this;
//   },
// };

// ladder.up().up().down().showStep();

// 2
// const obj = {
//   integer: 5,
//   name: "Petro",
//   f: 21,
//   lol: "kek",
// };

// function initFunction(a, b) {
//   console.log(a + b);
//   console.log(this);
// }

// Function.prototype.myBind = function (context, ...args) {
//   return () => {
//     return this.apply(context, [...args]);
//   };
// };

// let myBindCheck = initFunction.myBind(obj, 2, 4);
// myBindCheck();

//3
// let calculator = {
//   read: function () {
//     this.firstNum = prompt("Enter your first integer");
//     if (this.firstNum === null || !this.firstNum.trim()) {
//       alert("error occured");
//       return;
//     }

//     this.firstNum = Number(this.firstNum);

//     this.secondNum = prompt("Enter your second integer");
//     if (this.secondNum === null || !this.secondNum.trim()) {
//       alert("error occured");
//       return;
//     }

//     this.secondNum = Number(this.secondNum);
//   },

//   sum: function () {
//     if (!this.firstNum || !this.secondNum) {
//       return "cannot summurize, wrong input of a number";
//     }
//     return this.firstNum + this.secondNum;
//   },

//   mul: function () {
//     if (!this.firstNum || !this.secondNum) {
//       return "cannot multiply, wrong input of a number";
//     }
//     return this.firstNum * this.secondNum;
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

console.log(navigator);

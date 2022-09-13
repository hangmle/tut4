/* HW3
   Example 4 JavaScript code
*/

console.log("Le's Output from HW3 Example 4");

var num1 = prompt('Enter the first integer number');
var num2 = prompt('Enter the second integer number');

let sum = num1+num2;
let sub = num1-num2;
let mul = num1*num2;
let div = num1/num2;
let mol = num1%num2;

// if (Number.isInteger(num1) === true && (Number.isInteger(num2) === true)) {
//   sum = num1+num2;
//   sub = num1-num2;
//   mul = num1*num2;
//   div = num1/num2;
//   mol = num1%num2;
// }
console.log(`
  Addition: ${sum}
  Subtraction: ${sub}
  Multiplication: ${mul}
  Division: ${div}
  Modulo: ${mol}
  `)

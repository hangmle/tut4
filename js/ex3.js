/* HW3
   Example 3 JavaScript code
*/

console.log("Le's Output from HW3 Example 3");

var input = prompt("Enter a day of the week");
input = input.slice(0, 3).toLowerCase();
console.log(input);

let i=0;

switch (input) {
  case 'mon':
    console.log(...);
    break;
  default:
    console.log('Not a valid day');
}

/** switch (day) {
  case (day < 1):
    console.log("You entered a value less than 1");
    break;
  case (num1 === 1):
    console.log("You entered 1");
    break;
  case (num1 === 2):
    console.log("You entered 2");
    //break;
  case (num1 === 3):
    console.log("You entered 3");
    break;
  case (num1 > 3):
    console.log("You entered a value > 3");
    break;
  default:
    console.log("You did not enter a valid integer between 1 - 3");
}

console.log(
  `You entered: ${day}
  The following day is:`
)
*/

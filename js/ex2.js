/* HW3
   Example 2 JavaScript code
*/

console.log("Le's Output from HW3 Example 2");

const userName = prompt('Please type your name');
var unit = prompt('How many units you have completed at college?');

// TRY if inside while

if //((typeof unit !== 'bigint') || (unit < 0))
  ((Number.isInteger(unit) !== true) && (unit < 0)) {
  unit = prompt(`Please input an appropriate number`);
  unit;
}
console.log(`Name: ${userName}, have completed ${unit} units`);
alert(
  `Hello ${userName}
  Your grade standing is ${unit}

  ${userName} - This is the name entered
  ${unit} - Calculate as follows:
  Number of units:
  0 – 30: Freshman
  31 – 60: Sophomore
  61 – 90: Junior
  > 91: Senior`
)

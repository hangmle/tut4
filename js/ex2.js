/* HW3
  Example 2 JavaScript code
*/

console.log("Le's Output from HW3 Example 2");

const userName = prompt('Please type your name');
let unit = Number(prompt('How many units you have completed at college?'));


if ((Number.isInteger(unit) !== true) || (unit < 0)) {
  alert('Not an appropriate number. Start again')
}
if ((Number.isInteger(unit) === true) && (unit >= 0)) {
  console.log(`Name: ${userName}, have completed ${unit} units`);
  alert(`
    Hello ${userName}
    Your grade standing is ${unit}

    ${userName} - This is the name entered
    ${unit} - Calculate as follows:
    Number of units:
    0 – 30: Freshman
    31 – 60: Sophomore
    61 – 90: Junior
    > 91: Senior
  `)
}

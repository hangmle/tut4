/* HW3
  Example 1 JavaScript code
*/

console.log("Le's Output from HW3 Example 1");

const number = prompt('Enter a number between 1 - 100');
if (number>=1 && number<=100) {
  alert(`Thank you! You entered ${number}, a valid number`);
}
else {
  if ((number<1 || number>100) || isNaN(number)) {
    alert(`Sorry, ${number} is not a valid entry`);
  }
}
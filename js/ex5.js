/* HW3
   Example 5 JavaScript code
*/

console.log("Le's Output from HW3 Example 5");

var pwd = prompt('Please enter your password');
// let i=1;

for (let i = 0; i < 3; i) {
  if (pwd !== "secret") {
    var pwd = prompt('Enter your password again');
    i++;
    if (i == 3) {
      console.log(`Your account is locked! You failed to enter the correct password ${i+1} times`);
    }
  }
  if (pwd == "secret") {
    console.log(`You entered the correct password after ${i} attempt(s)`)
  }
}

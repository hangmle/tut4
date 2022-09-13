/* HW3
   Example 5 JavaScript code
*/

console.log("Le's Output from HW3 Example 5");

var pwd = prompt('Please enter your password');
// let i=1;

for (let i = 0; i <= 3; i) {
  if (pwd == "") {
    i++;
    var pwd = prompt('Enter your password again');
    console.log(i);
  }
  
}

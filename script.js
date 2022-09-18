// Assignment Code
var generateBtn = document.querySelector("#generate");
var form = document.getElementById('passwordform');
var length = document.getElementById('length');
var numeric = document.getElementById('numeric').checked;
var special = document.getElementById('special').checked;
var uppercase = document.getElementById('uppercase').checked;
var lowercase = document.getElementById('lowercase').checked;
if (numeric + special + uppercase + lowercase === 0) {
  alert("Select at least one option.");
  return;
}

var keys = {
  numeric: "0123456789",
  special: "!@#$%^&*_-+=",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz"
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


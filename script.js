// Assignment Code
var generateBtn = document.querySelector("#generate");
var form = document.getElementById('passwordform');
var length = document.getElementById('length');
var numeric = document.getElementById('numeric');
var special = document.getElementById('special');
var uppercase = document.getElementById('uppercase');
var lowercase = document.getElementById('lowercase');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

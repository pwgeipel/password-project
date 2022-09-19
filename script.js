// // Assignment Code
var generateBtn = document.querySelector("#generate");
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var resultArray = [];
var userArray = [];
let passwordLength = 0;
let numericPrompt;
let specialPrompt;
let uppercasePrompt;
let lowercasePrompt;

//generatePassword function creates password
function generatePassword() {
  setPasswordLength();
  choicePrompts();
  buildUserArray();
  // returns new password array as userArray to use in writePassword()
  return userArray;
};  

// prompts user for a value and checks length and number-type
function setPasswordLength() {
  passwordLength = 0;
  while(passwordLength < 8 || passwordLength > 128) {
    passwordLength = Math.floor(window.prompt("Please select a password length between 8 and 128 characters."));
    if (isNaN(passwordLength)) {
      passwordLength = 0;
    };
  };
  // returns value of password length to be used in buildUserArray()
  return passwordLength;
};

// choice confirm prompts
function choicePrompts() {
  numericPrompt = confirm("Do you want numbers in your password?");
  specialPrompt = confirm("Do you want special characters in your password?")
  uppercasePrompt = confirm("Do you want uppercase letters in your password?")
  lowercasePrompt = confirm("Do you want lowercase letters in your password?")
}

// uses confirmed prompts and concats confirmed choices
function buildUserArray() {
  // will prompt an alert if all choices are not selected and reruns choicePrompts
  while (!numericPrompt && !specialPrompt && !uppercasePrompt && !lowercasePrompt) {
    alert("Please select at least one option.");
    choicePrompts();
  };
  // if choice is "true", concat option array to resultArray
  if (numericPrompt){
    resultArray = resultArray.concat(numericArray);
  };
  if (specialPrompt){
    resultArray = resultArray.concat(specialArray);
  };
  if (uppercasePrompt){
    resultArray = resultArray.concat(uppercaseArray);
  };
  if (lowercasePrompt){
    resultArray = resultArray.concat(lowercaseArray);
  };
  console.log(resultArray)

  for (var i = 0; i < passwordLength; i++) {
    userArray.push(resultArray[Math.floor(Math.random() * resultArray.length)]);
  }
  userArray = userArray.join("");
}

function writePassword() {
  var password = generatePassword();
  console.log("password: " + password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  resultArray = [];
  userArray = [];
}

generateBtn.addEventListener("click", writePassword);


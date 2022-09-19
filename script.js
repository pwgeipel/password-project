// // Assignment Code
var generateBtn = document.querySelector("#generate");
// var form = document.getElementById('passwordform');






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



// var getChar = [
//   function numeric() {
//     keys.numeric[Math.floor(Math.random() * keys.numeric.length)];
//   },
//   function special() {
//     keys.special[Math.floor(Math.random() * keys.special.length)];
//   },
//   function uppercase() {
//     keys.uppercase[Math.floor(Math.random() * keys.uppercase.length)];
//   },
//   function lowercase() {
//     keys.lowercase[Math.floor(Math.random() * keys.lowercase.length)];  
//   }
// ];


// Write password to the #password input
function generatePassword() {
  setPasswordLength();
  choicePrompts();
  buildUserArray();
  return userArray;
};  
  // var numeric = document.getElementById('numeric').checked;
  // var special = document.getElementById('special').checked;
  // var uppercase = document.getElementById('uppercase').checked;
  // var lowercase = document.getElementById('lowercase').checked;
function setPasswordLength() {
  passwordLength = 0;
  while(passwordLength < 8 || passwordLength > 128) {
    passwordLength = Math.floor(window.prompt("Please select a password length between 8 and 128 characters."));
    if (isNaN(passwordLength)) {
      passwordLength = 0;
    };
  };
};

function choicePrompts() {
  numericPrompt = confirm("Do you want numbers in your password?");
  specialPrompt = confirm("Do you want special characters in your password?")
  uppercasePrompt = confirm("Do you want uppercase letters in your password?")
  lowercasePrompt = confirm("Do you want lowercase letters in your password?")
}

function buildUserArray() {
  while (!numericPrompt && !specialPrompt && !uppercasePrompt && !lowercasePrompt) {
    alert("Please select at least one option.");
    choicePrompts();
  };
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


  // if (numeric + special + uppercase + lowercase === 0) {
  // alert("Select at least one option.");
  // return;
  // }
  // var passwordLength = document.getElementById('length');
  // var passwordText = document.querySelector("#password");
  // var password = "";
  // while (passwordLength.value > password.length) {
  //   var newChar = getChar[Math.floor(Math.random() * getChar.length)];
  //   var selected = document.getElementById(newChar.name).checked;
  //   if (selected) {
  //      password += newChar();
  //   }
  // }  
  //   passwordText.value = password;


// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


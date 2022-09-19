// // Assignment Code
var generateBtn = document.querySelector("#generate");
// var form = document.getElementById('passwordform');






var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
}

var getChar = [
  function numeric() {
    keys.numeric[Math.floor(Math.random() * keys.numeric.length)];
  },
  function special() {
    keys.special[Math.floor(Math.random() * keys.special.length)];
  },
  function uppercase() {
    keys.uppercase[Math.floor(Math.random() * keys.uppercase.length)];
  },
  function lowercase() {
    keys.lowercase[Math.floor(Math.random() * keys.lowercase.length)];  
  }
];


// Write password to the #password input
function generatePassword() {
  var numeric = document.getElementById('numeric').checked;
  var special = document.getElementById('special').checked;
  var uppercase = document.getElementById('uppercase').checked;
  var lowercase = document.getElementById('lowercase').checked;
  if (numeric + special + uppercase + lowercase === 0) {
  alert("Select at least one option.");
  return;
  }
  var passwordLength = document.getElementById('length');
  var passwordText = document.querySelector("#password");
  var password = "";
  while (passwordLength.value > password.length) {
    var newChar = getChar[Math.floor(Math.random() * getChar.length)];
    var selected = document.getElementById(newChar.name).checked;
    if (selected) {
       password += newChar();
    }
  }
    passwordText.value = password;
}

// // Add event listener to generate button
document.getElementById("generate").addEventListener("click", generatePassword);


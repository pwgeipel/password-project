// // Assignment Code
// var generateBtn = document.querySelector("#generate");
// var form = document.getElementById('passwordform');





var keys = {
  numeric: "0123456789",
  special: "!@#$%^&*_-+=",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz"
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


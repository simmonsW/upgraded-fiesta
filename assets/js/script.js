// Assignment code here
function generatePassword() {
  var passwordLength = prompt("What length would you like your password to be? Choose anywhere from 8 - 128.");
  console.log(passwordLength);

  alert('Please select which characters to use.');

  var lowerCase = confirm("Use lowercase letters?");
  console.log(lowerCase);

  var uppperCase = confirm("Use uppercase letters?");
  console.log(uppperCase);

  var numbers = confirm("Use numbers 0 - 9?");
  console.log(numbers);

  var specialCharacters = confirm("Use special characters?");
  console.log(specialCharacters);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

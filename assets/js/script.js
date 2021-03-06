// Assignment code here
function generatePassword() {
  var passwordLength = prompt("What length would you like your password to be? Choose anywhere from 8 - 128.");
  console.log(passwordLength);

  // check password length
  if (passwordLength < 8) {
    alert("That is too short. please choose between 8 - 128.");
    generatePassword();
    return;
  }
  else if (passwordLength > 128) {
    alert("That is too long. please choose between 8 - 128.");
    generatePassword();
    return;
  }

  alert('Please select which characters to use.');

  var lowerCase = confirm("Use lowercase letters?");
  console.log(lowerCase);

  var upperCase = confirm("Use uppercase letters?");
  console.log(upperCase);

  var numbers = confirm("Use numbers 0 - 9?");
  console.log(numbers);

  var specialCharacters = confirm("Use special characters?");
  console.log(specialCharacters);

  if (!lowerCase && !upperCase && !numbers && !specialCharacters) {
    alert("you must select at least one character type.")
    generatePassword();
    return;
  }
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

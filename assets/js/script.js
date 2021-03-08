// Assignment code here

// global variables
var lowerCaseConfirm;
var upperCaseConfirm;
var numbersConfirm;
var symbolsConfirm;
var passwordLength;
var finalPassword;
// randomized character functions object
var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

function passwordChoicesPrompt() {
  // get desired password length
  passwordLength = prompt("What length would you like your password to be? Choose anywhere from 8 - 128.");
  passwordLength = parseInt(passwordLength);
  console.log(passwordLength);

  // check if passwordLength is not a number
  if (Number.isNaN(passwordLength)) {
    alert("Your input was not a number. Please select a number.");
    generatePassword();
    return;
  }

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

  // character selection
  alert('Please select which characters to use.');

  lowerCaseConfirm = confirm("Use lowercase letters?");
  console.log(lowerCaseConfirm);

  upperCaseConfirm = confirm("Use uppercase letters?");
  console.log(upperCaseConfirm);

  numbersConfirm = confirm("Use numbers 0 - 9?");
  console.log(numbersConfirm);

  symbolsConfirm = confirm("Use special characters?");
  console.log(symbolsConfirm);

  // check if at least one character option is chosen
  if (!lowerCaseConfirm && !upperCaseConfirm && !numbersConfirm && !symbolsConfirm) {
    alert("you must select at least one character type.")
    generatePassword();
    return;
  }
  generatePassword(lowerCaseConfirm, upperCaseConfirm, numbersConfirm, symbolsConfirm, passwordLength);
}

function generatePassword(lower, upper, number, symbol, passwordLength) {
  // initialize password variable
  finalPassword = '';

  // filter out false choices
  var typesCounter = lower + upper + number + symbol;
  console.log('typesCounter:', typesCounter);

  var typesArr = [{lower}, {upper}, {number}, {symbol}].filter( item => Object.values(item)[0]);
  console.log('typesArr', typesArr);

  // loop over the desired password length
  for (var i = 0; i < passwordLength; i += typesCounter) {
    typesArr.forEach(type => {
      var funcName = Object.keys(type)[0];
      console.log('funcName: ', funcName);

      finalPassword += randomFunc[funcName]();
      console.log('finalPassword', finalPassword);
    });
  }
  // return finalPassword
  console.log(finalPassword);
  return finalPassword;
}

// random character generator - https://www.net-comber.com/charset.html
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  var symbols = " !#$%&'()*+,-./:;<=>?@[]_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordChoicesPrompt();
  var password = finalPassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here
function generatePassword() {
  // get desired password length
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

  // character selection
  alert('Please select which characters to use.');

  var lowerCaseConfirm = confirm("Use lowercase letters?");
  console.log(lowerCaseConfirm);

  var upperCaseConfirm = confirm("Use uppercase letters?");
  console.log(upperCaseConfirm);

  var numbersConfirm = confirm("Use numbers 0 - 9?");
  console.log(numbersConfirm);

  var symbolsConfirm = confirm("Use special characters?");
  console.log(symbolsConfirm);

  // check if at least one character option is chosen
  if (!lowerCaseConfirm && !upperCaseConfirm && !numbersConfirm && !specialCharactersConfirm) {
    alert("you must select at least one character type.")
    generatePassword();
    return;
  }

  // actual password generation
  function generator(lower, upper, number, symbol, passwordLength) {
    
  }
  // initialize password variable

  // filter out false choices

  // loop over the desired password length

  // add final password to password var and return

  var generatedPass = '';

  var typesCounter = lowerCaseConfirm + upperCaseConfirm + numbersConfirm + symbolsConfirm;
  console.log('typesCounter:', typesCounter);

  var typesArr = [{lowerCaseConfirm}, {upperCaseConfirm}, {numbersConfirm}, {symbolsConfirm}];
  console.log('typesArr', typesArr);
  

  // randomized character functions object
  var randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
  };
  console.log(randomFunc);
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
  var symbols = " !#$%&'()*+,-./:;<=>?@[]\^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordChoicesPrompt();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

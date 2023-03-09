// Define arrays of characters to be used for generating the password
const specialCharacters = [
   "@",
   "%",
   "+",
   "\\",
   "/",
   "'",
   "!",
   "#",
   "$",
   "^",
   "?",
   ":",
   ",",
   ")",
   "(",
   "}",
   "{",
   "]",
   "[",
   "~",
   "-",
   "_",
   ".",
];
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const lowerCasedCharacters = [
   "a",
   "b",
   "c",
   "d",
   "e",
   "f",
   "g",
   "h",
   "i",
   "j",
   "k",
   "l",
   "m",
   "n",
   "o",
   "p",
   "q",
   "r",
   "s",
   "t",
   "u",
   "v",
   "w",
   "x",
   "y",
   "z",
];
const upperCasedCharacters = [
   "A",
   "B",
   "C",
   "D",
   "E",
   "F",
   "G",
   "H",
   "I",
   "J",
   "K",
   "L",
   "M",
   "N",
   "O",
   "P",
   "Q",
   "R",
   "S",
   "T",
   "U",
   "V",
   "W",
   "X",
   "Y",
   "Z",
];

// Define the getPasswordOptions function for prompting the user and returning the password options as an object
function getPasswordOptions() {
   let passwordLength = parseInt(
      prompt(
         "How many characters would you like your password to contain? (Please enter a number between 8 and 128)"
      )
   );

   while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      passwordLength = parseInt(
         prompt("Invalid input. Please enter a number between 8 and 128.")
      );
   }

   const hasSpecialCharacters = confirm(
      "Click OK to confirm including special characters."
   );
   const hasNumericCharacters = confirm(
      "Click OK to confirm including numeric characters."
   );
   const hasLowerCasedCharacters = confirm(
      "Click OK to confirm including lowercase characters."
   );
   const hasUpperCasedCharacters = confirm(
      "Click OK to confirm including uppercase characters."
   );

   const passwordOptions = {
      passwordLength: passwordLength,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters,
   };

   return passwordOptions;
}

// Define the generatePassword function for generating a password based on the password options
function generatePassword() {
   const options = getPasswordOptions();
   const possibleCharacters = [];
   const guaranteedCharacters = [];

   if (options.hasSpecialCharacters) {
      possibleCharacters.push(...specialCharacters);
      guaranteedCharacters.push(getRandomCharacter(specialCharacters));
   }

   if (options.hasNumericCharacters) {
      possibleCharacters.push(...numericCharacters);
      guaranteedCharacters.push(getRandomCharacter(numericCharacters));
   }

   if (options.hasLowerCasedCharacters) {
      possibleCharacters.push(...lowerCasedCharacters);
      guaranteedCharacters.push(getRandomCharacter(lowerCasedCharacters));
   }

   if (options.hasUpperCasedCharacters) {
      possibleCharacters.push(...upperCasedCharacters);
      guaranteedCharacters.push(getRandomCharacter(upperCasedCharacters));
   }

   const remainingLength = options.passwordLength - guaranteedCharacters.length;

   for (let i = 0; i < remainingLength; i++) {
      const randomCharacter = getRandomCharacter(possibleCharacters);
      guaranteedCharacters.push(randomCharacter);
   }

   return guaranteedCharacters.join("");
}

// Define the getRandomCharacter function for getting a random character from an array
function getRandomCharacter(charactersArray) {
   return charactersArray[Math.floor(Math.random() * charactersArray.length)];
}

// Define the writePassword function for writing the generated password to the DOM
function writePassword() {
   const password = generatePassword();
   const passwordText = document.querySelector("#password");

   passwordText.value = password;

   // Create a copy button
   const copyBtn = document.createElement("button");
   copyBtn.classList.add("btn");
   copyBtn.textContent = "Copy Password";

   // Add an event listener to copy the password to the clipboard
   copyBtn.addEventListener("click", function () {
      const passwordText = document.querySelector("#password");
      passwordText.select();
      document.execCommand("copy");
   });

   // Add the copy button to the card footer
   const cardFooter = document.querySelector(".card-footer");
   cardFooter.appendChild(copyBtn);
}

// Get a reference to the #generate element and add an event listener for generating a password
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Disable the copy button initially
const copyBtn = document.querySelector("#copy");
copyBtn.disabled = true;

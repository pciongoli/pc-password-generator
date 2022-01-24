// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here
var passwordLength;



// create a function that will add numbers
function addNumbers() {
  includeNumbers = prompt("Would you like to add numbers to your new passord? Please respond 'Yes' or 'No'.")
    includeNumbers = includeNumbers.toLowerCase();

    // create if statement to determine if user wants to include numbers
    if (includeNumbers === null) {
      alert("Repond 'Yes' or 'No'.");
      addNumbers();
    }
    else if (includeNumbers === "yes") {
      includeNumbers = true;
      return includeNumbers;
    }
    else if (includeNumbers === "no") {
      includeNumbers = false;
      return includeNumbers;
    }
    else {
      alert("Respond 'Yes' or 'No'.");
      addNumbers;
    }
    return includeNumbers;
  
}

// create a function that will add special characters
function addSpecial() {
  includeSpecial = prompt("Would you like to add special characters to your new password? Please respone 'Yes' or 'No'.");
    includeSpecial = includeSpecial.toLowerCase();

    // create if statement to determine if user wants to include special characters
    if (includeSpecial === null) {
      alert("Respond 'Yes' or 'No'.")
      addSpecial();
    }
    else if (includeSpecial === "yes") {
      includeSpecial = true;
      return includeSpecial;
    }
    else if (includeSpecial === "no") {
      includeSpecial = false;
      return includeSpecial;
    }
    else {
      alert("Respond 'Yes' or 'No'.")
      addSpecial();
    }
    return includeSpecial;
}

// create a function that will add uppercase letters
function addUpperCase() {
  includeUpperCase = prompt("Would you like to add Upper Case letters to your new password? Please respond 'Yes' or 'No'.");
    includeUpperCase = includeUpperCase.toLowerCase();
}

// create a function that will add lowercase letters



// create a function that only allows users to select password length of 8-128
function findLength() {
  passwordLength = prompt("Choose the number of characters you would like to have in your new password. Must be between 8 and 128 characters long.");
    // if statement in order to prevent passwords less than 8 characters and greater than 128 characters
    if (passwordLength < 8) {
      alert("Please choose a numberical value between 8 and 128");
      findLength();
    } 
    else if (passwordLength > 128) {
      alert("Please choose a numberical value between 8 and 128");
      findLength();
    }
    else if (isNaN(passwordLength)) {
      alert("Please choose a numberical value between 8 and 128")
      findLength();
    }
    else {
      alert("Please answer the following promts to generate your new passowrd");
    }

    return (passwordLength)
}

// create a function for generatePassword

function generatePassword() {
  findLength();
  console.log(findLength);
  addNumbers();
  console.log(addNumbers);
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

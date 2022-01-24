// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here
var passwordLength;



// create a function that will add uppercase letters

// create a function that will add lowercase letters

// create a function that will add special characters

// create a function that will add numbers



// create a function that only allows users to select password length of 8-128
function findLength() {
  passwordLength = prompt("choose the number of characters you would like to have in your new password. Must be between 8 and 128 characters long.");
    // if statement in order to prevent passwords less than 8 characters and greater than 128 characters
    if (passwordLength < 8) {
      alert("Please choose a password length between 8 and 128 characters.");
      findLength();
    } 
    else if (passwordLength > 128) {
      alert("Please choose a password length between 8 and 128 characters.");
      findLength();
    }
    else if (isNaN(passwordLength)) {
      alert("Please answer the following promts to generate your new passowrd")
      findLength();
    }
    else {
      alert("Please answer the following promts to generate your new passowrd");
    }

    return (passwordLength)
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here
let lowRange = 8;
let highRange = 128;

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");



//
function generatePassword() {
  
  let generatePassword = Number(window.prompt
    ("How many characters? (at least 8, and no more than 128)")) 


    if (generatePassword < lowRange || generatePassword > highRange) {
      window.alert("Please enter a number between 8 and 128");
      return;
    } else if (generatePassword >= lowRange && generatePassword <= highRange) {
      window.alert("continue");
      
    }








    
  
   }





// Write password to the #password input
function writePassword() {

  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// add an array of all alphanumerical characters as well 
// as a separate one with all special charcters

//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page
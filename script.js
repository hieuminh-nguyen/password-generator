//Globle Scope
var specialCharacters = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
"~", "*", "?", ":","\"","\\"];
var numbericCharacters = ["0","1","2","3","4","5","6","7","8","9"];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var emptyArray1 = [];
var emptyArray2 = [];
var emptyArray3 = [];
var emptyArray4 = [];
//var availableCharacters = emptyArray1.concat(emptyArray2,emptyArray3,emptyArray4);
var generateBtn = document.querySelector("#generate");

function writePassword(){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.textContent = password;
}

generateBtn.addEventListener("click",writePassword);

function generatePassword(){
    var length = checkLength ();
    var number = checkNum();
    var lowerCase = checkLower();
    var upperCase = checkUpper();
    var special = checkSpecial();
    if(number){
        var availableArray1 = numbericCharacters;
    }
    if(lowerCase){
        var availableArray2 = lowerCasedCharacters;
    }
    if(upperCase){
        var availableArray3 = upperCasedCharacters;
    }
    if(special){
        var availableArray4 = specialCharacters;
    }
    if(!number && !lowerCase && !upperCase && !special){
        alert("Plese choose at least 1 type of character. ")
        generatePassword();
    }
    var availableCharacters = availableArray1.concat(availableArray2,availableArray3,availableArray4);
    //console.log(availableCharacters);

    var filtered = availableCharacters.filter(function(element){
        return element !== undefined;
    })
    var result = "";
    for (i=1; i <= length; i++){
        var index = Math.floor(Math.random() * filtered.length);
        var computerChoice = filtered[index];
        result = result.concat(computerChoice);
    }
    return result;

}
function checkLength(){
    var userChoiceLength = parseInt(prompt("Enter the length of your password (Must be at least 8 characters and not excess 128 charactors): "));
    if (userChoiceLength<8){
        alert("Your password must include at least 8 characters ");
        checkLength();
    }else if (userChoiceLength>128){
        alert("Your password must include maximum 128 characters ");
        checkLength();
    }
    return userChoiceLength;
}

function checkNum(){
    var userChoiceNum = confirm("Password includes number? ");
    if (userChoiceNum){
        return true;
    }
}

function checkLower(){
    var userChoiceLower = confirm("Password includes lowercased characters ? ");
    if (userChoiceLower){
        return true;
    }
}

function checkUpper(){
    var userChoiceUpper = confirm("Password includes uppercased characters ? ");
    if (userChoiceUpper){
        return true;
    }
}
function checkSpecial(){
    var userChoiceSpecial = confirm("Password includes special characters ? ");
    if (userChoiceSpecial){
        return true;
    }
}

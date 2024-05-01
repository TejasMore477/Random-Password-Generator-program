//Rndom passWord Generator Program

const passWordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

function generatePassword (passWordLength, 
                           includeLowercase, 
                           includeUppercase, 
                           includeNumbers,
                           includeSymbols){

    const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const symbolsChar = "!@#$%^&*()-=+/<>?\|";
    
    let allowedChar = "";
    let password = "";

    allowedChar+= includeLowercase ? lowercaseChar :"";
    allowedChar += includeUppercase ? uppercaseChar : "";
    allowedChar += includeNumbers ? numbersChars : "";
    allowedChar += includeSymbols ? symbolsChar : "";

    if(passWordLength <= 0){
        return `(password lenght must be at least 1)`;
    }
    if(allowedChar.length === 0){
        return `(At least 1 ser of characters needs to be seleccted)`;
    }

    for(let i = 0; i < passWordLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChar.length) + 1;
        password += allowedChar[randomIndex];
    }

    return password;
}

const passWord = generatePassword(passWordLength, 
                                includeLowercase, 
                                includeUppercase, 
                                includeNumbers, 
                                includeSymbols);


console.log(passWord)
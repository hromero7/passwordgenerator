var passwordEl = document.getElementById("password");

var generateEl = document.getElementById("btn");

var copyEl = document.getElementById("copy");

var specialBox = document.getElementById("special-box"); 

var upperBox = document.getElementById("uppercase-box");

var numberBox = document.getElementById("number-box"); 

var specialArr = "!@#$%^&*/<>?;~";

var uppercaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numberArr = "0123456789";

var lowercaseArr = uppercaseArr.toLowerCase(); 

console.log(lowercaseArr); 

// functions

var randomFunc = {
    getSpecial: randomSpecial,
    getUpper: randomUpper,
    getNumber: randomNumber
}; 

function randomSpecial() {
    return specialArr[Math.floor(Math.random() * specialArr.length)];
    
}

function randomUpper() {
    return uppercaseArr[Math.floor(Math.random() * uppercaseArr.length)];
}

function randomNumber() {
    return numberArr[Math.floor(Math.random() * numberArr.length)]; 
}

function randomLower() {
    return lowercaseArr[Math.floor(Math.random() * lowercaseArr.length)];
}



generateEl.addEventListener("click", function(event) {
    event.preventDefault();
    var passLength = prompt("Choose length of password. Min = 8, Max = 128");

    //var specialValue = confirm("Include Special Characters?");

    //var uppercaseValue = confirm("Include Uppercase Letters?");

    //var numberValue = confirm("Include Numbers?");

    var length = passLength.value; 
    var special = specialBox.checked; 
    var upper = upperBox.checked;
    var number = numberBox.checked; 
    
   

    passwordEl.textContent = generatePass(length, special, upper, number); 


});

function generatePass(length, getSpecial, getUpper, getNumber) {
    var generatedPass = "";

    var boxCount = length + getSpecial + getUpper + getNumber;

    var criteria = [{length}, {getSpecial}, {getUpper}, {getNumber}].filter(item => Object.values(item)[0]);

 

   if (boxCount === 0) {
     return "";
    }

    for(var i = 0; i < length; i += boxCount) {
        criteria.forEach(type => {
            var funcName = Object.keys(type)[0];

            

            generatedPass += randomFunc[funcName](); 
        });
    }

    var generatedFinal = generatedPass.slice(0, length); 
    return generatedFinal; 

    
    
}




    









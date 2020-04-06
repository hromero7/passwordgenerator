var passwordEl = document.getElementById("password");

var generateEl = document.getElementById("btn");

var copyEl = document.getElementById("copy");

var specialBox = document.getElementById("special-box"); 

var upperBox = document.getElementById("uppercase-box");

var numberBox = document.getElementById("number-box"); 

var specialArr = ['!','@','#','$','%','^','&','*','/','<','>','?',';','~'];

var uppercaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var numberArr = ['0','1','2','3','4','5','6','7','8','9'];

//var lowercaseArr = uppercaseArr.join(",");


var generatedPass = []; 
var password = [];



// functions




generateEl.addEventListener("click", function(event) {
    event.preventDefault();
    // generatedPass = [];
    password = [];
    var passLength = prompt("Choose length of password. Min = 8, Max = 128");
    var passwordLength = parseInt(passLength, 10); 
    //for (var i = 0 ; i < passwordLength.value; i++) {
        //password.push(generatedPass[Math.floor(Math.random() * generatedPass.length)]);
       // passwordEl = passwordEl + generatedPass[length]; 
    //}

    if(passLength < 8) {
        alert("Password must be longer than 8 characters!");
        passwordEl.innerHTML = "";
    } else if(passLength > 128){
        alert("Length must be less than 128 characters!");
        passwordEl.innerHTML = ""; 
    } else{
    

    if (specialBox.checked === true) {
        for (var i = 0; i < specialArr.length; i++) {
            generatedPass.push(specialArr[i]);
        }
    }

    if (upperBox.checked === true) {
        for (var i = 0; i < uppercaseArr.length ; i++) {
            generatedPass.push(uppercaseArr[i]);
        }
    }

    if (numberBox.checked === true) {
        for (var i = 0 ; i < numberArr.length; i++) {
            generatedPass.push(numberArr[i]); 
        }
     }
     
     for (var i = 0 ; i < passwordLength; i++) {
        password.push(generatedPass[Math.floor(Math.random() * generatedPass.length)]);
        //passwordEl = passwordEl + generatedPass[length]; 
    }
    //  Use generatedPass to create a password using .random and the passwordLength
    //password.push(generatedPass[Math.floor(Math.random() * generatedPass.length)]);


    passwordEl.textContent = password.join(''); 

    
    console.log(passwordLength); 

    }



});


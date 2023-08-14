const emailInput = document.querySelector("#email");
const button = document.querySelector(".submit");
const error = document.querySelector(".error-msg");


function checkEmail(emailVal) {
    if (emailVal && validateEmail(emailVal)) {
        error.style.display = "none";
        emailInput.style.border = "1px solid green";
        emailInput.style.backgroundColor="white";
    } else {    
        displayError();
    }
}

function displayError(){
    error.style.display = "inline-block";
        error.innerText = "Valid email required";  
        error.style.color = "red";
        error.style.fontWeight = "bold";
        emailInput.style.border = "1px solid red";
        emailInput.style.backgroundColor ="#ffe8e6";
}

function removeStyleError(){
    error.style.display = "";
    error.innerText = "";  
    error.style.color = "black";
    error.style.fontWeight = "";
    emailInput.style.border = "";
    emailInput.style.backgroundColor ="";
}

function validateEmail(email) {
    let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

emailInput.addEventListener('input',()=>{
    if(emailInput.value){
        checkEmail(emailInput.value);
    }
    else removeStyleError();
})

button.addEventListener('click',()=>{
    checkEmail(emailInput.value); 
})
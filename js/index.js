const emailInput = document.querySelector("#email");
const button = document.querySelector(".btn-submit");
const error = document.querySelector(".error-msg");

function checkEmail(emailVal) {
    if (emailVal && validateEmail(emailVal)) {
        error.style.display = "none";
        emailInput.style.border = "1px solid green";
    } else {
        error.style.display = "inline-block";
        error.innerHTML = "Valid email required";
        error.style.color = "red";
        error.style.fontWeight = "bold";
        emailInput.style.border = "1px solid red";
    }

    // Change border color when focus is lost
    if (!emailInput.value) {
        emailInput.style.border = "1px solid black";
    }
}

function validateEmail(email) {
    let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

emailInput.addEventListener("input", () => {
    checkEmail(emailInput.value);
});

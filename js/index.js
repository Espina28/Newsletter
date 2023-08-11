const email_input = document.querySelector('.input');
const subscribe_btn = document.querySelector('.btn-submit');

subscribe_btn.addEventListener('click', (event) => {
    
    const emailValue = email_input.value;
    
    if (emailValue !== '') {
        alert("Success");
    } else {
        alert("Email field cannot be empty.");
    }
});
let userInput = document.querySelector("[name='username']");
let passInput = document.querySelector("[name='password']");
let emailInput = document.querySelector("[name='email']");
let gender = document.querySelector("[name='gender']");

document.forms[0].onsubmit = function(e) {
    let userValid = false;
    let ageValid = false;
    let emailValid = false;
    let gen = false;

    if (userInput.value !== "" && userInput.value.length <= 10) {
        userValid = true;
    }

    if (passInput.value !== "") {
        ageValid = true;
    }
    if (emailInput.value !== "") {
        emailValid = true;
    }
    if(gender.onsubmit !== false ){
gen = true;
    }

    if (userValid === false || ageValid === false || emailValid == false || gen == false) {
        e.preventDefault();
    }
};


window.onload = function (){
    userInput.focus();
}

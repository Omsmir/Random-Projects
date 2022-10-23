let email = document.getElementById("email")
let password = document.getElementById("password")
let i = document.querySelectorAll("svg path")
let eye = document.querySelectorAll(".show img")


console.log(eye)

let emailVaild = false
let passwordVaild = false

let reg = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/ig

email.oninput = function(){
    if(this.value.length > 5 && this.value.length < 25 && this.value.match(reg)){
        emailVaild = true

    }else {
        emailVaild = false

    }
    if(emailVaild){
        i[0].style.fill = "green"
}else {
    i[0].style.fill = "red"

}
  
}

password.oninput = function(){
    if(this.value.length > 4 && this.value.length < 10){
        passwordVaild = true

    }else {
        passwordVaild = false
    }

    if(passwordVaild){
        i[1].style.fill = "green"

    }else {
        i[1].style.fill = "red"

    }

}

function form_valid(emailVaild,passwordVaild){

}

password.addEventListener("keyup",() =>{
    eye.forEach((ele) =>{
        if(ele.classList.contains("shoow")){
            ele.style.display = "block"

        }
    })
})

let appear = false

eye.forEach((ele) => {
    ele.addEventListener("click" ,(e) => {
        if(password.type === "password"){
            appear = true
            password.type = "text"
            eye[0].style.display = "none"
            eye[1].style.display = "block"
        }else {
            appear = false
            password.type = "password"
            eye[1].style.display = "none"
            eye[0].style.display = "block" 
        }
    })
})

password.addEventListener("focusout",() =>{
    if(appear){
        password.type = "password"
    }
    if(password.value == ""){
        eye.forEach((ele) => {
            ele.style.display = "none"
        })
        i[1].style.fill = "#b0a6a6"

    }

})
password.onfocus = function(){
    if(this.value != "" ){  
        eye[0].style.display = "block"
    }else {
        eye.forEach((ele) => {
            ele.style.display = "none"
        })
    }
}

email.addEventListener("focusout",() => {
    if(email.value == ""){
        i[0].style.fill = "#b0a6a6"
    }

})
 
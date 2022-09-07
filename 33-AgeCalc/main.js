



function calcYear(){
let age = document.querySelector("#age")
let d1 = document.querySelector("#day").value
let m1 = document.querySelector("#month").value
let y1 = document.querySelector("#year").value

    let date = new Date()
    d2 = date.getDate()
    m2 = 1 + date.getMonth()
    y2 = date.getFullYear()
    let days = [31,28,31,30,31,30,31,30,31,30,31]
    if(d1 > d2){
        d2 += days[m2 - 1]
        m2 -= 1
    }
    if(m1> m2){
        m2 = m2 + 12
        console.log(m2)
        y2 -= 1
        console.log(y2)

    }

    let d = d2 - d1
    console.log(d2)
    let m = m2 - m1
    let y = y2 - y1

    if(d1 === "" || m1 === ""|| y1 === ""){
        return false

    }else {
        age.innerHTML = `Your age is ${y} years old and ${m} months  and ${d} days `

    }

}




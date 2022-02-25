let submit = document.querySelector("#submit")
let text = document.querySelector(".input")
let todo = document.querySelector(".todo")
let done = document.querySelector(".done")


emptyArray = [];

submit.onclick = function (){
    if(text.value !== ""){
        addElements(text.value)
    }
    text.value =""
    text.focus()
}

if (window.localStorage.getItem("tasks")){
    emptyArray = JSON.parse(localStorage.getItem("tasks"))
    
}

function addElements (textValue){
    let tasks = {
        id: Date.now(),
        content: textValue,
    }
    emptyArray.push(tasks)

   function addToPage(){
    let div = document.createElement("div")

    div.className = "text";

    div.setAttribute("data-id", tasks.id)

    let p  = document.createElement("p")

    p.appendChild(document.createTextNode(tasks.content))

    let span = document.createElement("span")

    span.className = "button"

    span.innerText = "button"

    div.appendChild(p)

    div.appendChild(span)

    todo.appendChild(div)

    span.onclick = function (e){
        e.target.parentElement.remove()

    }
   }
   addToPage()
    addToLocal(emptyArray)
    



}

function addToLocal(emptyArray){
    window.localStorage.setItem("tasks", JSON.stringify(emptyArray))

}


function getFromLocal(){
    let data = window.localStorage.getItem("tasks")
    if(data){
        let task = JSON.parse(data)
        addToPage(task)

    }
}
getFromLocal()
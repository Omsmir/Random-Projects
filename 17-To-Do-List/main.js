
let submit = document.querySelector("#submit")
let text = document.querySelector(".input")
let todo = document.querySelector(".todo")
let done = document.querySelector(".done")


emptyArray = [];

doneArray = []


if (window.localStorage.getItem("tasks")){
    emptyArray = JSON.parse(window.localStorage.getItem("tasks"))
    
}



if (window.localStorage.getItem("done")){
    doneArray = JSON.parse(window.localStorage.getItem("done"))
    
}



getFromLocal()


submit.onclick = function (){
    if(text.value !== ""){
        addElements(text.value)
    }
    text.value =""
    text.focus()
}

function Render(task){
    for(let i = 0; i < emptyArray.length ; i++){
        if(emptyArray[i].id == task){
            let doneTask = {
                id: emptyArray[i].id,
                content: emptyArray[i].content,
                todo: emptyArray[i].todo
            }

            doneArray.push(doneTask)
        }
    }
}

todo.addEventListener("click" , (ele) =>{
    if(ele.target.classList.contains("button")){   

function delLocal(taskid){
    emptyArray = emptyArray.filter((tasks) => tasks.id != taskid)
    addToLocal(emptyArray)
}
        
toggleLocal(ele.target.parentElement.getAttribute("data-id"))

Render(ele.target.parentElement.getAttribute("data-id"))

addToDone(doneArray)

DoneLocal(doneArray)


delLocal(ele.target.parentElement.getAttribute("data-id"))

    ele.target.parentElement.remove()


    }
    console.log(doneArray)

})

function addElements (textValue){
    let tasks = {
        id: doneArray.length + emptyArray.length+1,
        content: textValue,
        todo: false
    }
    emptyArray.push(tasks)


    addToPage(emptyArray)

    addToLocal(emptyArray)
    
}

function addToPage(emptyArray){
    todo.innerHTML = "";

    emptyArray.forEach((tasks) => {
        let div = document.createElement("div")

        div.className = "text active";
    
        div.setAttribute("data-id", tasks.id)

        div.setAttribute("state", tasks.todo)
    
        let p  = document.createElement("p")
    
        p.className = "one"

        p.appendChild(document.createTextNode(tasks.content))
    
        let span = document.createElement("span")
    
        span.className = "button"
    
        span.innerText = "Done"

        if(tasks.todo){
            div.className = "text done"
        }
    
        div.appendChild(p)
    
        div.appendChild(span)
    
        todo.appendChild(div)

      
 document.querySelectorAll(".text").forEach((ele) => {
    if(tasks.id == ele.getAttribute("data-id")){
        ele.classList.add("active")
    }else {
        ele.classList.remove("active")
    }
 })


      
    })
}



   

function addToLocal(emptyArray){
    window.localStorage.setItem("tasks", JSON.stringify(emptyArray))

}

function DoneLocal(doneArray){
    window.localStorage.setItem("done",JSON.stringify(doneArray))
}

function getFromLocal(){
    let data = window.localStorage.getItem("tasks")
    if(data){
        let task = JSON.parse(data)
        addToPage(task)
    }
}


function toggleLocal(taskid){
    for(let i = 0; i < emptyArray.length; i++){
        if(emptyArray[i].id == taskid){
            emptyArray[i].todo == false ? (emptyArray[i].todo = true) : (emptyArray[i].todo = true)

        }
    }
    addToLocal(emptyArray)
}
function toggledone(taskid){
    for(let i = 0; i < doneArray.length; i++){
        if(doneArray[i].id == taskid){
            doneArray[i].todo == true ? (doneArray[i].todo = false) : (doneArray[i].todo = true)

        }
    }
    DoneLocal(doneArray)
}

function addToDone(doneArra){
    
    done.innerHTML = ""

    doneArra.forEach((task) => {
        let div = document.createElement("div")

        div.className = "text active";
    
        div.setAttribute("data-id", task.id)

        div.setAttribute("state", task.todo)
        let edit = document.createElement("button")

        edit.className = "button edit"

        edit.innerHTML = "edit"


        let p  = document.createElement("p")

        let secp = document.createElement("p")

        secp.appendChild(document.createTextNode(task.content))
    
        p.appendChild(secp)

        p.className = "one"
    
        let span = document.createElement("span")
    
        span.className = "button del"
    
        span.innerText = "Delete"

        div.appendChild(p)
        div.appendChild(edit)

    
        div.appendChild(span)
    
        done.appendChild(div)

        document.querySelectorAll(".text").forEach((ele) => {
            if(task.id == ele.getAttribute("data-id")){
                ele.classList.add("active")
                
            }else {
                ele.classList.remove("active")
            }
            
         })
    })
}

getFromDone()

function getFromDone(){
    let data = window.localStorage.getItem("done")

    if(data){
        let task = JSON.parse(data)

        addToDone(task)
    }
}

function delDone(taskid){
     doneArray = doneArray.filter((task) => task.id != taskid)

    DoneLocal(doneArray)
}

function updateDone(taskid,form){
    for(i = 0; i < doneArray.length; i++){
        if(doneArray[i].id == taskid){
            doneArray[i].content = form.value
        }
    }
}

done.addEventListener("click" ,(ele) => {
    if(ele.target.classList.contains("del")){

        delDone(ele.target.parentElement.getAttribute("data-id"))


        ele.target.parentElement.remove()
    }
    if(ele.target.classList.contains("edit")){
        for (let i = 0; i < doneArray.length; i++){
            if(doneArray[i].id == ele.target.parentElement.getAttribute("data-id")){

function edit(){
    
    let form = document.createElement("input")

    form.type = "text"

    form.id = "inputDone"
    
    let one  = ele.target.previousElementSibling

    console.log(one)

    form.value = one.innerText

    one.firstElementChild.remove()

    one.appendChild(form)

    ele.target.nextSibling.remove()


    let OkButton = document.createElement("span")

    OkButton.className = "button"

    OkButton.id = "ok"

    OkButton.innerText = "ok"
    ele.target.parentElement.appendChild(OkButton)

    ele.target.setAttribute("aria-disabled","true")

    ele.target.disabled = true

    toggledone(ele.target.parentElement.getAttribute("data-id"))

}
edit()

                // ele.target.remove()

            }
        }

    }
    if(ele.target.id == "ok"){
        updateDone(ele)
        // for(let i = 0 ; i < doneArray.length; i++){
        //     if(doneArray[i].id == ele.target)
        // }

        addToDone(doneArray)
    }
    

})



function updateDone(ele){
    for(let i = 0 ; i < doneArray.length; i++){
        if(doneArray[i].id == ele.target.parentElement.getAttribute("data-id")){
            let textV = ele.target.parentElement.firstElementChild.firstElementChild.value

            doneArray[i].content = textV

            console.log(            doneArray[i].content = textV
                )
        }
    }
    DoneLocal(doneArray)
}

document.querySelectorAll(".text").forEach((ele) => { 
    ele.classList.remove("active")
})
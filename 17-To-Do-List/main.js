let submit = document.querySelector("#submit")
let text = document.querySelector(".input")
let todo = document.querySelector(".todo")
let done = document.querySelector(".done")


emptyArray = [];
NewArr = [];

submit.onclick = function (){
    if(text.value !== ""){
        addElements(text.value)
    }
    text.value =""
    text.focus()
}

if (window.localStorage.getItem("tasks")){
    emptyArray = JSON.parse(window.localStorage.getItem("tasks"))
    
}


function addElements (textValue){
    let tasks = {
        id: Date.now(),
        content: textValue,
    }
    emptyArray.push(tasks)
    NewArr.push(tasks)

    addToPage(emptyArray)

    addToLocal(emptyArray)
    
}

function addToPage(emptyArray){
    todo.innerHTML = "";
    emptyArray.forEach((tasks) => {
        let div = document.createElement("div")

        div.className = "text";
    
        div.setAttribute("data-id", tasks.id)
    
        let p  = document.createElement("p")
    
        p.appendChild(document.createTextNode(tasks.content))
    
        let span = document.createElement("span")
    
        span.className = "button"
    
        span.innerText = "Done"
    
        div.appendChild(p)
    
        div.appendChild(span)
    
        todo.appendChild(div)

      
      
    })
}


todo.addEventListener("click" , (ele) =>{
    if(ele.target.classList.contains("button")){
      
        function delLocal(taskid){
            emptyArray = emptyArray.filter((tasks) => tasks.id != taskid)
            addToLocal(emptyArray)
            addToPage1(NewArr)
        }
        delLocal(ele.target.parentElement.getAttribute("data-id"))

        ele.target.parentElement.remove()

        

    }
})


function addToPage1(NewArr){
    done.innerHTML = ""
    NewArr.forEach((tasks)=> {
        let div = document.createElement("div")

        div.className = "text";
    
        div.setAttribute("data-id", tasks.id)
    
        let p  = document.createElement("p")
    
        p.appendChild(document.createTextNode(tasks.content))
    
        let span = document.createElement("span")
    
        span.className = "button"
    
        span.innerText = "Done"
    
        div.appendChild(p)
    
        div.appendChild(span)
    
        done.appendChild(div)

    })
}
    
   

function addToLocal(emptyArray){
    window.localStorage.setItem("tasks", JSON.stringify(emptyArray))

}
function addToLocal1(NewArr){
    window.localStorage.setItem("task1", JSON.stringify(NewArr))

}

function getFromLocal(){
    let data = window.localStorage.getItem("tasks")
    if(data){
        let task = JSON.parse(data)
        addToPage(task);
    }
}
getFromLocal()

function getFromLocal1(){
    let data = window.localStorage.getItem("task1")
    if(data){
        let task = JSON.parse(data)
        addToPage(task);
    }
}
getFromLocal1()







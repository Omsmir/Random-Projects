let inpuText = document.querySelector(".input")
let Btn = document.querySelector(".add")
let tasksDiv = document.querySelector(".tasks")


let ArrayOfTasks = [];


if(window.localStorage.getItem("tasks")){
    ArrayOfTasks = JSON.parse(localStorage.getItem("tasks"))

}



getFromLocal()

Btn.onclick = function (){
    if(inpuText.value !== ""){

        addElements(inpuText.value)

        inpuText.value = ""; // Empty Input Field
    }

}

tasksDiv.addEventListener("click" , (e) => {
    if(e.target.classList.contains("del")){

        function delLocal(taskid){
            ArrayOfTasks = ArrayOfTasks.filter((tasks) => tasks.id !== taskid)
            addToLocal(ArrayOfTasks)
    
        }
    delLocal(e.target.parentElement.getAttribute("data-id"))


        e.target.parentElement.remove();

    }
    if(e.target.classList.contains("task")){

        toogleLocal(e.target.getAttribute("data-id"))



        e.target.classList.toggle("done")
    }

})


function addElements (taskText){
    const tasks = {
        id: Date.now(),
        title: taskText,
        completed: false,
    }

    ArrayOfTasks.push(tasks);

    addToPage(ArrayOfTasks)

    addToLocal(ArrayOfTasks)

}

function addToPage(ArrayOfTasks){
    tasksDiv.innerHTML = ""


ArrayOfTasks.forEach((tasks) => {
    

        let div = document.createElement("div");
    
        div.setAttribute("data-id", tasks.id)

        div.appendChild(document.createTextNode(tasks.title))

    
        div.className = "task";

        if(tasks.completed){
            div.className ="task done"
        }
        
        let span = document.createElement("span");
        
        span.className = "del"
    
        span.appendChild(document.createTextNode("delete"))
        
        
        div.appendChild(span)
        
        
        tasksDiv.appendChild(div)

})}

function addToLocal(ArrayOfTasks){
    window.localStorage.setItem("tasks", JSON.stringify(ArrayOfTasks))
}



function getFromLocal(){
    let data = window.localStorage.getItem("tasks")

    if(data){
        let task = JSON.parse(data)

        addToPage(task)

    }
}




function toogleLocal(taskId){
    for(let i = 0; i < ArrayOfTasks.length ; i++){
        if(ArrayOfTasks[i].id == taskId){

            ArrayOfTasks[i].completed == false ? (ArrayOfTasks[i].completed = true) : (ArrayOfTasks[i].completed = false);

        }
    }
    addToLocal(ArrayOfTasks)
}
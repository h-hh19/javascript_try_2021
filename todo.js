const toDoform = document.querySelector(".js-toDoForm"),
    toDoinput = toDoform.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text){
const li = document.createElement("li");
const delBtn = document.createElement("button");
delBtn.innerHTML = "❌";
const span = document.createElement("span");
span.innerText = text;
li.appendChild(span);
li.appendChild(delBtn);
toDoList.appendChild(li);  
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoinput.value;
    paintToDo(currentValue);
    toDoinput.value = "";
}

    function loadToDos(){
        const toDos = localStorage.getItem(TODOS_LS);
        if(TODOS_LS !== null){

        }
    }

    function init(){
        loadToDos();
        toDoform.addEventListener("submit", handleSubmit)
    }

    init();
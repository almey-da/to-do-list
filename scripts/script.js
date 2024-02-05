const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        //display cross icon
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); //to save data
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData(); //to save data
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData(); //to save data
    }
}, false);

//to save data in listContainer, with the name of data
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//to display data
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
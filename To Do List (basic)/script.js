

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = () => {
    if(inputBox.value === '') {
        alert("You must write something._.");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let x = document.createElement("span");
        x.innerHTML = "\u00d7";
        li.appendChild(x);
        saveData();
    }
    inputBox.value = '';
}

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
  }

showTask();

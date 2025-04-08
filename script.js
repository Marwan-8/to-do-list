    const inputfield = document.getElementById("input");
    const addbutton = document.querySelector("button");
    const taskcontainer = document.querySelector(".taskcontainer");
    
    addbutton.addEventListener("click", () => {
        const taskText = inputfield.value;
               
        const task = `   
    <div class="task">
        <span>${taskText}</span>
        <div class="trash">
            <div class="icons-container"><i class="fa-solid fa-check icons"></i></div>
            <div class="icons-container"> <i class="fa-solid fa-pen-to-square icons"></i></div>
            <div class="icons-container"><i class="fa-regular fa-trash-can icons"></i></div>
        </div>      
    </div>`;

        taskcontainer.innerHTML+=task;
        inputfield.value = "";
    });
  
    taskcontainer.addEventListener("click", (ele) => {

        switch (ele.target.className) {
          case "fa-regular fa-trash-can icons":
            ele.target.parentElement.parentElement.parentElement.remove();
            break;
      
          case "fa-solid fa-check icons":
            const taskText = ele.target.parentElement.parentElement.previousElementSibling;
            if (taskText.style.textDecoration === "line-through") {
                taskText.style.textDecoration = "none"; 
            } else {
                taskText.style.textDecoration = "line-through";
            }
            break;
      
          case "fa-solid fa-pen-to-square icons":
            const taskToEdit = ele.target.parentElement.parentElement.previousElementSibling; 
            const newTaskText = prompt("Edit your task:", taskToEdit.textContent);
            if (newTaskText !== null && newTaskText.trim() !== "") {
                taskToEdit.textContent = newTaskText.trim();
            }
            break;      
        }
      });

      
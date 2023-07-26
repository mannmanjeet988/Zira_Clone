const createIssueButton= document.getElementById("create-issue")
const box = document.getElementsByClassName("box")[0]

const statusMapping = {
    COMPLETED: 'Completed',
    IN_PROGRESS: 'In Progress',
    TODO: 'TO DO'
}


// createIssueButton.addEventListener("click", (e)=>{
//     createIssueButton.remove();
//     const itemContainer = document.createElement("div");
//     itemContainer.className = "item";
//     itemContainer.innerHTML =`<textarea  cols="30" rows="3" style="resize:none"></textarea>
//     <select >
//         <option>1</option>
//         <option>2</option>
//     </select>`;
//    // const box = e.target.parentNode.parentNode ;    //facing issue due to event bubbling(e.target.parentNode)
   
//     box.appendChild(itemContainer);
//     itemContainer.children[0].focus();    // focus method  will automatically focus the textarea
// })



// method 1: to show modal on click (create Issue)
// const modal= document.getElementById("modal");
// modal.style.visibility="hidden";

// createIssueButton.addEventListener("click" , (e)=> {
//     modal.style.visibility="visible";
//     document.body.appendChild(modal);
// })


// method 2: to show modal on click (create Issue)
const newModal =document.createElement("div");
newModal.className = "modal";
newModal.id= "modal";
newModal.innerHTML = `<div class="modal-body">
        <form>
            <span class="material-icons close" onclick="closeModal()">close</span>
            <h4>Add Task</h4>
            <input type="text" name="taskName" placeholder="Task name" required>
            <textarea type="text" rows="3"  style="resize:none" name="description" placeholder="description" required>
            </textarea>
            <input type="text" name="assignee" placeholder="Assignee name" >
            <select name="status">
                <option value="TODO">TO DO</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="COMPLETED">Completed</option>
            </select>
            <button type="submit">Create</button>
        </form>
</div>`

createIssueButton.addEventListener("click" , (e)=> {
        document.body.appendChild(newModal);
    })

function closeModal(){
   newModal.remove();
    }
    
function addNewTask(task) {
        /*
            <div class="card">
                <p class="task-name">Task Name</p>
                <p class="description">Some random description</p>
                <div class="status-container">
                    <p data-short-name="SA" class="assignee">Aravind</p>
                    <p class="status">In Progress</p>
                </div>
            </div>
        */
    
        const card = document.createElement("div");
        card.className = "card" ;
        card.addEventListener("dragstart", () => {
            activeDraggedElement = card ;
            //activeDraggedElement.style.visibility = "hidden" ;
        })
    
        task.status !== 'COMPLETED' && (card.draggable = "true") ;
        
        const words = task.assignee.split(" ");
        let nickName = words[0][0].toUpperCase() ;
        if(words.length > 1) {
            nickName += words[words.length - 1][0].toUpperCase();
        }
        
        card.innerHTML = `
            <p class="task-name">${task.taskName}</p>
            <p class="description">${task.description}</p>
            <div class="status-container">
                <p data-short-name="${nickName}" class="assignee">${task.assignee}</p>
                <p class="status">${statusMapping[task.status]}</p>
            </div>`;
        const box = document.getElementById(task.status)
        box.appendChild(card);
}
    
    function onSubmitForm(event){
        event.preventDefault();
        const formElement = event.target ;
        const userData = {
            taskName: formElement["taskName"].value.trim(),
            assignee: formElement["assignee"].value.trim(),
            status: formElement["status"].value,
            description: formElement["description"].value.trim()
        }
        closeModal();
        addNewTask(userData);
    }


//to prevent default behaviour of sumit button of form
createIssueButton.addEventListener("click" , () => {
    document.body.appendChild(newModal);
    const form = document.querySelector(".modal form") ;
    form.removeEventListener("submit", onSubmitForm);
    form.addEventListener("submit", onSubmitForm)
})



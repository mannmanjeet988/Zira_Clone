const createIssueButton= document.getElementById("create-issue")
const box = document.getElementsByClassName("box")[0]


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
newModal.innerHTML = 
    `<form>
        <span class="material-icons close" onclick="closeModal()">close</span>
        <h4>Add Task</h4>
        <input type="text" name="taskName" placeholder="Task name" required>
        <textarea type="text" rows="3"  style="resize:none" name="description" placeholder="description" required>
        </textarea>
        <input type="text" placeholder="Assignee name">
        <select>
            <option value="TODO">TO DO</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="COMPLETED">Completed</option>
        </select>
        <button type="submit">Create</button>
    </form>
</div>
</div>`;
createIssueButton.addEventListener("click" , (e)=> {
        document.body.appendChild(newModal);
    })

function closeModal(){
    modal.remove();
    }
    




import './NavBar.css';

let taskMessage;
let taskID = 0;

const handleClick = () =>{
    taskID+=1;
    taskMessage = prompt("Enter the task: ");
    if(taskMessage!=null)
        alert("Task ID: "+taskID+" : The task is "+taskMessage)
    else
        taskID-=1
        console.log(taskID + taskMessage )
}

const NavBar = () => {
    return ( 
        <div id="Main-Bar">
            <button id="add-task" onClick={handleClick}>Add a Task</button>
        </div>
     );
}
 
export default NavBar;
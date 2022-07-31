import "./Tasks.css"
import { useState } from "react";


const AddTask = ({closePopUp, tasks}) => {
    let taskID = 1;
    let taskIDSet = false;
    const [taskName,setTaskName] = useState();
    const [taskDate, setTaskDate] = useState();
    const [pending,setPending] = useState(false)

    const createTaskID =()=>{
        tasks.map((task)=>{
            if(taskIDSet === false && (taskID !== task.id))
                taskIDSet=true;
            else if(taskIDSet === false) 
                taskID+=1;
                
        })
        console.log(taskID)
        setPending(true)
    }

    const handleSubmit = (e)=>{
        // e.preventDefault()
        createTaskID()
        const task ={taskID, taskName, taskDate}
        console.log(task)
        fetch("http://localhost:8000/tasks",{
            method:"POST",
            headers:{"Content-Type": "application/JSON"},
            body:JSON.stringify(task)
        }).then(()=>{
            console.log("Added Task")
            setPending(false)
            closePopUp()
        })
    }

    return ( 
        <div className="overlay">
            <div className="popup">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="taskName" id="taskNameLabel">Task: </label>
                    <input id="taskName" type="text" onChange={(e)=>setTaskName(e.target.value)} required></input> {/*This binds the input field with the state, so the changes are constantly reflected */}
                    <label htmlFor="taskDate" id="taskDateLabel">Completion Date</label>
                    <input id="taskDate" type="date" onChange={(e)=>setTaskDate(e.target.value)} required></input>
                    {!pending && <button id="AddTask" type="submit">Add Task</button>}
                    {pending && <button id="AddTask" type="submit" disabled>Adding Task</button>}

                </form>
            </div>
        </div> 
    );
}
 
export default AddTask;
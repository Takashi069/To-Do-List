import './Tasks.css'

/*
    It is not a good idea to have handleDelete
    here as it would make it use the props which is passed.
    This modification in the props is not advised, so handle the 
    delete option in the orginal location where the data was
    first created
*/

function hasTasks(condition,tasks,handleDelete){
    if(condition === "true"){
        return(
            <div id="TaskList">
            {console.log("In tasklist" + tasks)}
            {tasks.map((task) => (
                <div id="Task" key={task.taskID}> 
                    <div id="Task-Details">
                        <h2>{task.taskMessage}</h2>
                        <p>Due on: {task.dueDate}</p>
                    </div>
                    <button id="Complete" onClick={() => handleDelete(task.taskID, true)}>Completed</button>
                    <button id="Delete" onClick={() => handleDelete(task.taskID, false)}>Delete</button>
                </div> 
            ))}
            </div>
        )
    }else{
        return(
            <div className="TaskList">
                <div id="Task">
                    <p className='Message'>No More Tasks Pending</p>
                </div> 
            </div>
        )
    }
}

//De-referenceing props have to be in {} and not in ()
const TaskList = ({tasks,handleDelete}) => {
    let tasksPresent
    if(tasks === null || Object.keys(tasks).length === 0)
        tasksPresent = "false";
    else tasksPresent = "true";
    return ( 
        hasTasks (tasksPresent,tasks,handleDelete)
     );
}
 
export default TaskList;
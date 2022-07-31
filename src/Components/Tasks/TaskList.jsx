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
                <div id="Task" key={task.id}> 
                    <div id="Task-Details">
                        <h2>{task.taskName}</h2>
                        <p>Due on: {task.taskDate}</p>
                    </div>
                    <button id="Complete" onClick={() => handleDelete(task.id, true)}>Completed</button>
                    <button id="Delete" onClick={() => handleDelete(task.id, false)}>Delete</button>
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
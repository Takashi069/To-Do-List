import './Tasks.css'

/*
    It is not a good idea to have handleDelete
    here as it would make it use the props which is passed.
    This modification in the props is not advised, so handle the 
    delete option in the orginal location where the data was
    first created
*/

//De-referenceing props have to be in {} and not in ()
const TaskList = ({tasks,handleDelete}) => {
    
    return ( 
        <div id="TaskList">
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
     );
}
 
export default TaskList;
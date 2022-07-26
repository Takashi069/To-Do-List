import TaskList from '../Tasks/TaskList.jsx';
import './Dashboard.css'
const Dashboard = ({tasks,dataRetrived,errorDetected,setTasks}) => {
  
    // const [tasks,setTasks] = useState(null)
    
    const handleDelete = (id, category)=>{
      const newTasks = tasks.filter((task) => task.taskID!==id);
      setTasks(newTasks)
      if(category === false)
        console.log("Deleting " + id)
      else if (category === true)
        console.log("Completed " + id);
    }

    return ( 
        <div>
            <h1 id="Title1">Today's Tasks</h1>
            {/* {console.log(Object.values(tasks))} */}
            {/*Conditional Templating shown below */}
            {errorDetected && <div id="Error">Data Not Available</div>}
            {!dataRetrived && !errorDetected && <div id="Loading">Loading</div>}
            {tasks && <TaskList tasks={tasks.filter((task) => task.dueDate === "01/01/2022")} handleDelete = {handleDelete}/>}
            <h1>All Tasks</h1>
            {errorDetected && <div id="Error">Data Not Available</div>}
            {!dataRetrived && !errorDetected && <div id="Loading">Loading</div>}
            {tasks && <TaskList tasks={tasks} handleDelete = {handleDelete}/>}
        </div>
     );
}
 
export default Dashboard;
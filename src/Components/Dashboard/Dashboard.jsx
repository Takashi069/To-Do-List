import TaskList from '../Tasks/TaskList.jsx';
import './Dashboard.css'
const Dashboard = ({tasks,dataRetrived,errorDetected,setTasks}) => {

   let today = new Date();
   const month = today.getMonth()+1
   const formattedMonth = month<10 ? '0'+month : month
    // const [tasks,setTasks] = useState(null)
    
    const handleDelete = (id, category)=>{
      const newTasks = tasks.filter((task) => task.taskID!==id);
      //deleting the task from the JSON database
      fetch("http://localhost:8000/tasks/"+id,{
        method:"DELETE"
      }).then(()=>{
        setTasks(newTasks)
      })
      
    }

    return ( 
        <div id="TaskList">
            {tasks!==null && <h1 id="Title1">Today's Tasks</h1>}
            {(tasks===null) && <h1 id="Title1">No More tasks left pending</h1>}

            {/* {console.log(Object.values(tasks))} */}
            {/*Conditional Templating shown below */}
            {errorDetected && <div id="Error">Data Not Available</div>}
            {!dataRetrived && !errorDetected && <div id="Loading">Loading</div>}
            {tasks && <TaskList tasks={tasks.filter((task) => task.taskDate === today.getFullYear() + "-" + formattedMonth + "-" + today.getDate())} handleDelete = {handleDelete}/>}
            <h1>All Tasks</h1>
            {errorDetected && <div id="Error">Data Not Available</div>}
            {!dataRetrived && !errorDetected && <div id="Loading">Loading</div>}
            {tasks && <TaskList tasks={tasks} handleDelete = {handleDelete}/>}
        </div>
     );
}
 
export default Dashboard;
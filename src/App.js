import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar.jsx';
import TaskList from './Components/Tasks/TaskList';

function App() {
  const [tasks,setTasks] = useState([
    {taskID: 1, taskMessage: "Mess 1", dueDate: "01/01/2022"},
    {taskID: 2, taskMessage: "Mess 2", dueDate: "05/06/2022"},
    {taskID: 3, taskMessage: "Mess 3", dueDate: "10/05/2022"}
  ])

  const handleDelete = (id, category)=>{
    const newTasks = tasks.filter((task) => task.taskID!==id);
    setTasks(newTasks)
    if(category === false)
      console.log("Deleting " + id)
    else if (category === true)
      console.log("Completed " + id);
  }

  return (
    <div className="App">
      <NavBar />
      <h1 id="Title1">Today's Tasks</h1>
      <TaskList tasks={tasks.filter((task) => task.dueDate === "01/01/2022")} handleDelete = {handleDelete}/>
      <h1>All Tasks</h1>
      <TaskList tasks={tasks} handleDelete = {handleDelete}/>

    </div>
  );
}

export default App;


/*
  TODO: Make the handleClick of the NavBar
  interact with adding new Tasks to the set of Tasks
*/
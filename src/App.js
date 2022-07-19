import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar.jsx';
import TaskList from './Components/Tasks/TaskList';

function App() {

  let newtaskMessage;
  let newtaskID = 3;

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

  const handleClickNavBarAddButton = () =>{
    newtaskID+=1;
    newtaskMessage = prompt("Enter the task: ");
    console.log(tasks);

    if(newtaskMessage!=null){
        // alert("Task ID: "+newtaskID+" : The task is "+newtaskMessage)
        setTasks(tasks => [...tasks,{taskID: newtaskID, taskMessage: newtaskMessage, dueDate: "01/05/2022"}]);
        /*
          Explanation: I cannot use the push function because the basic sense of
          the useState is to ensure the values it keeps track of are immutable. If ever
          a need arises to mutate it, I have to use the 'set' function.
          Since the push function mutuates the variable and returns the length of the 
          new Array of dictionaries, it cannot be used.

          Instead, I used a Spread Operator "...variablename, entry" to append to the end.
          Based on the article I read from: 
          https://javascript.plainenglish.io/how-to-add-to-an-array-in-react-state-3d08ddb2e1dc
          
          I understood that the recommended way to update the State was to wrapper it based
          on the following syntax:
          setVariable(variableName => [...variableName,newValue]) --> This appends to the end
        */
    }else
        newtaskID-=1
      // console.log(newtaskID + newtaskMessage )
  }

  return (
    <div className="App">
      <NavBar handleClick={handleClickNavBarAddButton} />
      <h1 id="Title1">Today's Tasks</h1>
      {/* {console.log(Object.values(tasks))} */}
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

  Issue: After doing an setTasks for the handleClick
  it resets the tasks to an empty array

  */
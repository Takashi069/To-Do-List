import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar.jsx';
import TaskList from './Components/Tasks/TaskList';

function App() {

  let newtaskMessage;
  let newtaskID = 3;

  useEffect(()=>{
    fetch("http://localhost:8000/tasks")
      .then(res =>{
        if(res.ok === false){
          // Error handling
          throw Error("Could not fetch resource from database")
        }
        return res.json()
      })
      .then(data =>{
        //This data is the parsed data after getting a response from the link
        setTasks(data)
        setdataRetrieved(true)
        setErrorDetected(false);
      })
      .catch(error =>{
        console.log(error)
        setErrorDetected(true)
        setdataRetrieved(false);
      })
  },[])

  const [tasks,setTasks] = useState(null)
  const [dataRetrived,setdataRetrieved] = useState(false);
  const [errorDetected, setErrorDetected] = useState(false);
  
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

export default App;


/*
  Commands to get react to watch the JSON server
  npx json-server --watch path-to-db --port 8000  --> since port 3000 is hosting the development server
*/
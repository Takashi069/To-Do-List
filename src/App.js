import useFetch from './Hooks/useFetch'
import './App.css';
import Contact from './Components/Contact/Contact.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import AddTask from './Components/Tasks/AddTasks.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react';

function App() {

  
  // const [tasks,setTasks] = useState(null)
  const {data:tasks, setData:setTasks, errorDetected, dataRetrived } = useFetch("http://localhost:8000/tasks")
  const [popup,setPopup] = useState(false);
  
  const togglePopUp = () =>{
    setPopup(!popup)
    console.log(popup)
  }

  const handleClickNavBarAddButton = () =>{
    
    setPopup(true); //activates the popup
    
    // ---------------------Old Code: No Longer Functional----------------------------------------------
    // if(newtaskMessage!=null && newDate!=null){
    //     // alert("Task ID: "+newtaskID+" : The task is "+newtaskMessage)
    //     setTasks(tasks => [...tasks,{taskID: newtaskID, taskMessage: newtaskMessage, dueDate: newDate}]);
    //     /*
    //       Explanation: I cannot use the push function because the basic sense of
    //       the useState is to ensure the values it keeps track of are immutable. If ever
    //       a need arises to mutate it, I have to use the 'set' function.
    //       Since the push function mutuates the variable and returns the length of the 
    //       new Array of dictionaries, it cannot be used.

    //       Instead, I used a Spread Operator "...variablename, entry" to append to the end.
    //       Based on the article I read from: 
    //       https://javascript.plainenglish.io/how-to-add-to-an-array-in-react-state-3d08ddb2e1dc
          
    //       I understood that the recommended way to update the State was to wrapper it based
    //       on the following syntax:
    //       setVariable(variableName => [...variableName,newValue]) --> This appends to the end
    //     */
    // } -------------------Old Code: No Longer Functional----------------------------------------------
  }

  return (
    <div className="App">
      <Router>
        <NavBar handleClick={handleClickNavBarAddButton} />
        {popup && <AddTask closePopup={togglePopUp} tasks={tasks} />} {/*This will make sure the popup open only when the button is clicked */}
        <div className="content">
          <Routes>{/* shows the different routes to be taken  */}
                  {/* Route taken when a re-direction is issued/clicked in the webpage */}
            <Route exact path="/" element={<Dashboard 
                tasks={tasks} 
                setTasks={setTasks} 
                errorDetected={errorDetected} 
                dataRetrived={dataRetrived} />
            }/> {/*This is path to be shown when the brower loads the webpage */}
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;


/*
  Commands to get react to watch the JSON server
  npx json-server --watch path-to-db --port 8000  --> since port 3000 is hosting the development server
*/
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar.jsx';
import TaskList from './Components/Tasks/TaskList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <br/>
      <br/>
      <TaskList />
    </div>
  );
}

export default App;

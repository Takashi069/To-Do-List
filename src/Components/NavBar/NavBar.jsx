import './NavBar.css';





const NavBar = ({handleClick}) => {
    return ( 
        <div id="Main-Bar">
            <button id="add-task" onClick={handleClick}>Add a Task</button>
        </div>
     );
}
 
export default NavBar;
import './NavBar.css';
import {Link} from 'react-router-dom'

/*
    Using anchor tags will result in the browser communicating with the server.
    To avoid this and make the broswer redirect using the React Router, use Link instead
    Link tags do not have href but instead have a "to" parameter
*/

const NavBar = ({handleClick}) => {
    return ( 
        <div id="Main-Bar">
            <Link to="/"><button>Tasklist</button></Link>
            <button id="add-task" onClick={handleClick}>Add a Task</button>
            <Link to="/contact"><button>Got Feedback ?</button></Link>
        </div>
     );
}
 
export default NavBar;
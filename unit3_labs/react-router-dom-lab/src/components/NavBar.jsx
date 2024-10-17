import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  return (
    <nav>
        <ul className='nav-bar'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/list'>List of mailboxes</Link>
            </li>
            <li>
                <Link to='/new'>New mailbox</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar
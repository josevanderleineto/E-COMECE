import { Link } from 'react-router-dom';

const NavMenu = () => {
    return(
        <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
    )
}

export default NavMenu;
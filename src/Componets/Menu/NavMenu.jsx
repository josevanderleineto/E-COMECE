import { Link } from 'react-router-dom';
import '../Menu/Nav.css';
import home  from  '../../assets/img/home.svg';
import user  from  '../../assets/img/user.svg';


const NavMenu = () => {
    return(
        <div >
      <nav>
        <ul className='menu'>
          <li>
            <Link to="/"><img src={home} alt="Home" /></Link>
          </li>
          <li>
            <Link to="/login"><img src={user} alt="User" /></Link>
          </li>
        </ul>
      </nav>
    </div>
    )
}

export default NavMenu;
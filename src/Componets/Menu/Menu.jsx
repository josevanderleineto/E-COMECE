import { Link } from 'react-router-dom';
import '../Menu/menu.css';
import home from '../../assets/img/home.svg';
import login from '../../assets/img/login.svg';
const Menu = () => {
    return(
        <div>
      <nav>
        <ul>
          <li>
            <Link to="/"><img src={home} alt="" /></Link>
          </li>
          <li>
            <Link to="/login"><img src={login} alt="" /></Link>
          </li>
        </ul>
      </nav>
    </div>
    )
}

export default Menu;
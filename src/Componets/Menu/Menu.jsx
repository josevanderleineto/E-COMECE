import { Link } from 'react-router-dom';
import '../Menu/menu.css';
import home from '../../assets/img/home.svg';
import login from '../../assets/img/login.svg';
const Menu = () => {
    return(
        <div>
      <nav>
        <div></div>
        <ul>
          <li>
            <Link to="/login"><img src={login} alt="
            teste, 1" /></Link>
          </li>
          <li>
            <Link to="/"><img src={login} alt="" /></Link>
          </li>
        </ul>
      </nav>
    </div>
    )
}

export default Menu;
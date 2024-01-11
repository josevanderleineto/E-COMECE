import Menu from "../../Menu/Menu";
import { Link } from 'react-router-dom';
import '../Login/login.css'
import Register from "../Register/Register";
import Footer from "../../Footer/Footer";

const Login = () => {
    return (
        <div className="container">
            <Menu />
            <div id="form-login">
            <h1>Login</h1>
                <form action="" className="form-login">
                    <input type="text" id="usename" placeholder="Usename"/>
                    <input type="text" id="useneme" placeholder="Password"/>
                </form>
                <button className="singin">Sing In</button>
                <button className="singin"><Link to="/register"><img src={Register} alt="" />Register</Link>
</button>


            </div>
            <Footer />
        </div>
    )
}

export default Login;
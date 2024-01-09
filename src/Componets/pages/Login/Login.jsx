import Menu from "../../Menu/Menu";
import '../Login/login.css'

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

            </div>
        </div>
    )
}

export default Login;
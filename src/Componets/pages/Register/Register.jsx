import Footer from "../../Footer/Footer";
import Menu from "../../Menu/Menu";
import '../Login/login.css'

const Register = () => {
    return (
        <div className="container">
            <Menu />
            <div id="form-login">
            <h1>Login</h1>
                <form action="" className="form-login">
                    <input type="text" id="fullname" placeholder="Full name"/>
                    <input type="text" id="usename" placeholder="Usename"/>
                    <input type="text" id="email" placeholder="Emaill"/>
                    <input type="text" id="useneme" placeholder="Password"/>
                </form>
                <button className="singin">Register</button>

            </div>
            <Footer />
        </div>
    )
}


export default Register;
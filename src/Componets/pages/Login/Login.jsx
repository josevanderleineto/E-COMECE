import React, { useState, } from 'react';
import Menu from "../../Menu/Menu";
import { Link } from 'react-router-dom';
import '../Login/login.css'
import Register from "../Register/Register";
import Footer from "../../Footer/Footer";

const Login = () => {
    const [usename, setUsename] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const validaForm = () => {
        if (usename === '') {
            setMsg('Prenhecha o nome')
            return false
        } 
        if (password === '') {
            setMsg('Digite sua senha')
            return false
        }

        setMsg('');
    }

    return (
        <div className="container">
            <Menu />
            <div id="form-login">
            <h1>Login</h1>
                <form action="" className="form-login">
                    <input type="text" id="usename" placeholder="Usename" value={usename} onChange={(e) => {
                        setUsename(e.target.value);
                    }}/>
                    <input type="text" id="useneme" placeholder="Password" value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }}/>
                </form>
                <button className="singin" onClick={() => {
                   validaForm()
                }}>Sing In</button>
                <button className="singin"><Link to="/register" ><img src={Register} alt="" />Register</Link>
</button>
             <span>
                {msg}
             </span>

            </div>
            <Footer />
        </div>
    )
}

export default Login;
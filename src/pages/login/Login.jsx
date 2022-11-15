import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import "./login.css";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, { username, password});
    };

    return (
        <div className="login">
            <div className='contentLogin'>
            <h1>Entrar</h1>
            <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
            <button onClick={handleClick}>Login</button>
            </div>

        </div>
    )
}

export default Login
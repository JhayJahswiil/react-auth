import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import man from "../man.jpg"
import "../Styles/Register.css"
import "../Styles/Login.css"

export default function Login({ onLogin }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError('Please fill in all fields');
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const user = existingUsers.find((user) => user.username === username);

        if (!user) {
            setError('User does not exsit');
            return;
        }

        if (user.password !== password) {
            setError('Password is incorrect')
            return;
        }
        onLogin(user);
        navigate("/");
    };

    return (
        <div className="register login">
            <form onSubmit={handleSubmit} className="reg-form">
                <div className="reg-inputs">
                    <h3>Login Below!!</h3>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p className="error">{error}</p>}
                    <button type="submit" className="btn">Login</button>
                </div>

                <div className="form-img">
                    <img src={man} />
                </div>
            </form>
        </div>
    )
}
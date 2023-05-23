import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

import woman from "../woman.jpg"
import dot from "../dot.jpg"
import "../Styles/Register.css"

export default function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError('Please fill in all fields');
            return
        }

        const existingUsers = JSON.parse(localStorage.getItem('users')) || []
        const user = existingUsers.find((user) => user.username === username);

        if (user) {
            setError('User already exists!!');
            return;
        }

        const newUser = {
            username, password,
        };

        localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]))
        navigate('/login');
    };

    return (
        <div className="register">
            <form onSubmit={handleSubmit} className="reg-form">
                <div className="reg-inputs">
                    <h3>Register Below!!</h3>
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
                    <button type="submit" className="btn">Register</button>
                </div>

                <div className="form-img">
                    <img src={woman} />
                </div>
            </form>
        </div>
    )
}
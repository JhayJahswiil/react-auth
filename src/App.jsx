import { React, useState, useEffect } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
// import CurrencySwitcher from "./Components/CurrencySwitcher";
// import Display from "./Components/Display";
import Home from "./Components/Home";
import Form from "./Components/Form";
import JokesApi from "./Components/JokeApi";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import ApiMeaning from "./Components/ApiMeaning";

import "./App.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);



  const handleLogin = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  const ProtectedRoute = ({ path, element }) => {
    return isLoggedIn ? element : <Navigate to="/login" />
  }


  return (
    <div>
      <nav className="nav-sec">
        <span>-EDSA-</span>
        <div className="hamburger">
          <FontAwesomeIcon icon={faBars} className="bars" />
        </div>
        <ul className="ul">
          <li><Link to="/">Home</Link></li>
          <li><Link to="form">Form</Link></li>
          <li><Link to="jokes-api">Jokes</Link></li>
          <li><Link to="register">Register</Link></li>
          <li><Link to="api-meaning">Api Meaning</Link></li>
          <li>{isLoggedIn ? (<button onClick={handleLogout}>Logout</button>) : <Link to="login">Login</Link>}</li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Form />} />
        <Route path="jokes-api" element={<JokesApi />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
        <Route path="api-meaning" element={<ProtectedRoute path="api-meaning" element={<ApiMeaning />} />} />
        <Route path="*" element={<h1>Not Found, go back home <Link to="/">Home</Link></h1>} />
      </Routes>
    </div>
  );
}

export default App;
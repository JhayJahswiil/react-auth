import { React, useState, useEffect, useRef } from "react";
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

// FONT AWESOME LINK
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function App() {
  // HAMBURGER MENU
  const [showLinks, setShowLinks] = useState(false)


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
        <Link to="/" className="logo"><span>⁙.JHAY.⁙</span></Link>
        <div className="hamburger" onClick={() => setShowLinks(!showLinks)}>
          <FontAwesomeIcon icon={faBars} />
          <FontAwesomeIcon icon={faXmark} className="cancel" />
        </div>
        <ul className="ul" id={showLinks ? "hidden" : ""}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="form">Form</Link></li>
          <li><Link to="jokes-api">Jokes</Link></li>
          <li><Link to="register">Register</Link></li>
          <li><Link to="api-meaning">Api Meaning</Link></li>
          <li>{isLoggedIn ? (<button onClick={handleLogout} className="nav-btn">Logout</button>) : <Link to="login">Login</Link>}</li>
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
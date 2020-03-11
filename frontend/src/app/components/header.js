import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

import logo from "../../images/logo.png";

const Header = () => {
  return (
    <header className="App-header">
      <a>
        <img src={logo}></img>
      </a>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Link to="/login">
        <button>LOGIN</button>
      </Link>
    </header>
  );
};

export default Header;

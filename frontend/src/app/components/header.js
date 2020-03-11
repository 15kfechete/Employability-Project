import React from "react";

import "./header.css";

import logo from "../../images/logo.png";

const Header = () => {
  return (
    <header className="App-header">
      <a>
        <img src={logo}></img>
      </a>
      <nav>
        <a>Nav1</a>
        <a>Nav2</a>
        <a>Nav3</a>
        <a>Nav4</a>
      </nav>
      <button>LOGIN</button>
    </header>
  );
};

export default Header;

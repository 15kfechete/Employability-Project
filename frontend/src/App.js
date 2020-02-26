import React from "react";
import "./App.css";
import background from "./images/background.jpg";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a>
          <img src={logo}></img>
        </a>
        <nav>
          <a>NAv1</a>
          <a>NAv2</a>
          <a>NAv3</a>
          <a>NAv4</a>
        </nav>
        <button>LOGIN</button>
      </header>
      <img src={background}></img>
    </div>
  );
}

export default App;

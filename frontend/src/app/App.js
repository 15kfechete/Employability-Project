import React from "react";
import "./App.css";
import background from "../images/background.jpg";
import logo from "../images/logo.png";

import LoginPage from "./pages/login/login";

function App() {
  return (
    <div className="App">
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
      <img className="banner-image" src={background}></img>
      <main>
        <LoginPage />
      </main>
      <footer>
        <img alt="paymentshield"></img>
        <div>Latest Blog Post</div>
        <div>product company stuff</div>
        <div>product company stuff</div>
      </footer>
    </div>
  );
}

export default App;

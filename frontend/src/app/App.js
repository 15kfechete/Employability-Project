import React from "react";
import "./App.css";
import background from "../images/background.jpg";
import logo from "../images/logo.png";
import logo2 from "../images/logo2.png";

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
        <div className="footerrLeft">
          <div className="footerLogo">
            <img src={logo2}></img>
          </div>
          <div className="footerText">
            <h4>Latest Blog Post</h4>
            <h3>Ready to get started?</h3>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </div>
          </div>
        </div>

        <div className="footerLeftCentre">
          <h4>PRODUCTS</h4>
          <ul>
            <li>Home Insurance</li>
            <li>Landlords Insurance</li>
            <li>Rent Protection</li>
            <li>Teneants Contents</li>
            <li>Teneants Liability</li>
            <li>Income Protection</li>
            <li>Mortgage Protection</li>
          </ul>
        </div>

        <div className="footerRightCentre">
          <h4>POLICY DOCUMENTS</h4>
          <ul>
            <li>Home Insurance</li>
            <li>Landlords Insurance</li>
            <li>Rent Protection</li>
            <li>Teneants Contents</li>
            <li>Teneants Liability</li>
            <li>Income Protection</li>
            <li>Mortgage Protection</li>
          </ul>
        </div>
        <div className="footerRight">
          <h4>SITEMAP</h4>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
            <li>Cookies</li>
            <li>Accessibility</li>
            <li>Fair Processing Notice</li>
            <li>Modern Slavery Act</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;

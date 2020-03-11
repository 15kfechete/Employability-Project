import React from "react";
import "./App.css";
import background from "../images/background.jpg";
import logo from "../images/logo.png";
import logo2 from "../images/logo2.png";

import LoginPage from "./pages/login/login";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <LoginPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";

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

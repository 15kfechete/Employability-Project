import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";

import "./App.css";

import LoginPage from "./pages/login/login";
import Header from "./components/header";
import Footer from "./components/footer";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">Register!</Route>
            <Route path="/profile">Profile :3</Route>
            <Route path="/">Home :D</Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

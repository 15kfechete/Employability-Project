import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import "./App.css";

import Header from "./components/header";
import Footer from "./components/footer";

import LoginPage from "./pages/login/login";
import ProfilePage from "./pages/profile/profile";

const client = new ApolloClient({
  uri: "http://localhost:3000/admin/api"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Switch>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/register">Register!</Route>
              <Route path="/profile">
                <ProfilePage />
              </Route>
              <Route path="/">Home :D</Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

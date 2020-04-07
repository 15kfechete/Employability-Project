import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import { Burger, Menu } from './components'

import Header from './components/header'
import Footer from './components/footer'

import LoginPage from './pages/login/login'
import ProfilePage from './pages/profile/profile'
import RegisterPage from './pages/register/register'

import { AppProvider } from './AppContext'

import './App.css'

const client = new ApolloClient({
  uri: 'http://localhost:3000/admin/api',
})

function App() {
  return (
    <AppProvider>
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <Header />
            <main>
              <Switch>
                <Route path="/login">
                  <LoginPage />
                </Route>
                <Route path="/register">
                  <RegisterPage />
                </Route>
                <Route path="/">
                  <ProfilePage />
                </Route>
              </Switch>
            </main>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    </AppProvider>
  )
}

export default App

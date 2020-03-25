import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AppContext } from '../AppContext'
import './header.css'

import logo from '../../images/logo.png'

const Header = () => {
  const [state, setState] = useContext(AppContext)

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
      {state.user ? (
        <Link to="/logout">
          <button>LOGOUT</button>
        </Link>
      ) : (
        <Link to="/login">
          <button>LOGIN</button>
        </Link>
      )}
    </header>
  )
}

export default Header

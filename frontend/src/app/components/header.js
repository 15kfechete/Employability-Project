import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Burger, Menu } from '../components'
import { AppContext } from '../AppContext'

import './header.css'
import logo from '../../images/logo.png'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="App-header">
      <a>
        <img src={logo}></img>
      </a>
      <nav>
        <Menu open={open} setOpen={setOpen} />
        <Burger open={open} setOpen={setOpen} />
      </nav>
    </header>
  )
}

export default Header

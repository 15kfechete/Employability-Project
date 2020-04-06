import React, { useContext, useState } from 'react'
import { bool } from 'prop-types'
import { Link } from 'react-router-dom'

import { AppContext } from '../../AppContext'

import { StyledMenu } from './Menu.styled'

const Menu = ({ open, setOpen }) => {
  const [state, setState] = useContext(AppContext)

  return (
    <StyledMenu open={open}>
      {state.user ? (
        <>
          <Link to="/profile" onClick={() => setOpen(false)}>
            View profile
          </Link>
          <Link to="/logout" onClick={() => setOpen(false)}>
            LOGOUT
          </Link>
        </>
      ) : (
        <Link to="/login" onClick={() => setOpen(false)}>
          LOGIN
        </Link>
      )}
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu

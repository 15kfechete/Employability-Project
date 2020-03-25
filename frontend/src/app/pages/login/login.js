import React, { useContext, useState } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Redirect } from 'react-router-dom'

import { AppContext } from '../../AppContext'
import './login.css'
import background from '../../../images/background.jpg'

const GET_USER_QUERY = gql`
  query getUser($email: String!) {
    allUsers(where: { email: $email }) {
      firstName
      lastName
      claims {
        id
        documents {
          file {
            publicUrl
          }
          name
        }
        description
      }
    }
  }
`

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [state, setState] = useContext(AppContext)

  const [loadUser, { called, loading, data }] = useLazyQuery(GET_USER_QUERY, {
    variables: { email: email },
  })

  const handleSubmit = event => {
    event.preventDefault()
    loadUser()
  }

  if (called) {
    if (loading) {
      return <p>Loading...</p>
    }
    setState(state => ({
      ...state,
      user: data.allUsers[0],
    }))
    console.log('Setting state!')
    return <Redirect to="/profile" />
  }

  if (!called) {
    return (
      <>
        <img className="banner-image" src={background}></img>
        <form className="contentBlock" onSubmit={handleSubmit}>
          <h2>LOGIN TO YOUR ONLINE ACCOUNT</h2>
          <div className="username">
            <label>Email:</label>
            <input
              type="text"
              onChange={e => setEmail(e.target.value)}
              value={email}
            ></input>
          </div>
          <div className="password">
            <label>Password:</label>
            <input
              type="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            ></input>
          </div>
          <div className="buttons">
            <button type="submit">LOGIN</button>
            <button type="submit" disabled>
              Not Registered?
            </button>
          </div>
        </form>
      </>
    )
  }
}

export default LoginPage

/*
<a
style={{
  backgroundColor: 'black',
  color: 'white',
          textDecoration: 'none',
          padding: '4px 6px',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif',
          fontSize: '12px',
          fontWeight: 'bold',
          lineHeight: 1.2,
          display: 'inline-block',
          borderRadius: '3px',
        }}
        href="https://unsplash.com/@helloquence?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
        target="_blank"
        rel="noopener noreferrer"
        title="Download free do whatever you want high-resolution photos from Helloquence"
      >
        <span style={{ display: 'inline-block', padding: '2px 3px' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: '12px',
              width: 'auto',
              position: 'relative',
              verticalAlign: 'middle',
              top: '-2px',
              fill: 'white',
            }}
            viewBox="0 0 32 32"
          >
            <title>unsplash-logo</title>
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
          </svg>
        </span>
        <span style={{ display: 'inline-block', padding: '2px 3px' }}>
          Helloquence
        </span>
      </a>

*/

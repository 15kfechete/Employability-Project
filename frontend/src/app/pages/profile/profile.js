import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'

import { AppContext } from '../../AppContext'
import './profile.css'

function ProfilePage() {
  const [state, setState] = useContext(AppContext)

  console.log(state)

  if (!state.user) {
    return <Redirect to="/login" />
  }

  const { firstName, lastName, claims } = state.user

  return (
    <>
      <h2>
        Hello, {firstName} {lastName}
      </h2>
      <section>
        <h3>Here are your claims:</h3>
        {claims.map(claim => (
          <div key={claim.id}>{claim.description}</div>
        ))}
      </section>
    </>
  )
}

export default ProfilePage

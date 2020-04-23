import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'

import { AppContext } from '../../AppContext'
import './profile.css'

import documentImage from '../../../images/tempDocument.png'
import phoneImage from '../../../images/phone-number.png'

function ProfilePage() {
  const [state, setState] = useContext(AppContext)

  // let state = {
  //  user: {
  //    firstName: 'Test',
  //    lastName: 'User',
  //    claims: [
  //      { id: 1, description: 'testClaim' },
  //      { id: 2, description: 'testClaim2' },
  //    ],
  //  },
  //}

  console.log(state)

  if (!state.user) {
    return <Redirect to="/login" />
  }

  const { firstName, lastName, claims } = state.user

  return (
    <div className="profile-wrapper">
      <h2>
        Hello, {firstName} {lastName}
      </h2>
      <section>
        <h3>Here are your claims:</h3>
        <div className="claims">
          {claims.map((claim) => (
            <div className="claim">
              <h3 key={claim.id}>{claim.description}</h3>
              <a href={documentImage} download>
                <img
                  src={documentImage}
                  className="document-image"
                  alt="document"
                  download
                />
              </a>
            </div>
          ))}
          <div className="make-claim">
            <h3>Want to make a claim?</h3>
            <p>Or if you need help with anything else:</p>
            <a href="tel:0345 6011 050">
              <img
                alt="Call our customer services team on 0345 601 1050"
                src={phoneImage}
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProfilePage

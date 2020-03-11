import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import "./profile.css";

const GET_USER = gql`
  {
    User(where: { id: "5e5f8040edf45e20bd2f14fc" }) {
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
`;

function ProfilePage() {
  const { loading, error, data } = useQuery(GET_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data.User);

  const { firstName, lastName, claims } = data.User;

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
  );
}

export default ProfilePage;

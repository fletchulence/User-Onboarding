import React from 'react';

export default function User(props){
  const { user } = props

  return(
    <div>
      <h4> the League welcomes {user.firstName} {user.lastName} </h4>
      <p>You can contact them @ {user.email}</p>
      <p>{user.serviceTerms === true ? `this person has accepted` : 'this person has not accepted'}</p>


    </div>
  );
}
import './App.css';
import React, { useEffect, useState } from 'react';

import axios from 'axios';

import UserForm from './components/UserForm';
import User from './components/User'

const initialFormVals ={
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  serviceTerms: false,
}

function App() {
  const [ users, setUsers ] = useState([]);
  const [ formVals, setFormVals ] = useState(initialFormVals)

  // const getUsers = () => {
  //   axios.get(``)
  // } 
  console.log(users)

  const updateForm = (inputName, inputValue) =>{
    setFormVals({ ...formVals, [inputName]: inputValue })
  }
  
  const submitForm = () =>{
    const newUser={
      firstName: formVals.firstName.trim(),
      lastName: formVals.lastName.trim(),
      email: formVals.email.trim(),
      password: formVals.password.trim(),
      serviceTerms: formVals.serviceTerms //? is this correct?
    }
    // console.log(newUser)
    postNewUser(newUser)
  }

  const postNewUser = (newUser) =>{
    axios.post(`https://reqres.in/api/users`, newUser)
      .then( res=>{
        // console.log(res.data)
        setUsers([res.data, ...users])
      })
      .catch(err=>{
        console.error(err)
      })
      .finally(() => setFormVals(initialFormVals))
  }

  return (
    <div className="App">
      <h1>hello world</h1>

      <UserForm 
        formVals={formVals}
        updateForm={updateForm}
        submitForm={submitForm}
      />

      {
        users.map((user, index) => {
          return(
            <User key={user.createdAt} user={user}/>
          )
        })
      }

    </div> /* end of APP return */
  );
}

export default App;

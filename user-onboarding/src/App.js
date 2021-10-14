import './App.css';
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import * as yup from 'yup';
import schema from './validation/formSchema';

import UserForm from './components/UserForm';
import User from './components/User'

const initialFormVals ={
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  serviceTerms: false,
}

const initialFormErrors = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  serviceTerms: '',
}

const initialDisabled = true;

function App() {
  const [ users, setUsers ] = useState([]);
  const [ formVals, setFormVals ] = useState(initialFormVals);
  const [ formErrors, setFormErrors ] = useState(initialFormErrors);
  const [ disabled, setDisabled ] = useState(initialDisabled)

  // const getUsers = () => {
  //   axios.get(``)
  // } 
  console.log(users)

  
  const submitForm = () =>{
    const newUser = {
      firstName: formVals.firstName.trim(),
      lastName: formVals.lastName.trim(),
      email: formVals.email.trim(),
      password: formVals.password.trim(),
      serviceTerms: formVals.serviceTerms //? is this correct ?
    }
    postNewUser(newUser)
  }
  
  const postNewUser = (newUser) =>{
    axios.post(`https://reqres.in/api/users`, newUser)
    .then( res=>{
      setUsers([res.data, ...users])
    })
    .catch(err=>{
      console.error(err)
    })
    .finally(() => setFormVals(initialFormVals))
  }
  
  //! validate yo items
  const validate = (name, value) =>{
    yup.reach(schema, name).validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => {
      // console.log(err)
      setFormErrors({ ...formErrors, [name]: err.errors[0]})
    })
  }
  //! put validate into your change
  const updateForm = (inputName, inputValue) =>{
    validate(inputName, inputValue)
    setFormVals({ ...formVals, [inputName]: inputValue })
  }
  //! imma be disabled or disabled
  useEffect(() =>{
    schema.isValid(formVals)
      .then(valid =>{
        setDisabled(!valid)
      })
  }, [formVals])
  
  return (
    <div className="App">
      <h1>hello world</h1>

      <UserForm 
        formVals={formVals}
        updateForm={updateForm}
        submitForm={submitForm}
        formErrors={formErrors}
        disabled={disabled}
      />

      {
        users.map(user => {
          return(
            <User key={user.createdAt} user={user}/>
          )
        })
      }

    </div> /* end of APP return */
  );
}

export default App;

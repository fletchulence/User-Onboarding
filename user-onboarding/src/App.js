import './App.css';
import React, { useEffect, useState } from 'react';

import UserForm from './components/UserForm';

const initialFormVals ={
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  serviceTerms: false,
}

function App() {

  const [ user, setUser ] = useState([]);
  const [ formVals, setFormVals ] = useState(initialFormVals)

  const updateForm = (inputName, inputValue) =>{
    setFormVals({ ...formVals, [inputName]: inputValue })
  }
  
  const submitForm = () =>{

  }

  return (
    <div className="App">
      <h1>hello world</h1>

      <UserForm 
        formVals={formVals}
        updateForm={updateForm}
        submitForm={submitForm}

      />
    </div>
  );
}

export default App;

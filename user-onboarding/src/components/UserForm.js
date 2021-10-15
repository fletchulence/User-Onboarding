import React from "react";

import { StyledContainer, StyledOverall } from "../Styles/styling";

export default function UserForm(props){
  const { formVals, submitForm, updateForm, formErrors, disabled } = props;
  
  const onChange = (evt) =>{
    const {name, value, checked, type} = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    
    updateForm(name, valueToUse)
  }

  const onSubmit = (evt) =>{
    evt.preventDefault()
    submitForm()
  } 
  
  return(
    <StyledOverall> 
    <form className="container form" onSubmit={onSubmit}>
      <h2> Please Sign up to join our club </h2>

      

      <div className='form-inputs'>
        <h3> Let us know more about you ! </h3>

        <StyledContainer> 
        <div className='container name'> 
        <h5>Please provide your name below</h5>
          <label> First:
            <input
              type="text"
              name='firstName'
              value={formVals.firstName}
              onChange={onChange}
              />
          </label>
          <label> Last:
            <input
              type="text"
              name='lastName'
              value={formVals.lastName}
              onChange={onChange}
              />
          </label>
        </div> {/* end of name div */}
        </StyledContainer>
        <div className='container login'>
          <p>We would like to start an account with you
          <br/>can you please fill out a name and email for us to keep in touch?</p>
          <StyledContainer>
            <div className='login'>
              <h5>Provide an email and password:</h5>
              <div className='email'>
                <label> Email: 
                  <input
                    type='email'
                    name='email'
                    value={formVals.email}
                    onChange={onChange}
                    />
                </label>
              </div>
              <div className='password'>
                <label> Password: 
                  <input
                    type='password'
                    name='password'
                    value={formVals.password}
                    onChange={onChange}
                    />
                </label>
              </div>
            </div>
          </StyledContainer>
        </div>

        
        <div className='serviceTerms'>
          <h5> please agree to the terms of use:</h5>
          <label> Terms of Service: 
            <input
              type='checkbox' 
              name='serviceTerms'
              onChange={onChange}
              checked={formVals.serviceTerms}
              />
          </label>
        </div>
        {/* render your errors */}
        <div className='errors'>
          <div>{formErrors.firstName}</div>
          <div>{formErrors.lastName}</div>
          <div>{formErrors.email}</div>
          <div>{formErrors.password}</div>
          <div>{formErrors.serviceTerms}</div>
        </div>
        <button id='submitBtn' disabled={disabled}> SUBMIT </button>
      </div>{/* end of form-inputs div */}
    </form>
    </StyledOverall>
  )
  
  
}
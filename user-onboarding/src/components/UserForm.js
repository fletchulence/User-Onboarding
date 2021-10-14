import React from "react";

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
    <form className="container form" onSubmit={onSubmit}>
      <h2> add your friend! </h2>

      {/* render your errors */}
      <div className='errors'>
        <div>{formErrors.firstName}</div>
        <div>{formErrors.lastName}</div>
        <div>{formErrors.email}</div>
        <div>{formErrors.password}</div>
        <div>{formErrors.serviceTerms}</div>
      </div>

      <div className='form-inputs'>
        <h4> title of these inputs </h4>
        <div className='name'> 
        <h3>Name</h3>
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
        <div className='email'>
          <label> Email: 
            <input
              type='text' //TODO: change back to email
              name='email'
              value={formVals.email}
              onChange={onChange}
              />
          </label>
        </div>
        <div className='password'>
          <label> Password: 
            <input
              type='text' //TODO: change back to password
              name='password'
              value={formVals.password}
              onChange={onChange}
              />
          </label>
        </div>
        <div className='serviceTerms'>
          <label> Terms of Service: 
            <input
              type='checkbox' //TODO: change back to password
              name='serviceTerms'
              onChange={onChange}
              checked={formVals.serviceTerms}
              />
          </label>
        </div>
        <button disabled={disabled}> SUBMIT </button>
      </div>{/* end of form-inputs div */}
    </form>
  )
  
  
}
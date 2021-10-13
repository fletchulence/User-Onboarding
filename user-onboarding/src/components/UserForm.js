import React from "react";

export default function UserForm(props){
  const { formVals, submitForm, updateForm } = props;
  
  const onChange = (evt) =>{
    const {name, value} = evt.target;


    updateForm(name, value)
  }

  const onSubmit = (evt) =>{
    evt.preventDefault()
    submitForm()
  } 

  return(
    <form className="container form" onSubmit={onSubmit}>
      <h2> add your friend! </h2>

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
              type='password' //TODO: change back to email
              name='password'
              value={formVals.password}
              onChange={onChange}
              />
          </label>
        </div>
      </div>{/* end of form-inputs div */}
    </form>
  )


}
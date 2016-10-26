import React from 'react'

import RegisterForm from './RegisterFormComponent'

const RegisterPageComponent = (props) => (
  <div>
    <h1>sign up</h1>
    <RegisterForm {...props}/>
  </div>
)

export default RegisterPageComponent

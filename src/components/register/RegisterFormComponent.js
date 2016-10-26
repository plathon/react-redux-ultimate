import React, { Component } from 'react'

const RegisterFormComponent = ({ signupUser }) => {
  return (
    <form>
      <div>
        <label>full name</label>
        <input name="email" type="text" placeholder="type your full name"/>
      </div>

      <div>
        <label>email address</label>
        <input name="email" type="text" placeholder="type your email address"/>
      </div>

      <div>
        <label>password</label>
        <input name="password" type="password" placeholder="type your password"/>
      </div>
      
      <div>
        <button type="button" onClick={signupUser}>Enter</button>
      </div>
    </form>
  )
}

export default RegisterFormComponent

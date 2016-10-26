import React, { Component } from 'react'

const AuthenticationFormComponent = (props) => {
  return (
    <form>
      <input name="email" type="text" placeholder="type your email address"/>
      <input name="password" type="password" placeholder="type your password"/>
      <button type="submit">Enter</button>
    </form>
  )
}

export default AuthenticationFormComponent

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signupUser } from '../../actions/RegisterActions'
import RegisterPage from '../../components/register/RegisterPageComponent'

const RegisterContainer = (props) => (
  <RegisterPage signupUser={props.signupUser}/>
)

const mapDispatch = dispatch => {
  return bindActionCreators({ signupUser }, dispatch)
}

export default connect(null, mapDispatch)(RegisterContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'

import AuthenticationPage from '../../components/authentication/AuthenticationPageComponent'

class AuthenticationContainer extends Component {
  render () {
    return <AuthenticationPage />
  }
}

export default connect(null, null)(AuthenticationContainer)

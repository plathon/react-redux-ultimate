import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { signupUser } from '../../actions/UserActions'

class UserContainer extends Component {
	render () {
		console.log(this.props.state)
		return (
			<div>
				<h1>user container.</h1>
				<button onClick={this.props.signupUser}>dispatch action</button>
			</div>
		)
	}
}

function mapStateToProps (state) {
	return { state: state }
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({
		signupUser
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)

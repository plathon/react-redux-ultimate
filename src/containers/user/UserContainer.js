import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { exampleAction } from '../../actions/UserActions'

class UserContainer extends Component {
	render () {
		console.log(this.props.state)
		return (
			<div>
				<h1>user container.</h1>
				<button onClick={this.props.exampleAction}>dispatch example action</button>
			</div>
		)
	}
}

function mapStateToProps (state) {
	return { state: state }
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({
		exampleAction
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware, routerActions } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form';
import { UserAuthWrapper } from 'redux-auth-wrapper'
import * as reducers from './reducers'

import App from './App';
import UserContainer from './containers/user/UserContainer'
import RegisterContainer from './containers/register/RegisterContainer'
import AuthenticationContainer from './containers/authentication/AuthenticationContainer'
const reducer = combineReducers({
	...reducers,
	routing: routerReducer,
	form: formReducer
})

const routingMiddleware = routerMiddleware(hashHistory)

const enhancer = compose(
	applyMiddleware(routingMiddleware),
 	applyMiddleware(thunk),
 	window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store   = createStore(reducer, enhancer)
const history = syncHistoryWithStore(hashHistory, store)

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user.data,
  redirectAction: routerActions.replace,
  failureRedirectPath: 'signin',
  wrapperDisplayName: 'UserIsAuthenticated'
})

render(
	<div>
		<Provider store={store}>
		    <Router history={history}>
			    <Route path="/" component={UserContainer}/>
					<Route path="/signup" component={RegisterContainer}/>
					<Route path="/signin" component={AuthenticationContainer}/>
		    </Router>
		</Provider>
	</div>,
	document.getElementById('root')
)

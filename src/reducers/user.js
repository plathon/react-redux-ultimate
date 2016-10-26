import { AUTHENTICATION_START,
         AUTHENTICATION_SUCCESS,
         AUTHENTICATION_FAIL } from '../constants/AuthenticationActionTypes'

import { REGISTER_START,
				 REGISTER_SUCCESS,
				 REGISTER_FAIL } from '../constants/RegisterActionTypes'

const initialState = {
  data: {},
  user_signup_loading: false,
	user_signin_loading: false
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case REGISTER_START:
      return { ...state, user_signup_loading: true }

    case REGISTER_SUCCESS:
      return { ...state, user_signup_loading: false, data: payload }

    case REGISTER_FAIL:
      return { ...state, user_signup_loading: false }

		case AUTHENTICATION_START:
			return { ...state, user_signin_loading: true }

		case AUTHENTICATION_SUCCESS:
			return { ...state, user_signin_loading: false, data: payload }

		case AUTHENTICATION_FAIL :
			return { ...state, user_signin_loading: false }

  	default:
  		return state
	}
}

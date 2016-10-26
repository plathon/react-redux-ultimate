import { AUTHENTICATION_START,
         AUTHENTICATION_SUCCESS,
         AUTHENTICATION_FAIL } from '../constants/AuthenticationActionTypes'

export function signinUser (user) {
	return dispatch => {
    console.log(user)
	}
}

import { USER_ACTION_EXAMPLE } from '../constants/UserActionTypes'

export function exampleAction () {
	return (dispatch) => {
		dispatch({ type: USER_ACTION_EXAMPLE, payload: { data: 'empty' } })
	}
}
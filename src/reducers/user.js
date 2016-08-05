import { USER_ACTION_EXAMPLE } from '../constants/UserActionTypes'

const initialState = {
  data: {}
}

export default (state = initialState, { type, payload }) => {

	switch (type) {
		case USER_ACTION_EXAMPLE:
      		return { ...state, data: payload.data }
      	default:
      		return state
	}

}
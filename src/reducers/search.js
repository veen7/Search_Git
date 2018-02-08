import { USER_SEARCH_REQUEST, USER_SEARCH_SUCCESS, USER_SEARCH_ERROR, SERVER_ERROR } from './../actions/search';
import {INIT, LOADING, SUCCESS, ERROR} from './../utils/asyncStatusHelper';

export default function search (state = {
	asyncStatus: INIT,
	search : null,
	error: null
}, action = null) {
	switch (action.type) {
		case USER_SEARCH_REQUEST:
			return Object.assign({}, state, {asyncStatus: LOADING});
		case USER_SEARCH_SUCCESS:
			return Object.assign({}, state, {
				asyncStatus: SUCCESS,
				search : action.data,
				error: null,
			});
		case USER_SEARCH_ERROR:
			return Object.assign({}, state, {
				asyncStatus: ERROR,
				error: 'No Such User',
				search : null
			});
		case SERVER_ERROR:
			return Object.assign({}, state, {
				asyncStatus: ERROR,
				error: 'Server Error',
				search : null
			});
		default:
			return state;
	}
}
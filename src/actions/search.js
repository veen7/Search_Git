import ApiCaller from './../utils/apiCaller';

// search actions
export const USER_SEARCH_REQUEST = 'USER_SEARCH_REQUEST';
export const USER_SEARCH_SUCCESS = 'USER_SEARCH_SUCCESS';
export const USER_SEARCH_ERROR = 'USER_SEARCH_ERROR';
export const SERVER_ERROR = 'SERVER_ERROR';


// search Actions
export function searchRequest () {
	return {type: USER_SEARCH_REQUEST};
}

export function searchRequestSuccess (data) {
	return {type: USER_SEARCH_SUCCESS, data};
}

export function searchRequestError (error) {
	return {type: USER_SEARCH_ERROR, error};
}

export function serverError (error) {
	return {type: SERVER_ERROR, error};
}

export function makeSearchRequest (_body) {
	return dispatch => {
		dispatch(searchRequest());

		return ApiCaller.get('https://api.github.com/search/users?q='+ _body.username).then(json => {
			if(json === 404){
				return dispatch(searchRequestError(json));
			}else if (json === 500){
				return dispatch(serverError(json));
			}else {
				return dispatch(searchRequestSuccess(json));
			}
		})
	};
}

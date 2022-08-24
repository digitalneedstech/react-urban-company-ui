import Cookies from "universal-cookie";

let cookies = new Cookies(window.document.cookie);

var initialState = (window.initialState && window.initialState.user) || {
	user: {
		isLoggedIn: cookies.get("userData") ? true : false,
		error: null,
        userData: cookies.get("userData") ? cookies.get("userData") : null
	},
	guest: {
		id: cookies.get("guestId") ? cookies.get("guestId") : null,
		error: null
	},
	redirectUrl: null
}

export default function user(state = initialState, action = {}) {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			return {
				...state,
				user: {
					userData: action.payload,
					error: null,
					isLoggedIn: true,     		
				}
			}
		case 'LOGIN_FAILED':
			return {
				...state,
				user: {
					...action.payload,
					isLoggedIn: false,
                    userData: null
				}
			}
		case 'REDIRECT_URL':
			return {
				...state,
				redirectUrl: action.payload
			}
		case 'GUEST_LOGIN_SUCCESS':
			return {
				...state,
				guest: {
					id: action.payload,
					error: null,     		
				}
			}
		case 'GUEST_LOGIN_FAILED':
			return {
				...state,
				guest: {
					...action.payload,
					id: null
				}
			}
		case 'LOGOUT_SUCCESS':
			return {
				...state,
				user: {
					isLoggedIn: false,
					error: null,
                    userData: null
				}
			}
		default:
			return {
				...state
			}
	}
}

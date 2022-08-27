import Cookies from "universal-cookie";

let cookies = new Cookies(window.document.cookie);

var initialState = (window.initialState && window.initialState.user) || {
  user: {
    isLoggedIn: cookies.get("userData") ? true : false,
    error: null,
    userData: cookies.get("userData") ? cookies.get("userData") : null,
  },
  profileData: {},
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: {
          userData: action.payload,
          error: null,
          isLoggedIn: true,
        },
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        user: {
          ...action.payload,
          isLoggedIn: false,
          userData: null,
        },
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        user: {
          isLoggedIn: false,
          error: null,
          userData: null,
        },
      };
    case "USER_DATA_UPDATE":
      return {
        ...state,
        user: {
          ...state.user,
          userData: {
            ...state.user.userData,
            ...action.payload,
          },
        },
      };
    case "PROFILE_DATA_UPDATE":
      return {
        ...state,
        profileData: {
          ...state.profileData,
          ...action.payload,
        },
      };
    default:
      return {
        ...state,
      };
  }
}

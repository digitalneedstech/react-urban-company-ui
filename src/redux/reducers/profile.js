import Cookies from "universal-cookie";

let cookies = new Cookies(window.document.cookie);

var initialState = (window.initialState && window.initialState.user) || {
  user: {
    isLoggedIn: cookies.get("userData") ? true : false,
    error: null,
    userData: cookies.get("userData") ? cookies.get("userData") : null,
  },
};

export default function profile(state = initialState, action = {}) {
  switch (action.type) {
    case "ADD_MEMBER_1":
      return {
        ...state,
        user: {
            ...action.payload,
          error: null,
          isLoggedIn: true,
        },
      };
    case "ADD_MEMBER_FINAL":
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
    default:
      return {
        ...state,
      };
  }
}

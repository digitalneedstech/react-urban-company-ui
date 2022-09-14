import Cookies from "universal-cookie";
import { fetchData } from "../helpers";
import { logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase";
import store from "..";

export const fetchUserInfo = (user) => async (dispatch) => {
  try {
    let response = await fetchData(`/users/${user?.uid}`, "GET");
    // const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    // const doc = await getDocs(q);
    const data = response?.metadata;
    const cookies = new Cookies(window.document.cookie);
    if (data) {
      cookies.set("userData", data);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: data,
      });
      return true;
    }
  } catch (err) {
    dispatch({
      type: "LOGIN_FAILED",
      payload: {
        error: err.message || "An error has occured.",
      },
    });
    return false;
  }
};

export const userDataUpdate = (data, saveOnCookie) => {
  const cookies = new Cookies(window.document.cookie);
  store.dispatch({
    type: "USER_DATA_UPDATE",
    payload: data,
  });
  if (saveOnCookie)
    cookies.set("userData", store.getState().user.user.userData);
};

export const profileDataUpdate = (data) => {
  store.dispatch({
    type: "PROFILE_DATA_UPDATE",
    payload: data,
  });
};

export const addNewMember = (data) => {
  store.dispatch({
    type: "ADD_NEW_MEMBER",
    payload: data,
  });
};

export const onLogout = () => {
  let cookies = new Cookies(window.document.cookie);
  logout();
  cookies.remove("userData");
  return {
    type: "LOGOUT_SUCCESS",
    payload: {},
  };
};

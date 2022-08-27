import Cookies from "universal-cookie";
import { query, collection, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase";
import store from "..";

export const fetchUserInfo = (user) => async (dispatch) => {
  try {
    const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    const doc = await getDocs(q);
    const data = doc.docs[0].data();
    const cookies = new Cookies(window.document.cookie);

    cookies.set("userData", data);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data,
    });
    return true;
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

export const userDataUpdate = (data) => {
  store.dispatch({
    type: "USER_DATA_UPDATE",
    payload: data,
  });
};

export const profileDataUpdate = (data) => {
  store.dispatch({
    type: "PROFILE_DATA_UPDATE",
    payload: data,
  });
};

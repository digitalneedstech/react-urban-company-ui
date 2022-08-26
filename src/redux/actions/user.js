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

export const uploadUserImage = (imgUrl) => {
  store.dispatch({
    type: "IMAGE_UPLOAD_SUCCESS",
    payload: imgUrl,
  });
};

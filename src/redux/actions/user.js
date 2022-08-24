import Cookies from "universal-cookie";
import { query, collection, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase";

export const userInfo = (user) => async (dispatch) => {
  try {
    const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    const doc = await getDocs(q);
    const data = doc.docs[0].data();
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

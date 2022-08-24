import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { userInfo } from "./redux/actions/user";
import { auth } from "./firebase";
import RoutesComp from "./routes";

function App() {
  const userData = useSelector((state) => state.user);
  const [user, loading, error] = useAuthState(auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userData.user.isLoggedIn && user) {
      dispatch(userInfo(user));
    }
  }, [user, loading]);

  return (
    <>
      <RoutesComp />
    </>
  );
}

export default App;

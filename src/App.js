import React, { useEffect } from "react";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { fetchUserInfo } from "./redux/actions/user";
import { auth } from "./firebase";
import RoutesComp from "./routes";

function App() {
  const userData = useSelector((state) => state.user);
  const [user, loading, error] = useAuthState(auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userData.user.isLoggedIn && !_.isEmpty(user)) {
      dispatch(fetchUserInfo(user));
    }
  }, [user, loading]);
  console.log(userData);
  return (
    <>
      <RoutesComp />
    </>
  );
}

export default App;

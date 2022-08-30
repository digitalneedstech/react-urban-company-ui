import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import Header from "../../Layout/loginHeader";
import Signupform from "../../components/signupForm";

function Clientsignupform() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/client-upload-image");
  }, [user, loading]);

  return (
    <>
      <Header />

      <section className="client-section  position-relative">
        <div className="login-img d-none d-md-block">
          <div className="container-fluid h-100">
            <div className="row h-100">
              <div className="col-md-5 order-sm-2 pr-0 h-100">
                <img
                  src="images/client-selector-right.svg"
                  className="loginbg"
                  alt=""
                />
              </div>
              <div className="col-md-7 order-sm-1"></div>
            </div>
          </div>
        </div>

        <div className="container min-heighvh position-relative">
          <div className="row pt-4">
            <div className="col-md-12 mt-2 pt-5 mt-sm-5 position-inherit">
              <h1>signup as a client</h1>
              <h2>
                with <span>protocall</span>
              </h2>
              <Signupform type={"client"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Clientsignupform;

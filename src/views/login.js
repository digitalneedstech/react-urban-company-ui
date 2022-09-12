import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import Header from "../Layout/loginHeader";
import { validateemail } from "../utils/validation";

function Login() {
  const userState = useSelector((state) => state.user);
  const { userData } = userState.user;
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const onEmailChange = () => {
    let value = inputEmail.current.value;
    if (validateemail(value)) {
      setEmail(value);
      setFormError("");
    } else {
      setFormError("Please enter a valid email");
    }
  };

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      if (userData?.type == "client") {
        navigate("/client-selector-hire-browse");
      } else {
        navigate("/listed-services");
      }
    }
  }, [user, loading]);

  return (
    <>
      <Header />
      <section className="login-section position-relative">
        <div className="login-img d-none d-md-block">
          <div className="container-fluid h-100">
            <div className="row h-100">
              <div className="col-md-5 order-sm-2 pr-0 h-100">
                <img
                  src="images/login-rightimg.png"
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
            <div className="col-md-6 mt-2 pt-5 mt-sm-5 position-inherit">
              <h1>login</h1>
              <h2>
                to <span>protocall</span>
              </h2>

              <div className="row mt-1 mt-sm-4">
                <div className="col-md-9 mt-3">
                  <div className="form-group position-relative">
                    <img
                      src="images/login-sms.svg"
                      className="login-smsimg"
                      alt=""
                    />
                    <input
                      ref={inputEmail}
                      type="email"
                      className="form-control login-input"
                      placeholder="Email address"
                      onChange={onEmailChange}
                    />
                  </div>
                  {!_.isEmpty(formError) && (
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      {formError}
                    </div>
                  )}
                  {_.isEmpty(formError) && !_.isEmpty(email) && (
                    <div className="form-group position-relative">
                      <img
                        src="images/password-lock.svg"
                        className="login-smsimg"
                        alt=""
                      />
                      <input
                        ref={inputPassword}
                        type="password"
                        className="form-control login-input"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <img
                        src="images/password-eye.svg"
                        className="paswd-eyes"
                        alt=""
                      />
                    </div>
                  )}

                  <div className="row mt-3 mt-sm-4">
                    <div className="col-md-7 col-7">
                      <button
                        type="button"
                        className="btn btn-login"
                        disabled={
                          !_.isEmpty(formError) ||
                          _.isEmpty(email) ||
                          _.isEmpty(password)
                        }
                        onClick={() =>
                          logInWithEmailAndPassword(email, password)
                        }
                      >
                        CONTINUE WITH EMAIL
                      </button>
                    </div>
                    <div className="col-md-5 text-right col-5">
                      <p>
                        <a href="#">Forgot Password ?</a>
                      </p>
                    </div>
                  </div>

                  <div className="row mt-2 align-items-center">
                    <div className="col-md-1 col-2 pr-0">
                      <h6 className="hori-line">or</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-3 mt-sm-4">
                <div className="col-md-6">
                  <button
                    type="button"
                    className="btn btn-light continue-btn mb-3"
                    onClick={signInWithGoogle}
                  >
                    <img
                      src="images/Google-loginlogo.svg"
                      height="22px"
                      className="mr-2"
                      alt=""
                    />{" "}
                    Continue with Google
                  </button>
                </div>
                <div className="col-md-6 pl-3 pl-sm-0">
                  <a href="">
                    <button
                      type="button"
                      className="btn btn-light continue-btn"
                    >
                      <img
                        src="images/Facebook-loginlogo.svg"
                        height="22px"
                        className="mr-2"
                        alt=""
                      />
                      Continue with Facebook
                    </button>
                  </a>
                </div>
              </div>

              <h3>© 2022. Protocall Services. All rights Reserved</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;

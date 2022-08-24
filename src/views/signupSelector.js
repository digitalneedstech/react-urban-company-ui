import React from "react";
import Header from "../Layout/loginHeader";
import { Link } from "react-router-dom";

function Signup() {
  const [registrationType, setRegistrationType] = React.useState("0"); // 0 means - Company

  function updateSelectedVal(event) {
    setRegistrationType(event.target.value);
    console.log(event.target.value);
  }

  return (
    <>
      <Header />

      <section className="client-section  position-relative">
        <div className="client-wave-left">
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
                <h1>signup</h1>
                <h2>
                  with <span>protocall as a</span>
                </h2>

                <div className="row mt-4 mt-sm-5">
                  <div className="col-md-4 mb-3">
                    <div className="client-radio">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-check mt-3 desgin-radio">
                            <input
                              className="with-gap"
                              value="0"
                              checked={registrationType === "0"}
                              type="radio"
                              name="client-selector"
                              id="client1"
                              onChange={updateSelectedVal}
                            />
                            <label htmlFor="client1"></label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-5 col-6">
                          <p>Client</p>
                          <h6>I want to post a new project</h6>
                        </div>
                        <div className="col-md-7 col-6">
                          <img src="images/teams-manright.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="client-radio">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-check desgin-radio mt-3">
                            <input
                              className="with-gap"
                              value="1"
                              checked={registrationType === "1"}
                              type="radio"
                              name="client-selector"
                              id="client2"
                              onChange={updateSelectedVal}
                            />
                            <label htmlFor="client2"></label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-5 col-6">
                          <p>Service provider</p>
                          <h6>I want to bid for a project</h6>
                        </div>
                        <div className="col-md-7 col-6">
                          <img src="images/teams-womenleft.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-3 mt-sm-2">
                  <div className="col-md-12">
                    {registrationType == 0 ? (
                      <Link to="/client-signup" className="btn btn-login">
                        CONTINUE AS A CLIENT
                      </Link>
                    ) : (
                      <Link to="/service-signup" className="btn btn-login">
                        CONTINUE AS A SERVICE PROVIDER
                      </Link>
                    )}
                  </div>
                </div>

                <h3>© 2022. Protocall Services. All rights Reserved</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;

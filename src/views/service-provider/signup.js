import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import Header from "../../Layout/loginHeader";
import Signupform from "../../components/signupForm";

function ServiceproviderSignupform() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [registrationType, setRegistrationType] = React.useState("company");

  function updateSelectedVal(event) {
    setRegistrationType(event.target.value);
    console.log(event.target.value);
  }

  useEffect(() => {
    if (loading) return;
    if (user) {
      if (registrationType === "company") navigate("/company-upload-logo");
      else if (registrationType === "individual")
        navigate("/individual-upload-image");
    }
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
              <h1>signup as a service provider</h1>
              <h2>
                with <span>protocall</span>
              </h2>

              <div className="row mt-4 mt-sm-4">
                <div className="col-md-4">
                  <div className="form-group radio-input desgin-radio">
                    <input
                      className="with-gap"
                      value="company"
                      checked={registrationType === "company"}
                      type="radio"
                      name="client-selector"
                      onChange={updateSelectedVal}
                    />
                    <label htmlFor="client1" className="radio-label">
                      Register as a company
                    </label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group radio-input desgin-radio">
                    <input
                      className="with-gap"
                      value="individual"
                      checked={registrationType === "individual"}
                      type="radio"
                      name="client-selector"
                      onChange={updateSelectedVal}
                    />
                    <label htmlFor="client2" className="radio-label">
                      Register as an individual
                    </label>
                  </div>
                </div>
              </div>
              <Signupform type={registrationType} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceproviderSignupform;

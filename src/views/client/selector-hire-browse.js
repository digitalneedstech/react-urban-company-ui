import React from "react";
import Header from "../../Layout/loggedInHeader";
import { Link } from "react-router-dom";

function Selectorhire() {
  const [selectorType, setSelectorType] = React.useState("0"); // 0 means - Hire

  function updateSelectedVal(event) {
    setSelectorType(event.target.value);
    console.log(event.target.value);
  }

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
              <h1>howdy, Vinod !</h1>
              <h2>
                welcome to <span>protocall</span>
              </h2>

              <h4>what do you want to do today ?</h4>

              <div className="row mt-2 mt-sm-3">
                <div className="col-md-4 mb-3">
                  <div className="client-radio">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-check mt-3 desgin-radio">
                          <input
                            className="with-gap"
                            value="0"
                            checked={selectorType === "0"}
                            type="radio"
                            name="client-selector"
                            id="client1"
                            onChange={updateSelectedVal}
                          />
                          <label for="client1"></label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5 col-6">
                        <p>Hire</p>
                        <h6>
                          I want to post a project and hire a service provider
                        </h6>
                      </div>
                      <div className="col-md-7 col-6">
                        <img src="images/Hire-left.png" alt="" />
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
                            checked={selectorType === "1"}
                            type="radio"
                            name="client-selector"
                            id="client2"
                            onChange={updateSelectedVal}
                          />
                          <label for="client2"></label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5 col-6">
                        <p>Browse</p>
                        <h6>I just want to browse and buy services</h6>
                      </div>
                      <div className="col-md-7 col-6">
                        <img src="images/Hire-right.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-3 mt-sm-2 mb-4">
                <div className="col-md-12">
                  {selectorType == 0 ? (
                    <Link to="/dashboard" className="btn btn-login">
                      HIRE
                    </Link>
                  ) : (
                    <Link to="/client-browse" className="btn btn-login">
                      BROWSE
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Selectorhire;

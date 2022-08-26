import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../Layout/loggedInHeader";

function OnsiteOffsite() {
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

              <h4>you are best suited for ?</h4>

              <div className="row mt-2 mt-sm-3">
                <div className="col-md-4 mb-3">
                  <div className="client-radio">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-check mt-3 desgin-radio">
                          <input
                            className="with-gap"
                            type="radio"
                            name="client-selector"
                            id="client1"
                          />
                          <label htmlFor="client1"></label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5 col-6">
                        <p>Onsite</p>
                        <h6>
                          Projects related to handyman or similar services, eg:
                          plumber, carpenter etc.
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
                            type="radio"
                            name="client-selector"
                            id="client2"
                          />
                          <label htmlFor="client2"></label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5  col-6">
                        <p>Offsite</p>
                        <h6>
                          Projects related to online service, eg: coding,
                          editing, designing etc.
                        </h6>
                      </div>
                      <div className="col-md-7 col-6">
                        <img src="images/Hire-right.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-3 mt-sm-2 mb-4 mb-sm-0">
                <div className="col-md-12">
                  <Link
                    to="/individual-profile-builder-1"
                    className="btn btn-login"
                  >
                    CONTINUE BUILDING YOUR PROFILE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OnsiteOffsite;

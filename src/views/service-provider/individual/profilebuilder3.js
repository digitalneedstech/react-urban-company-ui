import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../Layout/loggedInHeader";

function IndividualProfilebuilder3() {
  return (
    <>
      <Header />
      <section className="client-profile">
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-12 mt-2 pt-5 mt-sm-5">
              <div className="tab-content">
                <div className="tab-pane fade show active">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="client-profilehead">
                        <h1>profile builder</h1>
                        <h2>step 3: your hourly rate & communication</h2>
                      </div>
                      <img src="images/profile-builder3.svg" alt="" />
                    </div>
                    <div className="col-md-6">
                      <div className="row justify-content-center">
                        <div className="col-md-9">
                          <nav>
                            <div className="nav nav-tabs">
                              <a className="nav-item nav-link active" href="#">
                                headline
                              </a>
                              <a className="nav-item nav-link active" href="#">
                                skills
                              </a>
                              <a className="nav-item nav-link active" href="#">
                                rate
                              </a>
                              <a
                                className="nav-item nav-link"
                                href="#"
                                role="tab"
                              >
                                proximity
                              </a>
                            </div>
                          </nav>

                          <label for="#" className="profile-label mt-4">
                            Specify your basic hourly rate
                          </label>
                          <div className="">
                            <input
                              type="email"
                              className="form-control login-input profile-inpt"
                              placeholder="$"
                            />
                          </div>

                          <label for="#" className="profile-label mt-4">
                            English level
                          </label>
                          <div className=" desgin-radio">
                            <input
                              className="with-gap"
                              type="radio"
                              name="client-selector"
                              id="client1"
                            />
                            <label for="client1" className="radio-label">
                              Any level
                            </label>
                          </div>

                          <div className=" desgin-radio">
                            <input
                              className="with-gap"
                              type="radio"
                              name="client-selector"
                              id="client2"
                            />
                            <label for="client2" className="radio-label">
                              Conversational or better
                            </label>
                          </div>
                          <div className=" desgin-radio">
                            <input
                              className="with-gap"
                              type="radio"
                              name="client-selector"
                              id="client3"
                            />
                            <label for="client3" className="radio-label">
                              Fluent or better
                            </label>
                          </div>
                          <div className=" desgin-radio">
                            <input
                              className="with-gap"
                              type="radio"
                              name="client-selector"
                              id="client4"
                            />
                            <label for="client4" className="radio-label">
                              Native or bilingual only
                            </label>
                          </div>

                          <div className="row mt-4 mb-4">
                            <div className="col-md-12">
                              <Link
                                to="/individual-profile-builder-2"
                                className="btn btn-outline-primary post-btn mr-3"
                              >
                                BACK
                              </Link>
                              <Link
                                to="/individual-profile-builder-4"
                                className="btn btn-login"
                              >
                                NEXT STEP
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IndividualProfilebuilder3;

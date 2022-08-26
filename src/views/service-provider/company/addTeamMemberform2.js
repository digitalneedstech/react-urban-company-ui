import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../Layout/loggedInHeader";

function ServiceproviderTeamMemberform2() {
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
                        <h1>add team member</h1>
                        <h2>step 2: their category & skills</h2>
                      </div>
                      <img src="images/profile-builder2.svg" alt="" />
                    </div>
                    <div className="col-md-6">
                      <div className="row justify-content-center">
                        <div className="col-md-9">
                          <nav>
                            <div
                              className="nav nav-tabs"
                              id="nav-tab"
                              role="tablist"
                            >
                              <a className="nav-item nav-link active" href="#">
                                headline
                              </a>
                              <a className="nav-item nav-link active" href="#">
                                skills
                              </a>
                              <a className="nav-item nav-link" href="#">
                                rate
                              </a>
                              <a className="nav-item nav-link" href="#">
                                proximity
                              </a>
                            </div>
                          </nav>

                          <label for="#" className="profile-label mt-4">
                            Search for category
                          </label>
                          <div className="form-group position-relative">
                            <img
                              src="images/probuilder-search.svg"
                              className="login-smsimg"
                              alt=""
                            />
                            <input
                              type="email"
                              className="form-control login-input"
                              placeholder="Search category"
                            />
                          </div>
                          <div className="border-bottom mt-4"></div>

                          <label for="#" className="profile-label mt-4">
                            Search for skills
                          </label>
                          <div className="form-group position-relative">
                            <img
                              src="images/probuilder-search.svg"
                              className="login-smsimg"
                              alt=""
                            />
                            <input
                              type="email"
                              className="form-control login-input"
                              placeholder="Search category"
                            />
                          </div>
                          <h5 className="selected-probuilder">Selected</h5>
                          <h4 className=" words-text">
                            No skill has been added yet !
                          </h4>
                          <div className="border-bottom mt-4 mb-3"></div>

                          <span className="related-skills">Related skills</span>
                          <div className="row mt-2">
                            <div className="col-md-12">
                              <button
                                type="button"
                                className="btn btn-info skill-btn mr-2"
                              >
                                Skill lorem{" "}
                                <img src="images/add-square.svg" alt="" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-info skill-btn mr-2"
                              >
                                Skill lorem{" "}
                                <img src="images/add-square.svg" alt="" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-info skill-btn"
                              >
                                Skill lorem{" "}
                                <img src="images/add-square.svg" alt="" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-info skill-btn mt-2 mr-2"
                              >
                                Skill lorem{" "}
                                <img src="images/add-square.svg" alt="" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-info skill-btn mt-2 mr-2"
                              >
                                Skill lorem{" "}
                                <img src="images/add-square.svg" alt="" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-info skill-btn mt-2"
                              >
                                Skill lorem{" "}
                                <img src="images/add-square.svg" alt="" />
                              </button>
                            </div>
                          </div>

                          <div className="row mt-4 mb-4">
                            <div className="col-md-12">
                              <Link
                                to="/add-team-member-1"
                                className="btn btn-login mr-3"
                              >
                                BACK
                              </Link>
                              <Link
                                to="/add-team-member-3"
                                className="btn btn-login mr-3"
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

export default ServiceproviderTeamMemberform2;

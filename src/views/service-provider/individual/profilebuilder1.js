import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../../Layout/loggedInHeader";
import { profileDataUpdate } from "../../../redux/actions/user";

function IndividualProfilebuilder1() {
  const user = useSelector((state) => state.user);
  const { profileData } = user;
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState({});

  const handleInputChange = (event) => {
    let { name, value } = event.target;
    let data = { ...inputFields, [name]: value };
    setInputFields(data);
  };

  const onNext = () => {
    profileDataUpdate({ ...inputFields });
    navigate("/individual-profile-builder-2");
  };

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
                        <h2>step 1: catchy headline</h2>
                      </div>
                      <img src="images/profilebuilder-leftimg.svg" alt="" />
                    </div>
                    <div className="col-md-6">
                      <div className="row justify-content-center">
                        <div className="col-md-9">
                          <nav>
                            <div className="nav nav-tabs" role="tablist">
                              <Link
                                className="nav-item nav-link active"
                                to="individual-profile-builder-1"
                              >
                                headline
                              </Link>
                              <Link
                                className="nav-item nav-link"
                                to="individual-profile-builder-2"
                              >
                                skills
                              </Link>
                              <Link
                                className="nav-item nav-link"
                                to="individual-profile-builder-3"
                              >
                                rate
                              </Link>
                              <Link
                                className="nav-item nav-link"
                                to="individual-profile-builder-4"
                              >
                                proximity
                              </Link>
                            </div>
                          </nav>

                          <label htmlFor="#" className="profile-label mt-4">
                            Write a catchy headline about you
                          </label>
                          <div className="">
                            <input
                              type="text"
                              name="headline"
                              onChange={handleInputChange}
                              className="form-control login-input profile-inpt"
                              placeholder="Start typing here…"
                              defaultValue={profileData?.headline}
                            />
                          </div>
                          <h4 className="text-right words-text">0/100 words</h4>

                          <div className="border-bottom mt-3"></div>
                          <div className="profile-content">
                            <div className="row mt-4 mt-sm-4">
                              <div className="col-md-12">
                                <h1>Writing heading tips</h1>
                                <ul>
                                  <li>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                  </li>
                                  <li>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                  </li>
                                  <li>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-2 mb-4 mb-sm-0">
                            <div className="col-md-12">
                              <a
                                onClick={onNext}
                                className="btn btn-login mr-3"
                              >
                                NEXT STEP
                              </a>
                              <Link
                                to="/dashboard"
                                className="btn btn-outline-primary post-btn"
                              >
                                SKIP & GO TO DASHBOARD
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

export default IndividualProfilebuilder1;

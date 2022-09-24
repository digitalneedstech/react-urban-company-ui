import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../../Layout/loggedInHeader";
import { profileDataUpdate } from "../../../redux/actions/user";
import AsyncSelectInput from "../../../components/asyncSelectInput";
import Footer from "../../../Layout/footer";

function ServiceproviderTeamMemberform2() {
  const user = useSelector((state) => state.user);
  const { profileData } = user;
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState({});

  const handleInputChange = (event) => {
    let { name, value } = event.target;
    let data = { ...inputFields, [name]: value };
    setInputFields(data);
    profileDataUpdate({ ...data });
  };

  const onNext = () => {
    navigate("/add-team-member-3");
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
                              <Link
                                className="nav-item nav-link active"
                                to="/add-team-member-1"
                              >
                                headline
                              </Link>
                              <Link
                                className="nav-item nav-link active"
                                to="/add-team-member-2"
                              >
                                skills
                              </Link>
                              <Link
                                className="nav-item nav-link"
                                to="/add-team-member-3"
                              >
                                rate
                              </Link>
                              <Link
                                className="nav-item nav-link"
                                to="/add-team-member-4"
                              >
                                proximity
                              </Link>
                            </div>
                          </nav>

                          <label htmlFor="#" className="profile-label mt-4">
                            Search for category
                          </label>
                          <div className="form-group position-relative">
                            <img
                              src="images/probuilder-search.svg"
                              className="login-smsimg"
                              alt=""
                              style={{ zIndex: 1 }}
                            />
                            <AsyncSelectInput
                              placeholder="Search category"
                              url="/metadata/categories"
                              name="categories"
                              onChange={handleInputChange}
                              value={profileData?.categories}
                            />
                          </div>
                          <div className="border-bottom mt-4"></div>

                          <label htmlFor="#" className="profile-label mt-4">
                            Search for skills
                          </label>
                          <div className="form-group position-relative">
                            <img
                              src="images/probuilder-search.svg"
                              className="login-smsimg"
                              alt=""
                              style={{ zIndex: 1 }}
                            />
                            <AsyncSelectInput
                              placeholder="Search skills"
                              url="/metadata/skills"
                              name="skills"
                              onChange={handleInputChange}
                              value={profileData?.skills}
                            />
                          </div>
                          <h5 className="selected-probuilder">Selected</h5>
                          <h4 className=" words-text">
                            No skill has been added yet !
                          </h4>
                          <div className="border-bottom mt-4 mb-3"></div>

                          {/* <span className="related-skills">Related skills</span>
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
                          </div> */}

                          <div className="row mt-4 mb-4">
                            <div className="col-md-12">
                              <Link
                                to="/add-team-member-1"
                                className="btn btn-login mr-3"
                              >
                                BACK
                              </Link>
                              <a
                                onClick={onNext}
                                className="btn btn-login mr-3"
                              >
                                NEXT STEP
                              </a>
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
      <Footer />
    </>
  );
}

export default ServiceproviderTeamMemberform2;

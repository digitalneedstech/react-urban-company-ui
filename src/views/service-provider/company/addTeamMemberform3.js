import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../../Layout/loggedInHeader";
import { profileDataUpdate } from "../../../redux/actions/user";

function ServiceproviderTeamMemberform3() {
  const user = useSelector((state) => state.user);
  const { profileData } = user;
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState({});

  const handleInputChange = (event) => {
    let { name, value } = event.target;
    let data = { ...inputFields, [name]: value };
    setInputFields(data);
    profileDataUpdate({ commercial: { ...data } });
  };

  const onNext = () => {
    navigate("/add-team-member-4");
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
                        <h2>step 3: hourly rate & communication</h2>
                      </div>
                      <img src="images/profile-builder3.svg" alt="" />
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
                                className="nav-item nav-link active"
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
                            Specify your basic hourly rate
                          </label>
                          <div className="">
                            <input
                              type="number"
                              name="hourlyRate"
                              onChange={handleInputChange}
                              className="form-control login-input profile-inpt"
                              placeholder="$"
                              defaultValue={profileData?.commercial?.hourlyRate}
                            />
                          </div>

                          <label htmlFor="#" className="profile-label mt-4">
                            English level
                          </label>
                          <div className=" desgin-radio">
                            <input
                              className="with-gap"
                              type="radio"
                              checked={
                                profileData?.commercial?.englishLevel ==
                                "Any level"
                              }
                              name="englishLevel"
                              onChange={handleInputChange}
                              value="Any level"
                              id="client1"
                            />
                            <label htmlFor="client1" className="radio-label">
                              Any level
                            </label>
                          </div>

                          <div className=" desgin-radio">
                            <input
                              className="with-gap"
                              type="radio"
                              name="englishLevel"
                              onChange={handleInputChange}
                              value="Conversational or better"
                              id="client2"
                              checked={
                                profileData?.commercial?.englishLevel ==
                                "Conversational or better"
                              }
                            />
                            <label htmlFor="client2" className="radio-label">
                              Conversational or better
                            </label>
                          </div>
                          <div className=" desgin-radio">
                            <input
                              className="with-gap"
                              type="radio"
                              name="englishLevel"
                              onChange={handleInputChange}
                              value="Fluent or better"
                              id="client3"
                              checked={
                                profileData?.commercial?.englishLevel ==
                                "Fluent or better"
                              }
                            />
                            <label htmlFor="client3" className="radio-label">
                              Fluent or better
                            </label>
                          </div>
                          <div className=" desgin-radio">
                            <input
                              className="with-gap"
                              type="radio"
                              name="englishLevel"
                              onChange={handleInputChange}
                              value="Native or bilingual only"
                              id="client4"
                              checked={
                                profileData?.commercial?.englishLevel ==
                                "Native or bilingual only"
                              }
                            />
                            <label htmlFor="client4" className="radio-label">
                              Native or bilingual only
                            </label>
                          </div>

                          <div className="row mt-4 mb-4">
                            <div className="col-md-12">
                              <Link
                                to="/add-team-member-2"
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
    </>
  );
}

export default ServiceproviderTeamMemberform3;

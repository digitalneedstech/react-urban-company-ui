import React, { useState } from "react";
import _ from "lodash";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../../Layout/loggedInHeader";
import { profileDataUpdate, addNewMember } from "../../../redux/actions/user";
import { fetchData } from "../../../redux/helpers";

function ServiceproviderTeamMemberform4() {
  const user = useSelector((state) => state.user);
  const { userData } = user.user;
  const { profileData, members } = user;
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState({});

  const handleInputChange = (event) => {
    let { name, value } = event.target;
    let data = { ...inputFields, [name]: value };
    setInputFields(data);
    profileDataUpdate({ ...data });
  };

  const addMember = () => {
    addNewMember(profileData);
    navigate("/add-team-member-1");
  };

  const onFinishProfile = async () => {
    addNewMember(profileData);
    let response = await fetchData(
      `/serviceProviders/companyProfile/${userData.id}/memberProfiles`,
      "POST",
      { members }
    );
    if (!_.isEmpty(response)) {
      navigate("/services-dashboard");
    }
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
                        <h2>step 4: location & proximity</h2>
                      </div>
                      <img src="images/profile-builder4.svg" alt="" />
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
                                className="nav-item nav-link active"
                                to="/add-team-member-4"
                              >
                                proximity
                              </Link>
                            </div>
                          </nav>

                          <label
                            htmlFor="#"
                            className="profile-label mt-4 mb-0"
                          >
                            Select the locations you want to serve in
                          </label>
                          <div className="row align-items-center">
                            <div className="col-md-1 pr-0 col-1">
                              <img src="images/profileBuilder-gps.svg" alt="" />
                            </div>
                            <div className="col-md-10  col-10 pl-0">
                              <span className="profile-buildergps">
                                Detect my current location
                              </span>
                            </div>
                          </div>
                          <div className="form-group position-relative mt-3">
                            <img
                              src="images/profileBuilder-location.svg"
                              className="login-smsimg"
                              alt=""
                            />
                            <input
                              type="text"
                              name="location"
                              onChange={handleInputChange}
                              className="form-control login-input"
                              placeholder="Search location"
                              defaultValue={profileData?.location}
                            />
                          </div>

                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.3182688614693!2d77.39455371691349!3d28.50007064897341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce86095555555%3A0x70cfc1465b1bc159!2sStaqo%20World%20Private%20Ltd!5e0!3m2!1sen!2sin!4v1649843153429!5m2!1sen!2sin"
                            className="iframecontact-map"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                          <h4 className="words-text">
                            Adjust proximity radius
                          </h4>

                          <input
                            id="feedback"
                            data-slider-id="ex1Slider"
                            type="text"
                            data-slider-min="0"
                            data-slider-max="20"
                            data-slider-step="1"
                            data-slider-value="10"
                          />
                          <h4 className="words-text text-center">25mi.</h4>
                        </div>
                      </div>
                      <div className="row mt-4 mb-4 ml-0 ml-sm-2 align-items-center">
                        <div className="col-md-12 pl-sm-3 pl-0">
                          <Link
                            to="/add-team-member-3"
                            className="btn btn-outline-primary post-btn mr-1 ml-0 ml-sm-5 mb-2"
                          >
                            BACK
                          </Link>
                          <button
                            type="button"
                            onClick={onFinishProfile}
                            className="btn btn-login mr-1 mb-2"
                          >
                            FINISH ADDING TEAM
                          </button>
                          <button
                            type="button"
                            onClick={addMember}
                            className="uploadBtn add-membrbtn mb-2"
                          >
                            ADD MORE MEMBERS
                          </button>
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

export default ServiceproviderTeamMemberform4;

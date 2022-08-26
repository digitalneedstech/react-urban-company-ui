import React from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import Header from "../../../Layout/loggedInHeader";
import Footer from "../../../Layout/footer";

function KYC() {
  return (
    <>
      <Header />
      <section className="service-providerFullbg">
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-8 mt-2 pt-5 mt-sm-5 ">
              <div className="client-profilehead">
                <h1>account verification</h1>
                <h2>complete the form for KYC verification</h2>
              </div>
            </div>
            <div className="col-md-4 text-right mt-2 pt-5 mt-sm-5  d-none d-sm-block">
              <Link to="/add-team-member-1" className="btn btn-login">
                ADD TEAM MEMBER(S)
              </Link>
            </div>
          </div>

          <div className="row mt-4 align-items-end">
            <div className="col-md-3">
              <img src="images/girl-meditation.svg" alt="" />
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label for="#" className="profile-label">
                  Full company name
                </label>
                <input
                  type="email"
                  className="form-control login-input profile-inpt"
                  placeholder="MockLabs Inc."
                />
              </div>

              <div className="form-group">
                <label for="#" className="profile-label">
                  Describe your company
                </label>
                <textarea
                  className="form-control  login-input profile-inpt"
                  placeholder="Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis aspernatur. Sint blanditiis dignissimos ut non enim error. Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis aspernatur. Sint blanditiis dignissimos ut non enim error."
                  rows="4"
                ></textarea>
              </div>

              <div className="">
                <label for="#" className="profile-label">
                  Upload / browse logo
                </label>
                <input
                  type="email"
                  className="form-control login-input profile-inpt"
                  placeholder="logo.png"
                />
                <div className="upload-btn-wrapper">
                  <button className="uploadBtn">BROWSE</button>
                  <input type="file" />
                </div>
              </div>

              <div className="profile-content">
                <div className="row align-items-center">
                  <div className="col-md-3 col-5">
                    <img src="images/pro-userpic.jpg" alt="" />
                  </div>
                  <div className="col-md-3 pl-0 col-6">
                    <button type="button" className="btn btn-danger remove-btn">
                      REMOVE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-providerfullbgBottom">
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="form-group">
                <label for="#" className="profile-label">
                  Website link (optional)
                </label>
                <input
                  type="email"
                  className="form-control login-input profile-inpt"
                  placeholder="https://mocklabs.com"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control login-input profile-inpt"
                  placeholder="+00 9876543210"
                />
              </div>

              <div className="form-group">
                <label for="#" className="profile-label">
                  Admin details
                </label>
                <input
                  type="email"
                  className="form-control login-input profile-inpt"
                  placeholder="Vinod Sharma"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control login-input profile-inpt"
                  placeholder="vinod@mocklabs.com"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control login-input profile-inpt"
                  placeholder="+00 9876543210"
                />
              </div>

              <label for="#" className="profile-label">
                Company documents
              </label>

              <Accordion defaultActiveKey="0" className="accordreact">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Company registration certificate{" "}
                    <span className="added-accordtext">
                      Added
                      <img
                        src="images/arrow-down.svg"
                        className="ml-2"
                        alt=""
                      />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <input
                      type="email"
                      className="form-control login-input profile-inpt"
                      placeholder="profile_img.jpg"
                    />
                    <div className="upload-btn-wrapper">
                      <button className="uploadBtn">BROWSE</button>
                      <input type="file" />
                    </div>
                    <div className="profile-content">
                      <div className="row align-items-center">
                        <div className="col-md-3 col-5">
                          <img src="images/pro-userpic.jpg" alt="" />
                        </div>
                        <div className="col-md-3 pl-0 col-6">
                          <button
                            type="button"
                            className="btn btn-danger remove-btn"
                          >
                            REMOVE
                          </button>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Company bank details{" "}
                    <span className="added-blackText">
                      -Not added
                      <img
                        src="images/arrow-down.svg"
                        className="ml-2"
                        alt=""
                      />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <input
                      type="email"
                      className="form-control login-input profile-inpt"
                      placeholder="profile_img.jpg"
                    />
                    <div className="upload-btn-wrapper">
                      <button className="uploadBtn">BROWSE</button>
                      <input type="file" />
                    </div>
                    <div className="profile-content">
                      <div className="row align-items-center">
                        <div className="col-md-3 col-5">
                          <img src="images/pro-userpic.jpg" alt="" />
                        </div>
                        <div className="col-md-3 pl-0 col-6">
                          <button
                            type="button"
                            className="btn btn-danger remove-btn"
                          >
                            REMOVE
                          </button>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Other documents{" "}
                    <span className="added-blackText">
                      -Not added
                      <img
                        src="images/arrow-down.svg"
                        className="ml-2"
                        alt=""
                      />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <input
                      type="email"
                      className="form-control login-input profile-inpt"
                      placeholder="profile_img.jpg"
                    />
                    <div className="upload-btn-wrapper">
                      <button className="uploadBtn">BROWSE</button>
                      <input type="file" />
                    </div>
                    <div className="profile-content">
                      <div className="row align-items-center">
                        <div className="col-md-3 col-5">
                          <img src="images/pro-userpic.jpg" alt="" />
                        </div>
                        <div className="col-md-3 pl-0 col-6">
                          <button
                            type="button"
                            className="btn btn-danger remove-btn"
                          >
                            REMOVE
                          </button>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <div className="row mt-4">
                <div className="col-md-12">
                  <Link to="/add-team-member-1" className="btn btn-login mr-3 ">
                    ADD TEAM MEMBER(S)
                  </Link>
                  <Link
                    to="/company-upload-logo"
                    className="btn btn-outline-primary post-btn "
                  >
                    BACK
                  </Link>
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

export default KYC;

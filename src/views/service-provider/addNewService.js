import React from "react";
import { Link } from "react-router-dom";
import { Accordion, Card, Button } from "react-bootstrap";

function AddNewService() {
  return (
    <>
      <header>
        <div class="container">
          <div class="tophead border-bottom">
            <div class="row align-items-center">
              <div class="col-md-5 col-5 moblogo">
                <a href="#">
                  <img src="images/Logo.svg" alt="" />
                </a>
                <button
                  type="button"
                  class="btn btn-login ml-4 d-none d-sm-inline-block"
                >
                  WANT TO HIRE SOMEONE ?
                </button>
              </div>
              <div class="col-md-7 col-7">
                <ul class="tophead-right">
                  <li class="client-loginHead d-none d-sm-block">
                    <a href="#">
                      <img
                        src="images/service-prohead-img.png"
                        class="pro-headimg"
                        alt=""
                      />
                      You are logged in as a <span>SERVICE PROVIDER</span>
                    </a>
                  </li>
                  <li class="user-picHead">
                    <a href="#">
                      <span>
                        <img src="images/pro-userpic.jpg" alt="" />
                      </span>
                      <p>Hi, MockLabs Inc.!</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/bell.png" alt="" />
                      <span class="notification-numb">8</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section class="service-providerFullbg">
        <div class="container">
          <div class="row pt-4">
            <div class="col-md-8 mt-2 pt-5 mt-sm-5 ">
              <div class="client-profilehead">
                <h1>list a service</h1>
                <h2>add new service form</h2>
              </div>
            </div>
            <div class="col-md-4 text-right mt-2 pt-5 mt-sm-5  d-none d-sm-block">
              <button type="button" class="btn btn-login">
                PUBLISH YOUR SERVICE
              </button>
            </div>
          </div>

          <div class="row mt-4 align-items-end">
            <div class="col-md-3">
              <img src="images/girl-meditation.svg" alt="" />
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="#" class="profile-label">
                  Headline for your service
                </label>
                <input
                  type="email"
                  class="form-control login-input profile-inpt"
                  placeholder="Drainage pipe blockage removal"
                />
              </div>

              <div class="form-group">
                <label for="#" class="profile-label">
                  Service details
                </label>
                <textarea
                  class="form-control  login-input profile-inpt"
                  placeholder="You may have experience in fixing a lot of things at home but plumbing isn’t everyone’s cup of tea. Plumbing issues such as clogged drains, leaky faucets, Plumbing issues need to be addressed immediately in order to prevent them from exacerbating or causing further damages. Minor plumbing problems are quite common in every household. Book our plumbing services for all kinds of general plumbing services such as loose and leaky faucets, dripping tap, clogged shower head, cistern repair, toilet flush not working, clogged drain and sink or any other plumbing work."
                  rows="8"
                ></textarea>
              </div>

              <div class="form-group">
                <label for="#" class="profile-label">
                  Featured image(s)
                </label>
                <input
                  type="email"
                  class="form-control login-input profile-inpt"
                  placeholder="3 images uploaded"
                />
              </div>
              <div class="row">
                <div class="col-md-4 col-4">
                  <div class="Featured-img">
                    <img
                      src="images/furniture.jpg"
                      alt=""
                      class="furnitured-img"
                    />
                    <img
                      src="images/close-far.svg"
                      alt=""
                      class="close-imgafar"
                    />
                  </div>
                </div>
                <div class="col-md-4 col-4">
                  <div class="Featured-img">
                    <img src="images/far2.jpg" alt="" class="furnitured-img" />
                    <img
                      src="images/close-far.svg"
                      alt=""
                      class="close-imgafar"
                    />
                  </div>
                </div>
                <div class="col-md-4 col-4">
                  <div class="Featured-img">
                    <img
                      src="images/furniture.jpg"
                      alt=""
                      class="furnitured-img"
                    />
                    <img
                      src="images/close-far.svg"
                      alt=""
                      class="close-imgafar"
                    />
                  </div>
                </div>
              </div>

              <label for="#" class="profile-label mt-3">
                Category
              </label>
              <div class="position-relative mb-0">
                <img
                  src="images/probuilder-search.svg"
                  class="login-smsimg"
                  alt=""
                />
                <input
                  type="email"
                  class="form-control login-input"
                  placeholder="Search category"
                />
                <div class="upload-btn-wrapper">
                  <button class="uploadBtn">BROWSE</button>
                  <input type="file" />
                </div>
              </div>

              <h5 class="selected-probuilder selected-far">Selected</h5>
              <button type="button" class="btn btn-info skill-btn far-btn mr-2">
                Skill lorem <img src="images/add-square.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="service-providerfullbgBottom pb-4 pb-sm-5">
        <div class="container">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
              <label for="#" class="profile-label mt-3">
                Included in this service
              </label>
              <div class="form-group position-relative">
                <img
                  src="images/probuilder-search.svg"
                  class="login-smsimg"
                  alt=""
                />
                <input
                  type="email"
                  class="form-control login-input"
                  placeholder="Add inclusions"
                />
              </div>

              <h5 class="selected-probuilder">Selected</h5>
              <button type="button" class="btn btn-info skill-btn far-btn mr-2">
                Skill lorem <img src="images/add-square.svg" alt="" />
              </button>
              <button type="button" class="btn btn-info skill-btn far-btn mr-2">
                Skill lorem <img src="images/add-square.svg" alt="" />
              </button>
              <button type="button" class="btn btn-info skill-btn far-btn">
                Skill lorem <img src="images/add-square.svg" alt="" />
              </button>

              <label for="#" class="profile-label mt-3">
                Not included in this service
              </label>
              <div class="form-group position-relative">
                <img
                  src="images/probuilder-search.svg"
                  class="login-smsimg"
                  alt=""
                />
                <input
                  type="email"
                  class="form-control login-input"
                  placeholder="Add non inclusions"
                />
              </div>

              <h5 class="selected-probuilder">Selected</h5>
              <button type="button" class="btn btn-info skill-btn far-btn mr-2">
                Skill lorem <img src="images/add-square.svg" alt="" />
              </button>
              <button type="button" class="btn btn-info skill-btn far-btn mr-2">
                Skill lorem <img src="images/add-square.svg" alt="" />
              </button>
              <button type="button" class="btn btn-info skill-btn far-btn">
                Skill lorem <img src="images/add-square.svg" alt="" />
              </button>
              <br />

              <label for="#" class="profile-label mt-3">
                Specify service cost
              </label>
              <div class=" desgin-radio">
                <input
                  class="with-gap"
                  type="radio"
                  name="client-selector"
                  id="client1"
                />
                <label for="client1" class="radio-label">
                  Hourly rate
                </label>

                <input
                  class="with-gap"
                  type="radio"
                  name="client-selector"
                  id="client2"
                />
                <label for="client2" class="radio-label">
                  Fixed cost
                </label>
              </div>

              <div class="row mt-3">
                <div class="col-md-4 col-4">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control login-input profile-inpt"
                      placeholder="$20.00"
                    />
                  </div>
                </div>
                <div class="col-md-4 pl-0 col-4">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control login-input profile-inpt"
                      placeholder="Visiting charges ($)"
                    />
                  </div>
                </div>

                <div class="col-md-4 pl-0 col-4">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control login-input profile-inpt"
                      placeholder="Cancellation charges ($)"
                    />
                  </div>
                </div>
              </div>

              <label for="#" class="profile-label">
                Frequently asked questions
              </label>

              <Accordion defaultActiveKey="0" className="accordreact">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <img
                      src="images/close-w.svg"
                      class="mr-2 addNew-accorimg"
                      height="18px"
                      alt=""
                    />{" "}
                    Question 1
                    <span class="added-accordtext">
                      <img src="images/arrow-down.svg" alt="" />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <img
                      src="images/close-w.svg"
                      class="mr-2 addNew-accorimg"
                      height="18px"
                      alt=""
                    />{" "}
                    Question 2
                    <span class="added-accordtext">
                      <img src="images/arrow-down.svg" alt="" />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <img
                      src="images/close-w.svg"
                      class="mr-2 addNew-accorimg"
                      height="18px"
                      alt=""
                    />{" "}
                    Question 3
                    <span class="added-accordtext">
                      <img src="images/arrow-down.svg" alt="" />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <img
                      src="images/close-w.svg"
                      class="mr-2 addNew-accorimg"
                      height="18px"
                      alt=""
                    />{" "}
                    Question 4
                    <span class="added-accordtext">
                      <img src="images/arrow-down.svg" alt="" />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <div class="row mt-4">
                <div class="col-md-12">
                  <button type="button" class="btn btn-login mr-3 ">
                    PUBLISH YOUR SERVICE
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-primary post-btn "
                  >
                    BACK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddNewService;

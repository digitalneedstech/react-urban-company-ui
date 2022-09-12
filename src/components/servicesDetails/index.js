import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

import Slider from "react-slick";
import SelectServices from "./selectServices";
import BookSlot from "./bookSlot";

var sliderfirstsetting = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  pauseOnHover: false,
};

var slidersecondsetting = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  pauseOnHover: false,
  swipeToSlide: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

function ServicesDetails() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <>
      <section className="pt-5 pt-sm-5">
        <div className="container">
          <div className="row mt-4 mt-sm-4 ">
            <div className="col-md-8 mt-2">
              <div className="service-head">
                <h1>
                  <span>installation services by plumber</span>
                </h1>
                <h2>
                  <span>
                    <a href="#">Home</a>
                  </span>{" "}
                  <img
                    src="images/service-arrowright.svg"
                    className="mr-2"
                    alt=""
                  />{" "}
                  <span>
                    <a href="#">Plumber</a>
                  </span>{" "}
                  <img
                    src="images/service-arrowright.svg"
                    className="mr-2"
                    alt=""
                  />{" "}
                  Drainage
                </h2>
              </div>
            </div>
            <div className="col-md-2 text-right d-none d-sm-block ">
              <h6 className="mt-5 pt-1 pipe-head">
                <img src="images/verify.png" className="mr-1 mb-1" alt="" />{" "}
                COMPANY
              </h6>
            </div>
            <div className="col-md-2 text-right d-none d-sm-block ">
              <button type="button" className="btn btn-light details-btn mt-5">
                BACK TO LIST
              </button>
            </div>
          </div>

          <div className="border-bottom mt-2"></div>
          <div className="row mt-3 align-items-center">
            <div className="col-md-9 col-12 mb-2 mb-sm-0">
              <div className="row">
                <div className="col-md-4">
                  <div className="serviceListeddetails-head">
                    <img
                      src="images/playbuzz-img.png"
                      className="play-img"
                      alt=""
                    />
                    <p>Gordan Entreprise Inc.</p>
                    <h6 className="d-flex align-items-center">
                      <img
                        src="images/Iconly-Bold-Star.svg"
                        className="mr-1"
                        alt=""
                        height="15px"
                      />{" "}
                      4.7 (147 reviews)
                    </h6>
                  </div>
                </div>
                <div className="col-md-2 col-6  d-none d-sm-block">
                  <div className="serviceListeddetails-head">
                    <p>Completed</p>
                    <h6>2,489</h6>
                  </div>
                </div>
                <div className="col-md-2 col-6  d-none d-sm-block">
                  <div className="serviceListeddetails-head">
                    <p>Total hours</p>
                    <h6>47,890</h6>
                  </div>
                </div>
                <div className="col-md-4 col-6 d-none d-sm-block">
                  <div className="serviceListeddetails-head">
                    <p>Member since</p>
                    <h6>4 years 3 months</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-8">
              <div className="row">
                <div className="col-md-6 col-6">
                  <div className="serviceListeddetails-head">
                    <p className="d-flex align-items-center justify-content-end">
                      <img
                        src="images/share.png"
                        height="25px"
                        className="mr-2"
                        alt=""
                      />{" "}
                      Share
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-6">
                  <div className="serviceListeddetails-head">
                    <p className="d-flex align-items-center justify-content-end">
                      <img
                        src="images/save.png"
                        height="25px"
                        className="mr-2"
                        alt=""
                      />{" "}
                      Save
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-bottom mt-3"></div>

          <div className="row mt-3">
            <div className="col-md-8 mb-3">
              <div className="row">
                <div className="col-md-12">
                  <Slider
                    asNavFor={nav2}
                    ref={(slider1) => setNav1(slider1)}
                    {...sliderfirstsetting}
                  >
                    <div>
                      <div className="fixed-costproductimg">
                        <img
                          src="images/details.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div className="fixed-costproductimg">
                        <img
                          src="images/details.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div className="fixed-costproductimg">
                        <img
                          src="images/details.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div className="fixed-costproductimg">
                        <img
                          src="images/details.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div className="fixed-costproductimg">
                        <img
                          src="images/details.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div className="fixed-costproductimg">
                        <img
                          src="images/details.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </Slider>
                </div>

                <div className="col-md-12 mt-2">
                  <Slider
                    asNavFor={nav1}
                    ref={(slider2) => setNav2(slider2)}
                    {...slidersecondsetting}
                  >
                    <div>
                      <div className="fixed-costproductimg fixed-costproductimg2">
                        <img
                          src="images/details.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div className="fixed-costproductimg fixed-costproductimg2">
                        <img
                          src="images/details.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div className="fixed-costproductimg fixed-costproductimg2">
                        <img
                          src="images/details.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div className="fixed-costproductimg fixed-costproductimg2">
                        <img
                          src="images/details.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div className="fixed-costproductimg fixed-costproductimg2">
                        <img
                          src="images/details.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div className="fixed-costproductimg fixed-costproductimg2">
                        <img
                          src="images/details.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-12">
                  <div className="service-detailscont">
                    <h4>Service details</h4>
                    <p>
                      You may have experience in fixing a lot of things at home
                      but plumbing isn’t everyone’s cup of tea. Plumbing issues
                      such as clogged drains, leaky faucets, broken or damaged
                      pipelines etc. can be a homeowner’s nightmare. Plumbing
                      issues need to be addressed immediately in order to
                      prevent them from exacerbating or causing further damages.
                      Minor plumbing problems are quite common in every
                      household. Book our plumbing services for all kinds of
                      general plumbing services such as loose and leaky faucets,
                      dripping tap, clogged shower head, cistern repair, toilet
                      flush not working, clogged drain and sink or any other
                      plumbing work. We have a huge network of plumbing
                      contractors in
                      <strong> Seattle, Washington</strong> to help you with all
                      kinds of emergency plumbing services.
                    </p>
                    <a href="#">
                      read more{" "}
                      <img src="images/arrow-deatil.svg" height="20px" alt="" />
                    </a>
                  </div>

                  <div className="included-service mt-4 mb-2">
                    <div className="included-servicehead">
                      <div className="row">
                        <div className="col-md-6 pl-4 pl-sm-5 col-6">
                          <h1>Included in this service</h1>
                        </div>
                        <div className="col-md-6 pl-4 pl-sm-5 col-6">
                          <h1>Included in this service</h1>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1 mt-sm-2">
                      <div className="col-md-6 col-6">
                        <div className="row align-items-center">
                          <div className="col-md-3  pl-4 pl-sm-5">
                            <img
                              src="images/box-check.svg"
                              className=""
                              alt=""
                            />
                          </div>
                          <div className="col-md-9  pl-4 pl-sm-0">
                            <p>Drainage cleaning related activities</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-6">
                        <div className="row">
                          <div className="col-md-3 pl-4 pl-sm-5">
                            <img src="images/box-cross.svg" alt="" />
                          </div>
                          <div className="col-md-9 pl-4 pl-sm-0">
                            <p>Additional installations</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1 mt-sm-2">
                      <div className="col-md-6 col-6">
                        <div className="row align-items-center">
                          <div className="col-md-3 pl-4 pl-sm-5">
                            <img
                              src="images/box-check.svg"
                              className=""
                              alt=""
                            />
                          </div>
                          <div className="col-md-9 pl-4 pl-sm-0">
                            <p>Grouting repair work</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-6">
                        <div className="row">
                          <div className="col-md-3 pl-4 pl-sm-5">
                            <img src="images/box-cross.svg" alt="" />
                          </div>
                          <div className="col-md-9 pl-4 pl-sm-0">
                            <p>Equipments upon inspection</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1 mt-sm-2">
                      <div className="col-md-6 col-6">
                        <div className="row align-items-center">
                          <div className="col-md-3 pl-4 pl-sm-5">
                            <img
                              src="images/box-check.svg"
                              className=""
                              alt=""
                            />
                          </div>
                          <div className="col-md-9 pl-4 pl-sm-0">
                            <p>Light cement work</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-6">
                        <div className="row">
                          <div className="col-md-3 pl-4 pl-sm-5">
                            <img src="images/box-cross.svg" alt="" />
                          </div>
                          <div className="col-md-9 pl-4 pl-sm-0">
                            <p>Materials upon inspection</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1 mt-sm-2">
                      <div className="col-md-6 col-6">
                        <div className="row align-items-center">
                          <div className="col-md-3 pl-4 pl-sm-5">
                            <img
                              src="images/box-check.svg"
                              className=""
                              alt=""
                            />
                          </div>
                          <div className="col-md-9 pl-4 pl-sm-0">
                            <p>Plumbing related consultation</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-6">
                        <div className="row">
                          <div className="col-md-3 pl-4 pl-sm-5">
                            <img src="images/box-cross.svg" alt="" />
                          </div>
                          <div className="col-md-9 pl-4 pl-sm-0">
                            <p>Other than plumbing service</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1 mt-sm-2 pb-3 pb-sn-4">
                      <div className="col-md-6 col-6">
                        <div className="row align-items-center">
                          <div className="col-md-3 pl-4 pl-sm-5">
                            <img
                              src="images/box-check.svg"
                              className=""
                              alt=""
                            />
                          </div>
                          <div className="col-md-9 pl-4 pl-sm-0">
                            <p>4 week post service guarantee</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6"></div>
                    </div>
                  </div>

                  <div className="assured-secbox mt-4">
                    <div className="row align-items-center">
                      <div className="col-md-1">
                        <img src="images/tickbox.svg" className="" alt="" />
                      </div>
                      <div className="col-md-8 pl-3 pl-sm-0">
                        <h1>Assured by protocall</h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do <br className="d-none d-sm-block" />{" "}
                          eiusmod tempor incididunt ut labore et dolore.
                        </p>
                        <h6>
                          <a href="#">
                            read more{" "}
                            <img
                              src="images/right-as.svg"
                              height="20px"
                              alt=""
                            />
                          </a>
                        </h6>
                      </div>
                      <div className="col-md-3 green-bg">
                        <img src="images/green-logo.svg" alt="" />
                        <h5>certified</h5>
                      </div>
                    </div>
                  </div>

                  <div className="border-bottom mt-3 mb-3"></div>

                  <div className="row pt-2">
                    <div className="col-md-12">
                      <div className="service-detailscont">
                        <h4>Frequently asked questions</h4>
                      </div>

                      <Accordion
                        defaultActiveKey="0"
                        className="faq-accordian mt-3"
                      >
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ?{" "}
                            <img
                              src="images/arrow-down.svg"
                              className="accordup"
                              alt=""
                            />
                            <img
                              src="images/arrow-up.svg"
                              className="accorddown"
                              alt=""
                            />
                          </Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur esse cillum
                            dolore eu fugiat nulla pariatur.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ?{" "}
                            <img
                              src="images/arrow-down.svg"
                              className="accordup"
                              alt=""
                            />
                            <img
                              src="images/arrow-up.svg"
                              className="accorddown"
                              alt=""
                            />
                          </Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur esse cillum
                            dolore eu fugiat nulla pariatur.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ?{" "}
                            <img
                              src="images/arrow-down.svg"
                              className="accordup"
                              alt=""
                            />
                            <img
                              src="images/arrow-up.svg"
                              className="accorddown"
                              alt=""
                            />
                          </Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur esse cillum
                            dolore eu fugiat nulla pariatur.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                          <Accordion.Header>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ?{" "}
                            <img
                              src="images/arrow-down.svg"
                              className="accordup"
                              alt=""
                            />
                            <img
                              src="images/arrow-up.svg"
                              className="accorddown"
                              alt=""
                            />
                          </Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur esse cillum
                            dolore eu fugiat nulla pariatur.
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      <div className="border-bottom mt-4 "></div>
                    </div>
                  </div>

                  <div className="service-detailscont mt-4">
                    <h4>About the service provider</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <a href="#">
                      read more{" "}
                      <img src="images/arrow-deatil.svg" height="20px" alt="" />
                    </a>
                  </div>

                  <div className="border-bottom mt-3 "></div>

                  <div className="row mt-3 mt-sm-4">
                    <div className="col-md-12">
                      <div className="service-detailscont">
                        <h4>Reviews</h4>
                        <h5>
                          <img
                            src="images/star-r.svg"
                            className="mr-1"
                            alt=""
                            height="15px"
                          />
                          4.7 <span>(147 reviews)</span>
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="reviews-rating mt-2 ">
                    <div className="row">
                      <div className="col-md-2 col-6">
                        <p>Cooperation</p>
                        <h6>
                          <img
                            src="images/star-r.svg"
                            className="mr-1"
                            alt=""
                            height="13px"
                          />
                          4.9
                        </h6>
                      </div>
                      <div className="col-md-2 col-6">
                        <p>Flexibility</p>
                        <h6>
                          <img
                            src="images/star-r.svg"
                            className="mr-1"
                            alt=""
                            height="13px"
                          />
                          4.9
                        </h6>
                      </div>
                      <div className="col-md-2 col-6">
                        <p>Communication</p>
                        <h6>
                          <img
                            src="images/star-r.svg"
                            className="mr-1"
                            alt=""
                            height="13px"
                          />
                          4.9
                        </h6>
                      </div>
                      <div className="col-md-3 col-6">
                        <p>Timely payments</p>
                        <h6>
                          <img
                            src="images/star-r.svg"
                            className="mr-1"
                            alt=""
                            height="13px"
                          />
                          4.9
                        </h6>
                      </div>
                    </div>

                    <div className="row mt-2">
                      <div className="col-md-1 col-2">
                        <h3>443</h3>
                        <h4>5 stars</h4>
                      </div>
                      <div className="col-md-1 col-2">
                        <h3>39</h3>
                        <h4>4 stars</h4>
                      </div>
                      <div className="col-md-1 col-2">
                        <h3>12</h3>
                        <h4>3 stars</h4>
                      </div>
                      <div className="col-md-1 col-2">
                        <h3>3</h3>
                        <h4>2 stars</h4>
                      </div>
                      <div className="col-md-1 col-2">
                        <h3>3</h3>
                        <h4>1 stars</h4>
                      </div>
                    </div>
                  </div>

                  <div className="review-providerSec mt-3 mt-sm-4">
                    <h1>Reviews by previous service providers</h1>
                    <div className="border-bottom mt-2 mt-sm-3"></div>
                    <div className="row mt-4">
                      <div className="col-md-6 mb-3">
                        <div className="row">
                          <div className="col-md-3 col-3 text-center">
                            <div className="review-proimg">
                              <img src="images/girlw.jpg" alt="" />
                            </div>
                            <h2>
                              <img
                                src="images/star-rew.svg"
                                height="15px"
                                className="mr-1 pt-1"
                                alt=""
                              />{" "}
                              4.9
                            </h2>
                          </div>
                          <div className="col-md-9 col-9">
                            <h3>Mr. John Doe</h3>
                            <p>
                              Excellent support with a thoroughly professional
                              outlook. Amazing… good job
                            </p>
                            <div className="row mt-2">
                              <div className="col-md-8 col-8">
                                <h3>Seattle, Washington</h3>
                              </div>
                              <div className="col-md-4 col-4 pl-0 text-right">
                                <h3>Jun, 2022</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="row">
                          <div className="col-md-3 col-3 text-center">
                            <div className="review-proimg">
                              <img src="images/girlw.jpg" alt="" />
                            </div>
                            <h2>
                              <img
                                src="images/star-rew.svg"
                                height="15px"
                                className="mr-1 pt-1"
                                alt=""
                              />{" "}
                              4.9
                            </h2>
                          </div>
                          <div className="col-md-9 col-9">
                            <h3>Mr. John Doe</h3>
                            <p>
                              Excellent support with a thoroughly professional
                              outlook. Amazing… good job
                            </p>
                            <div className="row mt-2">
                              <div className="col-md-8 col-8">
                                <h3>Seattle, Washington</h3>
                              </div>
                              <div className="col-md-4 col-4 pl-0 text-right">
                                <h3>Jun, 2022</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="row">
                          <div className="col-md-3 col-3 text-center">
                            <div className="review-proimg">
                              <img src="images/girlw.jpg" alt="" />
                            </div>
                            <h2>
                              <img
                                src="images/star-rew.svg"
                                height="15px"
                                className="mr-1 pt-1"
                                alt=""
                              />{" "}
                              4.9
                            </h2>
                          </div>
                          <div className="col-md-9 col-9">
                            <h3>Mr. John Doe</h3>
                            <p>
                              Excellent support with a thoroughly professional
                              outlook. Amazing… good job
                            </p>
                            <div className="row mt-2">
                              <div className="col-md-8 col-8">
                                <h3>Seattle, Washington</h3>
                              </div>
                              <div className="col-md-4 col-4 pl-0 text-right">
                                <h3>Jun, 2022</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="row">
                          <div className="col-md-3 col-3 text-center">
                            <div className="review-proimg">
                              <img src="images/girlw.jpg" alt="" />
                            </div>
                            <h2>
                              <img
                                src="images/star-rew.svg"
                                height="15px"
                                className="mr-1 pt-1"
                                alt=""
                              />{" "}
                              4.9
                            </h2>
                          </div>
                          <div className="col-md-9 col-9">
                            <h3>Mr. John Doe</h3>
                            <p>
                              Excellent support with a thoroughly professional
                              outlook. Amazing… good job
                            </p>
                            <div className="row mt-2">
                              <div className="col-md-8 col-8">
                                <h3>Seattle, Washington</h3>
                              </div>
                              <div className="col-md-4 col-4 pl-0 text-right">
                                <h3>Jun, 2022</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="row">
                          <div className="col-md-3 col-3 text-center">
                            <div className="review-proimg">
                              <img src="images/girlw.jpg" alt="" />
                            </div>
                            <h2>
                              <img
                                src="images/star-rew.svg"
                                height="15px"
                                className="mr-1 pt-1"
                                alt=""
                              />{" "}
                              4.9
                            </h2>
                          </div>
                          <div className="col-md-9 col-9">
                            <h3>Mr. John Doe</h3>
                            <p>
                              Excellent support with a thoroughly professional
                              outlook. Amazing… good job
                            </p>
                            <div className="row mt-2">
                              <div className="col-md-8 col-8">
                                <h3>Seattle, Washington</h3>
                              </div>
                              <div className="col-md-4 col-4 pl-0 text-right">
                                <h3>Jun, 2022</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="row">
                          <div className="col-md-3 col-3 text-center">
                            <div className="review-proimg">
                              <img src="images/girlw.jpg" alt="" />
                            </div>
                            <h2>
                              <img
                                src="images/star-rew.svg"
                                height="15px"
                                className="mr-1 pt-1"
                                alt=""
                              />{" "}
                              4.9
                            </h2>
                          </div>
                          <div className="col-md-9 col-9">
                            <h3>Mr. John Doe</h3>
                            <p>
                              Excellent support with a thoroughly professional
                              outlook. Amazing… good job
                            </p>
                            <div className="row mt-2">
                              <div className="col-md-8 col-8">
                                <h3>Seattle, Washington</h3>
                              </div>
                              <div className="col-md-4 col-4 pl-0 text-right">
                                <h3>Jun, 2022</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom mt-2 mt-sm-3"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-2">
              <BookSlot />
              {/* <SelectServices /> */}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-4 pb-sm-5">
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-12 mb-3">
              <div className="service-head ">
                <img src="images/sec-logo.svg" className="mb-2" alt="" />
                <h1>
                  related <span>services</span>
                </h1>
                <h2>
                  <span>
                    <a href="#">view more </a>
                  </span>{" "}
                  <img src="images/service-arrowright.svg" alt="" />
                </h2>
              </div>
            </div>

            <div className="col-md-4">
              <div className="services-box found-center">
                <div className="servicebox-img">
                  <img
                    src="images/service-img.png"
                    className="service-img"
                    alt=""
                  />
                </div>
                <div className="company-box">
                  <h6 className="d-flex align-items-center mb-2">
                    <img src="images/verify.png" className="mr-2" alt="" />{" "}
                    COMPANY
                  </h6>
                  <h5>Drainage pipe blockage removal</h5>
                  <img
                    src="images/playbuzz-img.png"
                    className="play-img"
                    alt=""
                  />
                  <h4>Gordan Entreprise Inc.</h4>
                  <p className="d-flex align-items-center">
                    <img
                      src="images/Iconly-Bold-Star.svg"
                      className="mr-1"
                      alt=""
                      height="15px"
                    />{" "}
                    4.7 (147 reviews)
                  </p>
                </div>
                <div className="fixedcost-box">
                  <div className="row align-items-center">
                    <div className="col-md-5 col-6">
                      <h5>FIXED COST</h5>
                      <h3>$750.00</h3>
                    </div>
                    <div className="col-md-7 col-6">
                      <button type="button" className="btn btn-login">
                        VIEW DETAILS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="services-box found-center">
                <div className="servicebox-img">
                  <img
                    src="images/service-img2.png"
                    className="service-img"
                    alt=""
                  />
                </div>
                <div className="company-box gay-textfond">
                  <h6 className="d-flex align-items-center mb-2">
                    <img src="images/gray-brwn.svg" className="mr-2" alt="" />{" "}
                    INDIVIDUAL
                  </h6>
                  <h5>Drainage pipe blockage removal</h5>
                  <img src="images/john.png" className="play-img" alt="" />
                  <h4>Gordan Entreprise Inc.</h4>
                  <p className="d-flex align-items-center">
                    <img
                      src="images/Iconly-Bold-Star.svg"
                      className="mr-1"
                      alt=""
                      height="15px"
                    />{" "}
                    4.7 (147 reviews)
                  </p>
                </div>
                <div className="fixedcost-box hourly-right">
                  <div className="row align-items-center">
                    <div className="col-md-5 col-6">
                      <h5>HOURLY</h5>
                      <h3>$20 / hr</h3>
                    </div>
                    <div className="col-md-7 col-6">
                      <button type="button" className="btn btn-login">
                        VIEW DETAILS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="services-box found-center">
                <div className="servicebox-img">
                  <img
                    src="images/service-img3.png"
                    className="service-img"
                    alt=""
                  />
                </div>
                <div className="company-box">
                  <h6 className="d-flex align-items-center mb-2">
                    <img src="images/verify.png" className="mr-2" alt="" />{" "}
                    COMPANY
                  </h6>
                  <h5>Drainage pipe blockage removal</h5>
                  <img
                    src="images/playbuzz-img.png"
                    className="play-img"
                    alt=""
                  />
                  <h4>Gordan Entreprise Inc.</h4>
                  <p className="d-flex align-items-center">
                    <img
                      src="images/Iconly-Bold-Star.svg"
                      className="mr-1"
                      alt=""
                      height="15px"
                    />{" "}
                    4.7 (147 reviews)
                  </p>
                </div>
                <div className="fixedcost-box">
                  <div className="row align-items-center">
                    <div className="col-md-5 col-6">
                      <h5>FIXED COST</h5>
                      <h3>$750.00</h3>
                    </div>
                    <div className="col-md-7 col-6">
                      <button type="button" className="btn btn-login">
                        VIEW DETAILS
                      </button>
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

export default ServicesDetails;

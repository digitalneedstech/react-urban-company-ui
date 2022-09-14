import React, { useEffect, useState } from "react";
import _ from "lodash";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Accordion, Card, Button } from "react-bootstrap";
import Header from "../../Layout/loggedInHeader";
import { fetchData } from "../../redux/helpers";

import Slider from "react-slick";

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

function ListedDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const { userData } = user.user;
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [service, setService] = useState({});

  useEffect(() => {
    (async () => {
      let response = await fetchData(
        `/serviceProviders/${userData.id}/services/${state.id}`,
        "GET"
      );
      console.log(response);
      if (!_.isEmpty(response)) {
        setService(response.service);
      }
    })();
  }, []);

  return (
    <>
      <Header showRegisterButton={true} />

      <section className="pt-5 pt-sm-5">
        <div className="container">
          <div className="row mt-4 mt-sm-4">
            <div className="col-md-10 mt-2">
              <div className="service-head">
                <h1>
                  <span>{service.headline}</span>
                </h1>
                <h2>
                  <span>
                    <a href="#">Services</a>
                  </span>{" "}
                  <img
                    src="images/service-arrowright.svg"
                    className="mr-2"
                    alt=""
                  />{" "}
                  {state.type}
                </h2>
              </div>
            </div>
            <div className="col-md-2 text-right d-none d-sm-block ">
              <button
                onClick={() => navigate(-1)}
                type="button"
                className="btn btn-light details-btn mt-5"
              >
                BACK TO LIST
              </button>
            </div>
          </div>
          <div className="border-bottom mt-2"></div>
          <div className="row mt-3">
            <div className="col-md-9 col-6 ">
              <div className="serviceListeddetails-head">
                <p>Earned (till now)</p>
                <h6>$1,200.00</h6>
              </div>
            </div>
            <div className="col-md-1 col-6 d-none d-sm-block">
              <div className="toogleSwitch">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={!!service.isPublished}
                    onChange={() => {}}
                  />
                  <div className="slider round slider2">
                    <span className="swactive">ACTIVE</span>
                    <span className="swinactive">INACTIVE</span>
                  </div>
                </label>
              </div>
            </div>
            <div className="col-md-2 text-right col-6">
              <Link
                to="/add-new-service"
                state={{ service }}
                className="btn btn-warning exlpore-btn"
              >
                EDIT THIS SERVICE
              </Link>
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
                          src={service.images}
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
                          src={service.images}
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
                    <p>{service.description}</p>
                    <a href="#">
                      read more{" "}
                      <img src="images/arrow-deatil.svg" height="20px" alt="" />
                    </a>
                  </div>

                  <div className="included-service mt-3">
                    <div className="included-servicehead">
                      <div className="row">
                        <div className="col-md-6 pl-4 pl-sm-5 col-6">
                          <h1>Included in this service</h1>
                        </div>
                        <div className="col-md-6 pl-4 pl-sm-5 col-6">
                          <h1>Not Included in this service</h1>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-1 mt-sm-2 pb-3">
                      <div className="col-md-6 col-6">
                        {service.inclusions &&
                          _.map(
                            service.inclusions.split(","),
                            (inclusion, key) => (
                              <div
                                className="row my-1 my-sm-2 align-items-center"
                                key={key}
                              >
                                <div className="col-md-3  pl-4 pl-sm-5">
                                  <img
                                    src="images/box-check.svg"
                                    className=""
                                    alt=""
                                  />
                                </div>
                                <div className="col-md-9  pl-4 pl-sm-0">
                                  <p>{inclusion}</p>
                                </div>
                              </div>
                            )
                          )}
                      </div>
                      <div className="col-md-6 col-6">
                        {service.exclusions &&
                          _.map(
                            service.exclusions.split(","),
                            (exclusion, key) => (
                              <div
                                className="row my-1 my-sm-2 align-items-center"
                                key={key}
                              >
                                <div className="col-md-3 pl-4 pl-sm-5">
                                  <img src="images/box-cross.svg" alt="" />
                                </div>
                                <div className="col-md-9 pl-4 pl-sm-0">
                                  <p>{exclusion}</p>
                                </div>
                              </div>
                            )
                          )}
                      </div>
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
            <div className="col-md-4 mb-3">
              <div className="position-stikyfixedbox">
                <div className="fixed-costbox text-uppercase">
                  <h2>{service.type} COST</h2>
                  <h1>${service.charge}</h1>
                  <p>Listed on</p>
                  <h6>12th Jun 2022</h6>
                  <h3>
                    Min. charges to book this service <span>$20.00</span>
                  </h3>
                  <div className="row mt-3 mt-sm-4">
                    <div className="col-md-4 col-3">
                      <h4>Duration</h4>
                    </div>
                    <div className="col-md-8 text-right col-9">
                      <h4>Depends on the scope of work</h4>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-5 col-5">
                      <h4>Visiting charges</h4>
                    </div>
                    <div className="col-md-7 text-right col-7">
                      <h4>${service.visitingCharges}</h4>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6 col-8">
                      <h4>Cancellation charges</h4>
                      <h5>24hrs. after booking the slot</h5>
                    </div>
                    <div className="col-md-6 text-right col-4">
                      <h4>${service.cancellationCharges}</h4>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-8 col-8">
                      <h4>Applicable taxes (@10%)</h4>
                    </div>
                    <div className="col-md-4 text-right col-4">
                      <h4>$75</h4>
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

export default ListedDetails;

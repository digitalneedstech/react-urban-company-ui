import * as React from "react";
import Slider from "react-slick";

var clientsettings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: false,
};

export default function Testimonials() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="service-head ">
            <img src="images/sec-logo.svg" className="mb-2" alt="" />
            <h1>
              protocall <span>trusted by</span>
            </h1>
            <h2>
              <span>
                <a href="#">view more clients</a>
              </span>{" "}
              <img src="images/service-arrowright.svg" alt="" />
            </h2>
            <span className="logo-img">
              <img src="images/amazon-logo.svg" height="23px" alt="" />
              <img src="images/airbus-logo.svg" height="18px" alt="" />
              <img src="images/deloitte-logo.svg" height="18px" alt="" />
              <img
                src="images/google-logo.svg"
                height="25px"
                alt=""
              /> <br />{" "}
              <img
                src="images/facebook-logo.svg"
                height="18px"
                className="mt-3"
                alt=""
              />
              <img
                src="images/Ibm-logo.svg"
                className="mt-3"
                height="24px"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="trusted-manSec">
            <Slider className="clientslider" {...clientsettings}>
              <div>
                <div className="row justify-content-center">
                  <div className="col-md-10">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-3">
                            <img
                              src="images/comma.svg"
                              className="comma-img mb-2"
                              alt=""
                            />
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <h2>Alan Keech</h2>
                        <p>Senior project manager for Example company</p>
                        <h5>
                          <a href="#">Read more</a>
                        </h5>
                      </div>
                      <div className="col-md-6">
                        <div className="young-manSec">
                          <img
                            src="images/Young-Man2.png"
                            className="young-manimg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row justify-content-center">
                  <div className="col-md-10">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-3">
                            <img
                              src="images/comma.svg"
                              className="comma-img mb-2"
                              alt=""
                            />
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <h2>Alan Keech</h2>
                        <p>Senior project manager for Example company</p>
                        <h5>
                          <a href="#">Read more</a>
                        </h5>
                      </div>
                      <div className="col-md-6">
                        <div className="young-manSec">
                          <img
                            src="images/Young-Man2.png"
                            className="young-manimg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

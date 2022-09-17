import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import Header from "../Layout/header";
import LoggedInHeader from "../Layout/loggedInHeader";
import Footer from "../Layout/footer";
import Testimonials from "../components/testimonials";

var servicesettings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 2000,
  slidesToShow: 6,
  slidesToScroll: 3,
  autoplay: true,
  pauseOnHover: false,
  padding: "60px",
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

function Home() {
  const user = useSelector((state) => state.user);
  const { userData } = user.user;
  return (
    <>
      {_.isEmpty(userData) ? <Header /> : <LoggedInHeader />}
      <section className="hero-section py-4 py-sm-5 mt-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <div className="top-bannerHead">
                <img src="images/top-logo.svg" alt="" />
                <h1>
                  find <span>pro</span>
                </h1>
                <h2>service providers</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center pt-2 pt-sm-4">
            <div className="col-md-6">
              <div className="top-banner-searchbar position-relative">
                <div className="row align-items-center">
                  <div className="col-md-7 col-8 pr-0 pr-sm-3">
                    <img
                      src="images/search.svg"
                      className="search-icon"
                      alt=""
                    />
                    <input
                      type="email"
                      className="form-control search-inpt"
                      placeholder="Search for service providers here…"
                    />
                  </div>
                  <div className="col-md-5 text-right col-4 pr-2 pr-sm-4">
                    <Link
                      to={
                        _.isEmpty(userData)
                          ? "/services-list"
                          : "/client-browse"
                      }
                      className="btn btn-login mr-2"
                    >
                      SEARCH
                    </Link>
                  </div>
                </div>
              </div>

              <div className="row mt-2 pl-3">
                <div className="col-md-12">
                  <ul>
                    <li className="first-text">Trending:</li>
                    <li>
                      <a href="#">AC Repair</a>
                    </li>
                    <li>
                      <a href="#">Architect</a>
                    </li>
                    <li>
                      <a href="#">Web Service</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center tophead-box">
            <div className="col-md-9">
              <div className="row noflexwrap">
                <div className="col-md-4 col-8">
                  <div className="product">
                    <div className="product-layer">
                      <h6>WHY PROTOCALL</h6>
                      <h4>
                        10<span>M+</span>
                      </h4>
                      <p>
                        community of <br /> pro service providers
                      </p>
                      <img src="images/arrow-right.svg" alt="" />
                    </div>
                    <div className="product-img">
                      <img src="images/PROTOCALL.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-8">
                  <div className="product pro2">
                    <div className="product-layer">
                      <h6 className="middle-cat">CATEGORIES</h6>
                      <h4>
                        150<span>+</span>
                      </h4>
                      <p>
                        wide variety of niche <br /> categories to search
                      </p>
                      <img src="images/arrow-right.svg" alt="" />
                    </div>
                    <div className="product-img">
                      <img src="images/CATEGORIES2.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-8">
                  <div className="product">
                    <div className="product-layer">
                      <h6>TRUST</h6>
                      <h4>
                        45<span>+</span>
                      </h4>
                      <p>
                        fortune 500 companies <br /> trust protocall
                      </p>
                      <img src="images/arrow-right.svg" alt="" />
                    </div>
                    <div className="product-img product-img-last">
                      <img src="images/TRUST1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pt-4 pb-4">
                <div className="col-md-12">
                  <img src="images/Online-pay.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 py-sm-5 service-providerSec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="service-head">
                <img src="images/sec-logo.svg" className="mb-2" alt="" />
                <h1>
                  service <span>provider</span>
                </h1>
                <h2>
                  trending categories{" "}
                  <span className="ml-2">
                    <a href="#">view all</a>
                  </span>{" "}
                  <img src="images/service-arrowright.svg" alt="" />
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt-3 mt-sm-5">
            <div className="col-md-12">
              <Slider className="servslider" {...servicesettings}>
                <div>
                  <div className="service-box">
                    <Link to="/">
                      <p>
                        {" "}
                        <span>+45%</span> since last week
                      </p>
                      <img src="images/Home-ac.svg" className="mt-2" alt="" />
                      <h2>AC Repair</h2>
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="service-box">
                    <Link to="/">
                      <p>
                        {" "}
                        <span>+45%</span> since last week
                      </p>
                      <img
                        src="images/Home-paint.svg"
                        className="mt-2"
                        alt=""
                      />
                      <h2>Home Painting</h2>
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="service-box">
                    <Link to="/">
                      <p>
                        {" "}
                        <span>+45%</span> since last week
                      </p>
                      <img
                        src="images/awesome-home.svg"
                        className="mt-2"
                        alt=""
                      />
                      <h2>Cleaning Services</h2>
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="service-box">
                    <Link to="/">
                      <p>
                        {" "}
                        <span>+45%</span> since last week
                      </p>
                      <img src="images/spray-can.svg" className="mt-2" alt="" />
                      <h2>Disinfections</h2>
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="service-box">
                    <Link to="/">
                      <p>
                        {" "}
                        <span>+45%</span> since last week
                      </p>
                      <img
                        src="images/material-tv.svg"
                        className="mt-2"
                        alt=""
                      />
                      <h2>Appliances Repair</h2>
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="service-box">
                    <Link to="/">
                      <p>
                        {" "}
                        <span>+45%</span> since last week
                      </p>
                      <img src="images/hammer.svg" className="mt-2" alt="" />
                      <h2>Carpentry</h2>
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="service-box">
                    <Link to="/">
                      <p>
                        {" "}
                        <span>+45%</span> since last week
                      </p>
                      <img src="images/Home-ac.svg" className="mt-2" alt="" />
                      <h2>AC Repair</h2>
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="service-box">
                    <Link to="/">
                      <p>
                        {" "}
                        <span>+45%</span> since last week
                      </p>
                      <img
                        src="images/Home-paint.svg"
                        className="mt-2"
                        alt=""
                      />
                      <h2>Home Painting</h2>
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="service-box">
                    <Link to="/">
                      <p>
                        {" "}
                        <span>+45%</span> since last week
                      </p>
                      <img
                        src="images/awesome-home.svg"
                        className="mt-2"
                        alt=""
                      />
                      <h2>Cleaning Services</h2>
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="service-box">
                    <Link to="/">
                      <p>
                        {" "}
                        <span>+45%</span> since last week
                      </p>
                      <img src="images/spray-can.svg" className="mt-2" alt="" />
                      <h2>Disinfections</h2>
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="service-box">
                    <Link to="/">
                      <p>
                        {" "}
                        <span>+45%</span> since last week
                      </p>
                      <img
                        src="images/material-tv.svg"
                        className="mt-2"
                        alt=""
                      />
                      <h2>Appliances Repair</h2>
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="service-box">
                    <Link to="/">
                      <p>
                        {" "}
                        <span>+45%</span> since last week
                      </p>
                      <img src="images/hammer.svg" className="mt-2" alt="" />
                      <h2>Carpentry</h2>
                    </Link>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 py-sm-5 protocall-section">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-end">
            <div className="col-md-6 pl-0 mb-3">
              <img src="images/protocallleft-img.png" alt="" />
            </div>
            <div className="col-md-6">
              <div className="row justify-content-center">
                <div className="col-md-9">
                  <div className="service-head">
                    <img src="images/sec-logo.svg" className="mb-2" alt="" />
                    <h1>
                      why <span>protocall ?</span>
                    </h1>
                    <h2>
                      <span>
                        <a href="#">read more about us</a>
                      </span>{" "}
                      <img src="images/service-arrowright.svg" alt="" />
                    </h2>
                    <p className="mt-2 mt-sm-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button
                      type="button"
                      className="btn btn-login mt-0 mt-sm-1"
                    >
                      READ MORE ABOUT US
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="top-waveprotocall">
        <img src="images/wave-topProtocall.svg" alt="" />
      </div>
      <section className="protocall-secbg">
        <div className="protocall-secbg-wave">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="row">
                  <div className="col-md-6">
                    <img src="images/puzzle-pieces2.png" alt="" />
                  </div>
                </div>
                <div className="row mt-4 mt-sm-5">
                  <div className="col-md-6 mb-4">
                    <div className="service-head">
                      <img src="images/sec-logo.svg" className="mb-2" alt="" />
                      <h1>
                        how <span>protocall works?</span>
                      </h1>
                      <h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </h6>
                      <h5>
                        Over <span>9k+</span> members
                      </h5>
                      <button
                        type="button"
                        className="btn btn-warning exlpore-btn mt-2 mt-sm-3"
                      >
                        EXPLORE THE COMMUNITY
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-3 col-4">
                        <div className="member-leftsecimg">
                          <img src="images/security.svg" alt="" />
                        </div>
                      </div>
                      <div className="col-md-9 pl-0 col-8">
                        <div className="member-secRight">
                          <div className="member-secborder"></div>
                          <h6>Signup with protocall</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-3 col-4">
                        <div className="member-leftsecimg">
                          <img src="images/user-tag.svg" alt="" />
                        </div>
                      </div>
                      <div className="col-md-9 pl-0 col-8">
                        <div className="member-secRight">
                          <div className="member-secborder"></div>
                          <h6>Explore the community</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-3 col-4">
                        <div className="member-leftsecimg">
                          <img src="images/user-tick.svg" alt="" />
                        </div>
                      </div>
                      <div className="col-md-9 pl-0 col-8">
                        <div className="member-secRight">
                          <div className="member-secborder"></div>
                          <h6>Hire a suitable service provider</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
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
      <div className="top-waveprotocall">
        <img src="images/wave-bottomProtocall.svg" alt="" />
      </div>
      <section className="position-relative py-4 py-sm-0">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="images/project-left.png" className="img-fluid" alt="" />
            </div>
            <div className="col-md-6">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="top-bannerHead">
                    <h1>
                      post a<span> project</span>
                    </h1>
                    <h2>in less than a minute</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button
                      type="button"
                      className="btn btn-login mt-0 mt-sm-2"
                    >
                      POST A PROJECT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rating-point mt-4">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="row">
                  <div className="col-md-4 col-4 text-center">
                    <h1>9k+</h1>
                    <p>
                      community <br /> members
                    </p>
                  </div>
                  <div className="col-md-4 col-4 text-center">
                    <h1>12k+</h1>
                    <p>
                      service <br /> categories
                    </p>
                  </div>
                  <div className="col-md-4 col-4 text-center">
                    <h1>20m+</h1>
                    <p>
                      Projects <br /> completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="images/project-girlRight.png"
          className="project-rightGirl d-none d-sm-block"
          alt=""
        />
      </section>

      <section className="py-4 py-sm-5">
        <Testimonials />
      </section>
      <Footer />
    </>
  );
}

export default Home;

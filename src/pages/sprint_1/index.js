import React from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";


var servicesettings = {
    dots: true,
    arrows: false, 
    infinite: false,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true, 
    pauseOnHover: false,
    padding: '60px', 
    responsive: [ 
      {
        breakpoint: 600,
        settings: { 
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  };

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
  

function Home() {

    return (
        <>
            <header>
                <div class="container">
                    <div class="tophead border-bottom">
                        <div class="row align-items-center">
                            <div class="col-md-3 col-5 moblogo">
                                <Link to="/"><img src="images/Logo.svg" alt="" /></Link>
                            </div>
                            <div class="col-md-9 col-7">
                                <ul class="tophead-right">
                                    <li class="d-none d-sm-block"><a href="/ServiceproviderSignupform">Register as a service provider</a></li>
                                    <li><a href="/login"><button type="button" class="btn btn-login">Login / Signup</button></a></li>
                                    <li class="d-none d-sm-inline-block"><a href="#"><button type="button" class="btn btn-outline-primary post-btn">Post a Project</button></a></li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </header>
            <section class="hero-section py-4 py-sm-5 mt-5">
                <div class="container">
                    <div class="row text-center">
                        <div class="col-md-12">
                            <div class="top-bannerHead">
                                <img src="images/top-logo.svg" alt="" />
                                <h1>find <span>pro</span></h1>
                                <h2>service providers</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center pt-2 pt-sm-4">
                        <div class="col-md-6">
                            <div class="top-banner-searchbar position-relative">
                                <div class="row align-items-center">
                                    <div class="col-md-7 col-8 pr-0 pr-sm-3">
                                        <img src="images/search.svg" class="search-icon" alt="" />
                                        <input type="email" class="form-control search-inpt" placeholder="Search for service providers here…" />
                                    </div>
                                    <div class="col-md-5 text-right col-4 pr-2 pr-sm-4">
                                        <button type="button" class="btn btn-login mr-2">SEARCH</button>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-2 pl-3">
                                <div class="col-md-12">
                                    <ul>
                                        <li class="first-text">Trending:</li>
                                        <li><a href="#">AC Repair</a></li>
                                        <li><a href="#">Architect</a></li>
                                        <li><a href="#">Web Service</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div class="container">
                    <div class="row justify-content-center tophead-box">
                        <div class="col-md-9">
                            <div class="row noflexwrap">
                                <div class="col-md-4 col-8">
                                    <div class="product">
                                        <div class="product-layer">
                                            <h6>WHY PROTOCALL</h6>
                                            <h4>10<span>M+</span></h4>
                                            <p>community of <br /> pro service providers</p>
                                            <img src="images/arrow-right.svg" alt="" />
                                        </div>
                                        <div class="product-img">
                                            <img src="images/PROTOCALL.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-8">
                                    <div class="product pro2">
                                        <div class="product-layer">
                                            <h6 class="middle-cat">CATEGORIES</h6>
                                            <h4>150<span>+</span></h4>
                                            <p>wide variety of niche <br /> categories to search</p>
                                            <img src="images/arrow-right.svg" alt="" />
                                        </div>
                                        <div class="product-img">
                                            <img src="images/CATEGORIES2.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-8">
                                    <div class="product">
                                        <div class="product-layer">
                                            <h6>TRUST</h6>
                                            <h4>45<span>+</span></h4>
                                            <p>fortune 500 companies <br /> trust protocall</p>
                                            <img src="images/arrow-right.svg" alt="" />
                                        </div>
                                        <div class="product-img product-img-last">
                                            <img src="images/TRUST1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row pt-4 pb-4">
                                <div class="col-md-12">
                                    <img src="images/Online-pay.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-4 py-sm-5 service-providerSec">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="service-head">
                                <img src="images/sec-logo.svg" class="mb-2" alt="" />
                                <h1>service <span>provider</span></h1>
                                <h2>trending categories  <span class="ml-2"><a href="#">view all</a></span> <img src="images/service-arrowright.svg" alt="" /></h2>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3 mt-sm-5">
                        <div class="col-md-12">
                            <Slider className="servslider" {...servicesettings}>
                                <div>
                                    <div class="service-box">
                                        <Link to="/">
                                            <p> <span>+45%</span> since last week</p>
                                            <img src="images/Home-ac.svg" class="mt-2" alt="" />
                                            <h2>AC Repair</h2>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <div class="service-box">
                                        <Link to="/">
                                            <p> <span>+45%</span> since last week</p>
                                            <img src="images/Home-paint.svg" class="mt-2" alt="" />
                                            <h2>Home Painting</h2>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <div class="service-box">
                                        <Link to="/">
                                            <p> <span>+45%</span> since last week</p>
                                            <img src="images/awesome-home.svg" class="mt-2" alt="" />
                                            <h2>Cleaning Services</h2>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <div class="service-box">
                                        <Link to="/">
                                            <p> <span>+45%</span> since last week</p>
                                            <img src="images/spray-can.svg" class="mt-2" alt="" />
                                            <h2>Disinfections</h2>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <div class="service-box">
                                        <Link to="/">
                                            <p> <span>+45%</span> since last week</p>
                                            <img src="images/material-tv.svg" class="mt-2" alt="" />
                                            <h2>Appliances Repair</h2>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <div class="service-box">
                                        <Link to="/">
                                            <p> <span>+45%</span> since last week</p>
                                            <img src="images/hammer.svg" class="mt-2" alt="" />
                                            <h2>Carpentry</h2>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <div class="service-box">
                                        <Link to="/">
                                            <p> <span>+45%</span> since last week</p>
                                            <img src="images/Home-ac.svg" class="mt-2" alt="" />
                                            <h2>AC Repair</h2>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <div class="service-box">
                                        <Link to="/">
                                            <p> <span>+45%</span> since last week</p>
                                            <img src="images/Home-paint.svg" class="mt-2" alt="" />
                                            <h2>Home Painting</h2>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <div class="service-box">
                                        <Link to="/">
                                            <p> <span>+45%</span> since last week</p>
                                            <img src="images/awesome-home.svg" class="mt-2" alt="" />
                                            <h2>Cleaning Services</h2>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <div class="service-box">
                                        <Link to="/">
                                            <p> <span>+45%</span> since last week</p>
                                            <img src="images/spray-can.svg" class="mt-2" alt="" />
                                            <h2>Disinfections</h2>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <div class="service-box">
                                        <Link to="/">
                                            <p> <span>+45%</span> since last week</p>
                                            <img src="images/material-tv.svg" class="mt-2" alt="" />
                                            <h2>Appliances Repair</h2>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <div class="service-box">
                                        <Link to="/">
                                            <p> <span>+45%</span> since last week</p>
                                            <img src="images/hammer.svg" class="mt-2" alt="" />
                                            <h2>Carpentry</h2>
                                        </Link>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-4 py-sm-5 protocall-section">
                <div class="container-fluid">
                    <div class="row align-items-center justify-content-end">
                        <div class="col-md-6 pl-0 mb-3">
                            <img src="images/protocallleft-img.png" alt="" />
                        </div>
                        <div class="col-md-6">
                            <div class="row justify-content-center">
                                <div class="col-md-9">
                                    <div class="service-head">
                                        <img src="images/sec-logo.svg" class="mb-2" alt="" />
                                        <h1>why <span>protocall ?</span></h1>
                                        <h2><span><a href="#">read more about us</a></span> <img src="images/service-arrowright.svg" alt="" /></h2>
                                        <p class="mt-2 mt-sm-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat  cupidatat non proident, sunt in culpa qui officia deserunt mollit  anim id est laborum.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat.</p>
                                        <button type="button" class="btn btn-login mt-0 mt-sm-1">READ MORE ABOUT US</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <div class="top-waveprotocall">
                <img src="images/wave-topProtocall.svg" alt="" />
            </div>
            <section class="protocall-secbg">
                <div class="protocall-secbg-wave">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-10">
                                <div class="row">
                                    <div class="col-md-6">
                                        <img src="images/puzzle-pieces2.png" alt="" />
                                    </div>
                                </div>
                                <div class="row mt-4 mt-sm-5">
                                    <div class="col-md-6 mb-4">
                                        <div class="service-head">
                                            <img src="images/sec-logo.svg" class="mb-2" alt="" />
                                            <h1>how <span>protocall works?</span></h1>
                                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea commodo consequat.</h6>
                                            <h5>Over <span>9k+</span> members</h5>
                                            <button type="button" class="btn btn-warning exlpore-btn mt-2 mt-sm-3">EXPLORE THE COMMUNITY</button>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="col-md-3 col-4">
                                                <div class="member-leftsecimg">
                                                    <img src="images/security.svg" alt="" />
                                                </div>
                                            </div>
                                            <div class="col-md-9 pl-0 col-8">
                                                <div class="member-secRight">
                                                    <div class="member-secborder"></div>
                                                    <h6>Signup with protocall</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-md-3 col-4">
                                                <div class="member-leftsecimg">
                                                    <img src="images/user-tag.svg" alt="" />
                                                </div>
                                            </div>
                                            <div class="col-md-9 pl-0 col-8">
                                                <div class="member-secRight">
                                                    <div class="member-secborder"></div>
                                                    <h6>Explore the community</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-md-3 col-4">
                                                <div class="member-leftsecimg">
                                                    <img src="images/user-tick.svg" alt="" />
                                                </div>
                                            </div>
                                            <div class="col-md-9 pl-0 col-8">
                                                <div class="member-secRight">
                                                    <div class="member-secborder"></div>
                                                    <h6>Hire a suitable service provider</h6>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua.</p>
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
            <div class="top-waveprotocall">
                <img src="images/wave-bottomProtocall.svg" alt="" />
            </div>
            <section class="position-relative py-4 py-sm-0">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="images/project-left.png" class="img-fluid" alt="" />
                        </div>
                        <div class="col-md-6">
                            <div class="row justify-content-center">
                                <div class="col-md-10">
                                    <div class="top-bannerHead">
                                        <h1>post a<span> project</span></h1>
                                        <h2>in less than a minute</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  ut aliquip
                                            ex ea commodo consequat.</p>
                                        <button type="button" class="btn btn-login mt-0 mt-sm-2">POST A PROJECT</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="rating-point mt-4">
                        <div class="row justify-content-center">
                            <div class="col-md-10">
                                <div class="row">
                                    <div class="col-md-4 col-4 text-center">
                                        <h1>9k+</h1>
                                        <p>community <br /> members</p>
                                    </div>
                                    <div class="col-md-4 col-4 text-center">
                                        <h1>12k+</h1>
                                        <p>service  <br /> categories</p>
                                    </div>
                                    <div class="col-md-4 col-4 text-center">
                                        <h1>20m+</h1>
                                        <p>Projects  <br /> completed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <img src="images/project-girlRight.png" class="project-rightGirl d-none d-sm-block" alt="" />
            </section>

            <section class="py-4 py-sm-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-10">
                            <div class="service-head ">
                                <img src="images/sec-logo.svg" class="mb-2" alt="" />
                                <h1>protocall <span>trusted by</span></h1>
                                <h2><span><a href="#">view more clients</a></span> <img src="images/service-arrowright.svg" alt="" /></h2>
                                <span class="logo-img">
                                    <img src="images/amazon-logo.svg" height="23px" alt="" /><img src="images/airbus-logo.svg" height="18px" alt="" /><img src="images/deloitte-logo.svg" height="18px" alt="" />
                                    <img src="images/google-logo.svg" height="25px" alt="" /> <br /> <img src="images/facebook-logo.svg" height="18px" class="mt-3" alt="" /><img src="images/Ibm-logo.svg" class="mt-3" height="24px" alt="" />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-md-10">
                            <div class="trusted-manSec">
                                <Slider className="clientslider" {...clientsettings}>
                                    <div>
                                        <div class="row justify-content-center">
                                            <div class="col-md-10">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="row">
                                                            <div class="col-md-3">
                                                                <img src="images/comma.svg" class="comma-img mb-2" alt="" />
                                                            </div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                            nisi ut aliquip ex ea commodo consequat.</p>
                                                        <h2>Alan Keech</h2>
                                                        <p>Senior project manager for Example company</p>
                                                        <h5><a href="#">Read more</a></h5>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="young-manSec">
                                                            <img src="images/Young-Man2.png" class="young-manimg" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="row justify-content-center">
                                            <div class="col-md-10">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="row">
                                                            <div class="col-md-3">
                                                                <img src="images/comma.svg" class="comma-img mb-2" alt="" />
                                                            </div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                            nisi ut aliquip ex ea commodo consequat.</p>
                                                        <h2>Alan Keech</h2>
                                                        <p>Senior project manager for Example company</p>
                                                        <h5><a href="#">Read more</a></h5>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="young-manSec">
                                                            <img src="images/Young-Man2.png" class="young-manimg" alt="" />
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
            </section>
            <section class="pb-4 pb-sm-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <img src="images/mobile-secimg.png" alt="" />
                    </div>
                </div>
            </div>
            </section>
            <section class="py-4 py-sm-5 footer-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <img src="images/Footer-logo.svg" alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore et <br />
                             dolore magna aliqua.Ut enim ad minim veniam, quis <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex <br /> ea commodo consequat.</p>
                    </div>
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-3 col-6 mb-2">
                                <h2>Service providers</h2>
                                <ul>
                                    <li><a href="#">Explore the community</a></li>
                                    <li><a href="#">Browse via category</a></li>
                                    <li><a href="#">List of companies</a></li>
                                    <li><a href="#">Register as service provider</a></li>
                                    <li><a href="#">Frequently asked questions</a></li>
                                </ul>
                            </div>
                            <div class="col-md-3 col-6 mb-2">
                                <h2>Clients</h2>
                                <ul>
                                    <li><a href="#">Post a project</a></li>
                                    <li><a href="#">Project status</a></li>
                                    <li><a href="#">Hire a service provider</a></li>
                                    <li><a href="#">Register as a client</a></li>
                                    <li><a href="#">Frequently asked questions</a></li>
                                </ul>
                            </div>
                            <div class="col-md-3 col-6">
                                <h2>Policies</h2>
                                <ul>
                                    <li><a href="#">Privacy policy</a></li>
                                    <li><a href="#">Code of conduct</a></li>
                                    <li><a href="#">Terms & conditions</a></li>
                                    <li><a href="#">Refund policy</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                            <div class="col-md-3 col-6">
                                <h2>Protocall apps</h2>
                               <div class="footbtn">
                                    <div class="row align-items-center">
                                        <div class="col-md-3 pr-0 col-3"><img src="images/Apple-foot.png" alt="" /></div>
                                        <div class="col-md-9 pl-2 col-9"><h5>Download on the <br /> App Store</h5></div>
                                    </div>
                               </div>

                               <div class="footbtn mt-3">
                                <div class="row align-items-center">
                                    <div class="col-md-3 pr-0 col-3"><img src="images/Google-Play.svg" alt="" /></div>
                                    <div class="col-md-9 pl-2 col-9"><h5>Download on the <br /> App Store</h5></div>
                                </div>
                           </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-3 mt-sm-5">
                    <div class="col-md-12">
                        <h6 class="border-top">© 2022. Protocall Services. All rights Reserved</h6>
                    </div>
                </div>
            </div>
        </section>


        </>
    );
}

export default Home;
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <section className="py-4 py-sm-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mobile-sec">
                <div className="row align-items-center">
                  <div className="col-md-4 offset-md-1">
                    <div className="mobile-secContent">
                      <img
                        src="images/mobile-seclogo.png"
                        className="circle-logo"
                        alt=""
                      />
                      <h1>Download the App</h1>
                      <p>
                        Explore the community, hire a service provider or post a
                        project
                      </p>
                      <div className="row mt-3">
                        <div className="col-md-6 col-6 pr-2">
                          <div className="footbtn mobilesec-btn">
                            <Link to="/">
                              <div className="row align-items-center">
                                <div className="col-md-3 pr-0 col-3">
                                  <img src="images/mobile-apple.svg" alt="" />
                                </div>
                                <div className="col-md-9 pl-2 col-9">
                                  <h5>
                                    Download on the <span>App Store</span>
                                  </h5>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="col-md-6 col-6 pl-2">
                          <div className="footbtn mobilesec-btn">
                            <Link to="/">
                              <div className="row align-items-center">
                                <div className="col-md-3 pr-0 col-3">
                                  <img
                                    src="images/mobile-playstore.svg"
                                    alt=""
                                  />
                                </div>
                                <div className="col-md-9 pl-2 col-9">
                                  <h5>
                                    Download on the <span>Play Store</span>
                                  </h5>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <img
                          src="images/mobile-net.png"
                          alt=""
                          className="down-cirle-botom"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-5 offset-md-1 mobile-rightbg">
                    <img src="images/mobile-right.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-1 mt-sm-4">
                <div className="col-md-10">
                  <img
                    src="images/mobilesec-bottomimg.png"
                    className="mb-3 mb-sm-0"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 py-sm-5 footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <img src="images/Footer-logo.svg" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit,
                sed do eiusmod tempor incididunt ut labore et <br />
                dolore magna aliqua.Ut enim ad minim veniam, quis <br /> nostrud
                exercitation ullamco laboris nisi ut aliquip ex <br /> ea
                commodo consequat.
              </p>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-3 col-6 mb-2">
                  <h2>Service providers</h2>
                  <ul>
                    <li>
                      <a href="#">Explore the community</a>
                    </li>
                    <li>
                      <a href="#">Browse via category</a>
                    </li>
                    <li>
                      <a href="#">List of companies</a>
                    </li>
                    <li>
                      <a href="#">Register as service provider</a>
                    </li>
                    <li>
                      <a href="#">Frequently asked questions</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-6 mb-2">
                  <h2>Clients</h2>
                  <ul>
                    <li>
                      <a href="#">Post a project</a>
                    </li>
                    <li>
                      <a href="#">Project status</a>
                    </li>
                    <li>
                      <a href="#">Hire a service provider</a>
                    </li>
                    <li>
                      <a href="#">Register as a client</a>
                    </li>
                    <li>
                      <a href="#">Frequently asked questions</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-6">
                  <h2>Policies</h2>
                  <ul>
                    <li>
                      <a href="#">Privacy policy</a>
                    </li>
                    <li>
                      <a href="#">Code of conduct</a>
                    </li>
                    <li>
                      <a href="#">Terms & conditions</a>
                    </li>
                    <li>
                      <a href="#">Refund policy</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-6">
                  <h2>Protocall apps</h2>
                  <div className="footbtn">
                    <div className="row align-items-center">
                      <div className="col-md-3 pr-0 col-3">
                        <img src="images/Apple-foot.png" alt="" />
                      </div>
                      <div className="col-md-9 pl-2 col-9">
                        <h5>
                          Download on the <br /> App Store
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="footbtn mt-3">
                    <div className="row align-items-center">
                      <div className="col-md-3 pr-0 col-3">
                        <img src="images/Google-Play.svg" alt="" />
                      </div>
                      <div className="col-md-9 pl-2 col-9">
                        <h5>
                          Download on the <br /> App Store
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3 mt-sm-5">
            <div className="col-md-12">
              <h6 className="border-top">
                © 2022. Protocall Services. All rights Reserved
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

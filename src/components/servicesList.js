import React from "react";

function ServicesList(props) {
  const { showNav } = props;

  return (
    <>
      <section className={`found-section ${showNav && "pb-4 pb-sm-5"}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="found-result-box">
                <div className="row">
                  <div className="col-md-3">
                    <div className="dash-img">
                      <img src="images/company-img.png" alt="" />
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="found-center">
                      <h6>
                        {" "}
                        <img
                          src="images/verify.png"
                          className="mr-2"
                          alt=""
                        />{" "}
                        COMPANY
                      </h6>
                      <h5>Drainage pipe blockage removal</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>

                      <div className="row">
                        <div className="col-md-6 col-12">
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

                        <div className="col-md-6 text-left text-sm-right">
                          <h4>Completed</h4>
                          <p>2,489</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="found-right">
                      <h5>FIXED COST</h5>
                      <h3>$750.00</h3>
                      <p className="mb-0 pt-2">Listed on</p>
                      <p className="date">12th Jun 2022</p>
                      <button type="button" className="btn btn-login">
                        VIEW DETAILS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="found-result-box">
                <div className="row">
                  <div className="col-md-3">
                    <div className="dash-img">
                      <img src="images/company-img1.png" alt="" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="found-center gay-textfond">
                      <h6>
                        {" "}
                        <img
                          src="images/gray-brwn.svg"
                          className="mr-2"
                          alt=""
                        />{" "}
                        INDIVIDUAL
                      </h6>
                      <h5>Drainage pipe blockage removal</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>

                      <div className="row">
                        <div className="col-md-6">
                          <img
                            src="images/john.png"
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

                        <div className="col-md-6 text-left text-sm-right ">
                          <h4>Completed</h4>
                          <p>2,489</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="found-right hourly-right">
                      <h5>HOURLY</h5>
                      <h3>$20.00 / hr</h3>
                      <p className="mb-0 pt-2">Listed on</p>
                      <p className="date">12th Jun 2022</p>
                      <button type="button" className="btn btn-login">
                        VIEW DETAILS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="found-result-box">
                <div className="row">
                  <div className="col-md-3">
                    <div className="dash-img">
                      <img src="images/company-img2.png" alt="" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="found-center">
                      <h6>
                        {" "}
                        <img
                          src="images/verify.png"
                          className="mr-2"
                          alt=""
                        />{" "}
                        COMPANY
                      </h6>
                      <h5>Drainage pipe blockage removal</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>

                      <div className="row">
                        <div className="col-md-6">
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

                        <div className="col-md-6 text-left text-sm-right">
                          <h4>Completed</h4>
                          <p>2,489</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="found-right start-right">
                      <h5>STARTING FROM</h5>
                      <h3>$299.00</h3>
                      <p className="mb-0 pt-2">Listed on</p>
                      <p className="date">12th Jun 2022</p>
                      <button type="button" className="btn btn-login">
                        VIEW DETAILS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="found-result-box">
                <div className="row">
                  <div className="col-md-3">
                    <div className="dash-img">
                      <img src="images/company-img4.png" alt="" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="found-center">
                      <h6>
                        {" "}
                        <img
                          src="images/verify.png"
                          className="mr-2"
                          alt=""
                        />{" "}
                        COMPANY
                      </h6>
                      <h5>Drainage pipe blockage removal</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>

                      <div className="row">
                        <div className="col-md-6">
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

                        <div className="col-md-6 text-left text-sm-right">
                          <h4>Completed</h4>
                          <p>2,489</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="found-right">
                      <h5>FIXED COST</h5>
                      <h3>$790.00</h3>
                      <p className="mb-0 pt-2">Listed on</p>
                      <p className="date">12th Jun 2022</p>
                      <button type="button" className="btn btn-login">
                        VIEW DETAILS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="found-result-box">
                <div className="row">
                  <div className="col-md-3">
                    <div className="dash-img">
                      <img src="images/company-img5.png" alt="" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="found-center">
                      <h6>
                        {" "}
                        <img
                          src="images/verify.png"
                          className="mr-2"
                          alt=""
                        />{" "}
                        VERIFIED
                      </h6>
                      <h5>Drainage pipe blockage removal</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>

                      <div className="row">
                        <div className="col-md-6">
                          <img
                            src="images/pro-userpic.jpg"
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

                        <div className="col-md-6 text-left text-sm-right">
                          <h4>Completed</h4>
                          <p>2,489</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="found-right">
                      <h5>FIXED COST</h5>
                      <h3>$750.00</h3>
                      <p className="mb-0 pt-2">Listed on</p>
                      <p className="date">12th Jun 2022</p>
                      <button type="button" className="btn btn-login">
                        VIEW DETAILS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="found-result-box">
                <div className="row">
                  <div className="col-md-3">
                    <div className="dash-img">
                      <img src="images/company-img6.png" alt="" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="found-center">
                      <h6>
                        {" "}
                        <img
                          src="images/verify.png"
                          className="mr-2"
                          alt=""
                        />{" "}
                        VERIFIED
                      </h6>
                      <h5>Drainage pipe blockage removal</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>

                      <div className="row">
                        <div className="col-md-6">
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

                        <div className="col-md-6 text-left text-sm-right">
                          <h4>Completed</h4>
                          <p>2,489</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="found-right">
                      <h5>FIXED COST</h5>
                      <h3>$499.00</h3>
                      <p className="mb-0 pt-2">Listed on</p>
                      <p className="date">12th Jun 2022</p>
                      <button type="button" className="btn btn-login">
                        VIEW DETAILS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-12">
              <nav aria-label="...">
                <ul className="pagination pagination-lg">
                  <li className="page-item active">
                    <a href="#" className="page-link">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link newpage-link" href="#">
                      .........
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      11
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesList;

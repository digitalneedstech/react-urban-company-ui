import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { fetchData } from "../redux/helpers";

function ServicesList(props) {
  const { showNav, setCount } = props;
  const [services, setServices] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await fetchData("/services", "GET");
      console.log(response);
      if (!_.isEmpty(response)) {
        setServices(response.services);
        setCount(response.services.length);
      }
    })();
  }, []);

  return (
    <>
      <section className={`found-section ${showNav && "pb-4 pb-sm-5"}`}>
        <div className="container">
          <div className="row">
            {_.map(services, (service, key) => (
              <div className="col-md-12" key={key}>
                <div className="found-result-box">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="dash-img">
                        <img
                          src={
                            service.images
                              ? service.images
                              : "images/company-img.png"
                          }
                          alt=""
                        />
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
                        <h5>{service.headline}</h5>
                        <p>{service.description}</p>

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
                        <Link
                          to="/client-browse-details"
                          state={{ id: service.id, ownerId: service.ownerId }}
                          className="btn btn-login"
                        >
                          VIEW DETAILS
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="row mt-4">
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
          </div> */}
        </div>
      </section>
    </>
  );
}

export default ServicesList;

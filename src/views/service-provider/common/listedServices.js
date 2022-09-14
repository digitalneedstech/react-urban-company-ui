import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchData } from "../../../redux/helpers";

export default function ListedServices() {
  const user = useSelector((state) => state.user);
  const { userData } = user.user;
  const [services, setServices] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await fetchData(
        `/serviceProviders/${userData.id}/services`,
        "GET"
      );
      console.log(response);
      if (!_.isEmpty(response)) {
        setServices(response.services);
      }
    })();
  }, []);

  return (
    <>
      {_.map(services, (service, index) => (
        <div className="service-list mt-3" key={index}>
          <div className="row  align-items-center">
            <div className="col-md-1 col-4">
              <div className="service-itemImg">
                <img src="images/listed-img.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-5 col-8 pl-0">
              <div className="service-item">
                <p>
                  #{service.id}{" "}
                  <span className="servie-itemnmb">12th Jun 2022</span>
                  <span
                    className={`service-itemdraft  ${
                      service.type == "Hourly"
                        ? "service-itemhourly"
                        : service.type == "Fixed"
                        ? "serviceitemyfixed"
                        : ""
                    }`}
                  >
                    {service.type}
                  </span>
                </p>
                <h6>{service.headline}</h6>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-publicSec">
                <div className="row">
                  <div className="col-md-3 col-6 order-4 order-sm-1 mt-3 mt-sm-0">
                    <div className="toogleSwitch">
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={!!service.isPublished}
                          onChange={() => {}}
                        />
                        <div className="slider round">
                          <span className="swactive">ACTIVE</span>
                          <span className="swinactive">INACTIVE</span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-1 text-center text-sm-right pr-3 pr-sm-0 pl-0  col-4  order-1 order-sm-2">
                    <h4>Cost</h4>
                    <h5>{service.charge}</h5>
                  </div>
                  <div className="col-md-2 text-center text-sm-right pr-3 pr-sm-0   col-4 order-2 order-sm-3">
                    <h4>Earned</h4>
                    <h5>$1,200.00</h5>
                  </div>
                  <div className="col-md-2 text-center text-sm-right pr-3 pr-sm-0 col-4  pl-sm-3 order-3 order-sm-4">
                    <h4>Booked</h4>
                    <h5>10</h5>
                  </div>
                  <div className="col-md-4 text-right col-6 order-5 order-sm-5 mt-3 mt-sm-0">
                    {!!service.isPublished ? (
                      <Link
                        to={"/listed-service-details"}
                        state={{
                          id: service.id,
                          type: "Listed Services",
                        }}
                        className="btn btn-login new-loginbtn text-uppercase"
                      >
                        View Details
                      </Link>
                    ) : (
                      <button className="uploadBtn text-uppercase">
                        PUBLISH
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* <div className="row mt-4 mt-sm-5">
        <div className="col-md-12">
          <nav aria-label="...">
            <ul className="pagination pagination-lg">
              <li className="page-item active" aria-current="page">
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
    </>
  );
}

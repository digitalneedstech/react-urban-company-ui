import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchData } from "../../../../redux/helpers";
import ActiveInactive from "../activeInactive";

var moment = require("moment");

export default function ServicesHistory() {
  const user = useSelector((state) => state.user);
  const { userData } = user.user;
  const [services, setServices] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await fetchData(
        `/serviceProviders/${userData.id}/services?type=Past`,
        "GET"
      );
      console.log(response);
      if (!_.isEmpty(response)) {
        setServices(response.bookings);
      }
    })();
  }, []);

  return (
    <>
      {_.map(services, (service, index) => (
        <div className="service-list mt-3" key={index}>
          <div className="row  align-items-center">
            <div className="col-md-1 col-4">
            <div className="service-itemschedul-text">
                    <h6>{moment(service.creationDate).format("DD")}</h6>
                    <p>{moment(service.creationDate).format("MMM")}</p>
                </div>
            </div>
            <div className="col-md-4 col-8 pl-0">
              <div className="service-item">
                <p>
                  #{service.id}{" "}
                  <span
                    className={`service-itemdraft ${
                      service.serviceState != "DRAFT" && service.serviceType == "Hourly"
                        ? "service-itemhourly"
                        : service.serviceState != "DRAFT" && service.serviceType == "Fixed"
                        ? "serviceitemyfixed"
                        : ""
                    }`}
                  >
                    {service.serviceState == "DRAFT" ? service.serviceState : service.serviceType}
                  </span>
                </p>
                <h6>{service.headline}</h6>
              </div>
            </div>
            <div className="col-md-7">
              <div
                className={`service-publicSec ${
                  service.serviceType == "Hourly" ? "service-publicpink" : ""
                }`}
              >
                <div className="row">
                <div class="col-md-4 col-12  mb-2 mb-sm-0 pr-0">
                                            <div class="serviceListeddetails-head booking-confrd ">
                                                <img src={service.serviceProviderImage} class="play-img" alt="" />
                                                <p>{service.serviceProviderName}</p>
                                                <h6 class="d-flex align-items-center"><img src="images/Iconly-Bold-Star.svg" class="mr-1" alt="" height="15px" /> <span class="gorden-ratetext  mr-1"> 4.7 </span> (147 reviews)</h6>
                                            </div>
                                        </div>
                  <div className="col-md-1 text-center text-sm-right pr-3 pr-sm-0 pl-0  col-4  order-1 order-sm-2">
                    <h4>Total Cost</h4>
                    <h5>{service.serviceCharge}</h5>
                  </div>
                  <div className="col-md-2 text-center text-sm-right pr-3 pr-sm-0   col-4 order-2 order-sm-3">
                    <h4>Earned</h4>
                    <h5>$1,200.00</h5>
                  </div>
                  <div className="col-md-2 text-center text-sm-right pr-3 pr-sm-0 col-4  pl-sm-3 order-3 order-sm-4">
                    <h4>Pending</h4>
                    <h5>10</h5>
                  </div>
                  <div className="col-md-3 text-right col-6 order-5 order-sm-5 mt-3 mt-sm-0">
                  <Link
                        to={"/listed-service-details"}
                        state={{
                          id: service.serviceId,
                          type: "Listed Services",
                        }}
                        className="btn btn-login new-loginbtn text-uppercase"
                      >
                        View Details
                      </Link>
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

import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchData } from "../../../redux/helpers";
var moment = require("moment");

export default function PastBookings() {
  const user = useSelector((state) => state.user);
  const { userData } = user.user;
  const [bookings, setBookings] = useState({});

  useEffect(() => {
    (async () => {
      let response = await fetchData(`/clients/${userData.id}/bookings`, "GET");

      if (!_.isEmpty(response)) {
        let filteredBookings = _.filter(
          response.bookings,
          (o) => o.status == "Past"
        );
        let groupedByMonth = _.groupBy(filteredBookings, function (item) {
          return moment(item.date.substring(0, 7)).format("MMM YYYY");
        });
        setBookings(groupedByMonth);
      }
    })();
  }, []);
  console.log(bookings);
  return (
    <>
      {_.map(bookings, (group, index) => (
        <div key={index}>
          <div className="row mt-3">
            <div className="col-md-12">
              <h6 className="services-labeltext">{index}</h6>
            </div>
          </div>
          {_.map(group, (booking, key) => (
            <div className="service-list mt-3" key={key}>
              <div className="row  align-items-center">
                <div className="col-md-1 col-4">
                  <div className="service-itemschedul-text">
                    <h6>{moment(booking.date).format("DD")}</h6>
                    <p>{moment(booking.date).format("MMM")}</p>
                  </div>
                </div>
                <div className="col-md-4 col-8 pl-0">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <div className="service-item">
                        <p>
                          #{booking.id}{" "}
                          <span
                            className={`service-itemdraft ${
                              booking.serviceType == "Hourly"
                                ? "service-itemhourly"
                                : booking.serviceType == "Fixed"
                                ? "serviceitemyfixed"
                                : ""
                            }`}
                          >
                            {booking.serviceType}
                          </span>
                        </p>
                        <h6>{booking.serviceHeadline}</h6>
                      </div>
                    </div>
                    <div className="col-md-4 text-right d-none d-sm-block">
                      <h2 className="chat-textred">
                        <img
                          src="images/chat-imgscheduled.svg"
                          alt=""
                          height="40px"
                        />
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div
                    className={`service-publicSec ${
                      booking.serviceType == "Hourly"
                        ? "service-publicpink"
                        : ""
                    }`}
                  >
                    <div class="row">
                      <div class="col-md-4 col-12  mb-2 mb-sm-0 pr-0">
                        <div class="serviceListeddetails-head booking-confrd ">
                          <img
                            src="images/playbuzz-img.png"
                            class="play-img"
                            alt=""
                          />
                          <p>Gordan Entreprise Inc.</p>
                          <h6 class="d-flex align-items-center">
                            <img
                              src="images/Iconly-Bold-Star.svg"
                              class="mr-1"
                              alt=""
                              height="15px"
                            />{" "}
                            <span class="gorden-ratetext  mr-1"> 4.7 </span>{" "}
                            (147 reviews)
                          </h6>
                        </div>
                      </div>
                      <div class="col-md-2 text-center text-sm-right  pr-3 pr-sm-0 pl-3 pl-sm-0  col-3 mb-2 mb-sm-0">
                        <h4>Paid</h4>
                        <h5>$750.00</h5>
                      </div>
                      <div class="col-md-3 text-center text-sm-right pr-0 pl-sm-3   col-4 mb-2 mb-sm-0 ">
                        <h4>Earned</h4>
                        <h5>12th Jun 2022</h5>
                      </div>
                      <div class="col-md-3 text-right col-5 mb-2 mb-sm-0 ">
                        <Link
                          to="/bookings-details"
                          state={{ booking }}
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
        </div>
      ))}
    </>
  );
}

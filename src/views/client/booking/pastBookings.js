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
          (o) => o.status == "Past" && o.date!=null
        );
        let groupedByMonth = _.groupBy(filteredBookings, function (item) {
          return moment(item.creationDate.substring(0, 7)).format("MMM YYYY");
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
                            src={booking.serviceProviderImage}
                            class="play-img"
                            alt=""
                          />
                          <p>{booking.serviceProviderName}</p>
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
                      <div className="col-md-5 mb-2 mb-sm-0 d-flex justify-content-between">
                        <div className="text-sm-right text-center">
                          <h4>Total cost</h4>
                          <h5>${booking.totalCost}</h5>
                        </div>
                        <div className="text-sm-right text-center">
                          <h4>Paid</h4>
                          <h5>${booking.paidCost}</h5>
                        </div>
                        <div className="text-sm-right text-center">
                          <h4>Pending</h4>
                          <h5>
                            <span className="padding-redtext">${booking.pendingCost}</span>
                          </h5>
                        </div>
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

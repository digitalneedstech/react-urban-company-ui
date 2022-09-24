import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchData } from "../../../redux/helpers";
var moment = require("moment");

export default function ListedBookings() {
  const user = useSelector((state) => state.user);
  const { userData } = user.user;
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await fetchData(
        `/clients/${userData.id}/bookings`,
        "GET"   
      );
      console.log(response);
      if (!_.isEmpty(response)) {
        setBookings(response.bookings);
      }
    })();
  }, []);

  return (
    <>
      {_.map(bookings, (booking, index) => (
        <div className="service-list mt-3" key={index}>
          <div className="row  align-items-center">
            <div className="col-md-1 col-4">
              <div className="service-itemImg">
                <img
                  src={booking.images ? booking.images : "images/no-image.png"}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-5 col-8 pl-0">
              <div className="service-item">
                <p>
                  #{booking.id}{" "}
                  <span className="servie-itemnmb">
                    {moment(
                      booking.date ? booking.date : new Date()
                    ).format("Do MMM YYYY")}
                  </span>
                  <span
                    className={`service-itemdraft ${
                      booking.service.type == "Hourly"
                        ? "service-itemhourly"
                        : booking.service.type == "Fixed"
                        ? "serviceitemyfixed"
                        : ""
                    }`}
                  >
                    {booking.service.type}
                  </span>
                </p>
                <h6>{booking.service.headline}</h6>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className={`service-publicSec ${
                  booking.service.type == "Hourly" ? "service-publicpink" : ""
                }`}
              >
                <div className="row">
                  <div className="col-md-1 text-center text-sm-right pr-3 pr-sm-0 pl-0  col-4  order-1 order-sm-2">
                    <h4>Cost</h4>
                    <h5>{booking.service.charge}</h5>
                  </div>
                  <div className="col-md-2 text-center text-sm-right pr-3 pr-sm-0   col-4 order-2 order-sm-3">
                    <h4>Paid</h4>
                    <h5>$1,200.00</h5>
                  </div>
                  <div className="col-md-2 text-center text-sm-right pr-3 pr-sm-0 col-4  pl-sm-3 order-3 order-sm-4">
                    <h4>Pending</h4>
                    <h5>$1,200.00</h5>
                  </div>
                  <div className="col-md-4 text-right col-6 order-5 order-sm-5 mt-3 mt-sm-0">
                    {
                      <Link
                        to={"/listed-booking-details"}
                        state={{
                          id: booking.service.id,
                          booking:booking,
                          type: "Listed Services",
                        }}
                        className="btn btn-login new-loginbtn text-uppercase"
                      >
                        View Details
                      </Link>}
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

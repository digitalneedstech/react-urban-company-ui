import React from "react";
import { Link } from "react-router-dom";

var moment = require("moment");

function Scheduled(props) {
  const { booking, service } = props;
  return (
    <>
      <div className="col-md-4">
        <div className="position-stikyfixedbox">
          <div className="fixed-costbox">
            <div className="booked-forbox">
              <p>Booked for</p>
              <h6>
                {moment(booking.date ? booking.date : new Date()).format(
                  "Do MMM YYYY"
                )}{" "}
                at 3:30pm
              </h6>
            </div>

            <div className="row align-items-end">
              <div className="col-md-5 col-6">
                <h2>{service.type} COST</h2>
                <h1>${service.charge}</h1>
                <p>Listed on</p>
                <h6>
                  {moment(
                    service.create_date ? service.create_date : new Date()
                  ).format("Do MMM YYYY")}
                </h6>
              </div>
              <div className="col-md-7 col-6 text-right">
                <Link
                  to="/calender"
                  state={{ bookingData: booking }}
                  className="btn btn-danger remove-btn"
                >
                  RE-SECHEDULE
                </Link>
              </div>
            </div>

            <h3>
              Client have paid $20 till now. <span>Cancel this booking</span>
            </h3>

            <div className="row mt-3 mt-sm-4">
              <div className="col-md-4 col-3">
                <h4>Duration</h4>
              </div>
              <div className="col-md-8 text-right col-9">
                <h4>Depends on the scope of work</h4>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-5 col-5">
                <h4>Visiting charges</h4>
              </div>
              <div className="col-md-7 text-right col-7">
                <h4>${service.visitingCharges}</h4>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6 col-8">
                <h4>Cancellation charges</h4>
                <h5>24hrs. after booking the slot</h5>
              </div>
              <div className="col-md-6 text-right col-4">
                <h4>${service.cancellationCharges}</h4>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-8 col-8">
                <h4>Applicable taxes (@10%)</h4>
              </div>
              <div className="col-md-4 text-right col-4">
                <h4>$75</h4>
              </div>
            </div>
          </div>
          <div className="Conveniencebox service-head p-3 mt-3">
            <div className="row">
              <div className="col-md-2 col-2">
                <img src="images/receipt-item.svg" />
              </div>

              <div className="col-md-10 col-10 ml-0 pl-0 convenience-bg">
                <h4>Convenience fee</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <h2>
                  <span>
                    <a href="#">read more</a>
                  </span>{" "}
                  <img src="images/service-arrowright.svg" alt="" />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Scheduled;

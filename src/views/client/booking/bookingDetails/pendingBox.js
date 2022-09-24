import React from "react";
import { Modal } from "react-bootstrap";

var moment = require("moment");

function Pending(props) {
  const { booking, service } = props;
  return (
    <>
      <div class="col-md-4">
        <div class="position-stikyfixedbox">
          <div class="fixed-costbox">
            <div class="booked-forbox paymentpendingdetailsboxright">
              <p>Ended on</p>
              <h6>
                {moment(booking.date ? booking.date : new Date()).format(
                  "Do MMM YYYY"
                )}{" "}
                at 5:45pm
              </h6>
            </div>

            <div class="row align-items-end">
              <div class="col-md-12 mb-3">
                <h2>INVOICE</h2>
              </div>
              <div class="col-md-8 col-8">
                <h1>${service.charge}</h1>
                <button type="button" class="btn btn-login mt-2">
                  PAY ${service.charge} NOW
                </button>
              </div>
            </div>

            <div class="dashed-borderfixedbox mt-4"></div>

            <div class="row  pt-3">
              <div class="col-md-4 col-3">
                <h4>Duration</h4>
              </div>
              <div class="col-md-8 text-right col-9">
                <h4>3 hrs 15 min</h4>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-5 col-5">
                <h4>Visiting charges</h4>
              </div>
              <div class="col-md-7 text-right col-7">
                <h4>- ${service.visitingCharges}</h4>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-8 col-8">
                <h4>Extra (by service provider)</h4>
              </div>
              <div class="col-md-4 text-right col-4">
                <h4>$288.00</h4>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-8 col-8">
                <h4>Applicable taxes (@10%)</h4>
                <h5>GST, VAT all incl.</h5>
              </div>
              <div class="col-md-4 text-right col-4">
                <h4>$75.00</h4>
              </div>
            </div>
          </div>

          <div class="assured-secbox  mt-3">
            <div class="paymentpendingassuredbox">
              <div class="row align-items-center">
                <div class="col-md-2 col-3">
                  <img src="images/tickbox.svg" class="" alt="" />
                </div>
                <div class="col-md-6 pl-0 col-9">
                  <h1>Assured by protocall</h1>
                  <h6>
                    <a href="#">
                      read more{" "}
                      <img src="images/right-as.svg" height="15px" alt="" />
                    </a>
                  </h6>
                </div>
                <div class="col-md-4 col-6  pl-3 pl-sm-0">
                  <img src="images/green-logo.svg" alt="" />
                  <h5>certified</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pending;

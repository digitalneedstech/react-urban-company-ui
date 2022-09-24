import React from "react";
import Header from "../../../Layout/loggedInHeader";
import ListedBookings from "./listedBookings";


function BookingDashboard() {
  return (
    <>
      <Header showRegisterButton={true} showNav={true} />

      <section className="pb-4 pb-sm-5">
        <div className="container">
          <div className="row mt-2 mt-sm-3">
            <div className="col-md-12">
              <button
                type="button"
                className="btn btn-outline-dark mayment-btn mr-3 mb-2"
              >
                SCHEDULED{" "}
                <span className="notification-numb btn-notification">2</span>
              </button>
              <button
                type="button"
                className="btn btn-outline-dark mayment-btn mr-3 mb-2"
              >
                PAYMENT PENDING{" "}
                <span className="notification-numb btn-notification2">3</span>
              </button>
              <button
                type="button"
                className="btn btn-outline-dark mayment-btn mr-3 mb-2"
              >
                PAST BOOKINGS
              </button>
            </div>
          </div>

          <ListedBookings />
        </div>
      </section>
    </>
  );
}

export default BookingDashboard;

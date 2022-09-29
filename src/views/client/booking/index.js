import React, { useState,useEffect } from "react";
import Header from "../../../Layout/loggedInHeader";
import ScheduledBookings from "./scheduledBookings";
import PastBookings from "./pastBookings";
import PendingBookings from "./pendingBookings";
import Footer from "../../../Layout/footer";

function BookingDashboard() {
  const [tab, setTab] = useState("scheduled");
  useEffect(()=>{
    if(localStorage.getItem("bookings_tab")!=undefined || localStorage.getItem("bookings_tab")!=null
    || localStorage.getItem("bookings_tab")!=""){
      setTab(localStorage.getItem("bookings_tab"));
    }else{
      setTab("listed");
    }
  },[]);
  return (
    <>
      <Header showRegisterButton={true} showNav={true} />

      <section className="pb-4 pb-sm-5">
        <div className="container">
          <div className="row mt-2 mt-sm-3">
            <div className="col-md-12">
              <button
                type="button"
                className={`btn btn-outline-dark mayment-btn mr-3 mb-2 ${
                  tab == "scheduled" ? "active" : ""
                }`}
                onClick={() => {
                  localStorage.setItem("bookings_tab","scheduled");
                  setTab("scheduled");
                }}
              >
                SCHEDULED{" "}
                <span className="notification-numb btn-notification">2</span>
              </button>
              <button
                type="button"
                className={`btn btn-outline-dark mayment-btn mr-3 mb-2 ${
                  tab == "pending" ? "active" : ""
                }`}
                onClick={() => {
                  localStorage.setItem("bookings_tab","pending");
                  setTab("pending");
                }}
              >
                PAYMENT PENDING{" "}
                <span className="notification-numb btn-notification2">3</span>
              </button>
              <button
                type="button"
                className={`btn btn-outline-dark mayment-btn mr-3 mb-2 ${
                  tab == "past" ? "active" : ""
                }`}
                onClick={() => {
                  localStorage.setItem("bookings_tab","past");
                  setTab("past");
                }}
              >
                PAST BOOKINGS
              </button>
            </div>
          </div>
          {tab == "scheduled" ? (
            <ScheduledBookings />
          ) : tab == "pending" ? (
            <PendingBookings />
          ) : tab == "past" ? (
            <PastBookings />
          ) : null}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BookingDashboard;

import React,{useState} from "react";
import { Link } from "react-router-dom";
import Footer from "../../Layout/footer";
import Header from "../../Layout/loggedInHeader";
import ScheduledServices from "./common/booking/scheduled";
import ServicesHistory from "./common/booking/serviceHistory";
import ListedServices from "./common/listedServices";

function ServicesDashboard() {
  const [tab, setTab] = useState("scheduled");
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
                onClick={() => {
                  setTab("scheduled");
                }}
              >
                SCHEDULED{" "}
                <span className="notification-numb btn-notification">2</span>
              </button>
              <button
                type="button"
                className="btn btn-outline-dark mayment-btn mr-3 mb-2"
                onClick={() => {
                  setTab("pending");
                }}
              >
                PAYMENT PENDING{" "}
                <span className="notification-numb btn-notification2">3</span>
              </button>
              <button
                type="button"
                className="btn btn-outline-dark mayment-btn mr-3 mb-2"
                onClick={() => {
                  setTab("serviceHistory");
                }}
              >
                SERVICE HISTORY
              </button>
              <button className="uploadBtn mr-3 mb-2" 
              onClick={() => {
                setTab("listed");
              }}>
                LISTED SERVICES</button>
              <Link
                to="/add-new-service"
                className="btn btn-outline-dark mayment-btn mb-2 "
              >
                ADD NEW SERVICE
              </Link>
            </div>
          </div>
          {tab == "scheduled" ? (
            <ScheduledServices />
          ) : tab == "pending" ? (
            <ScheduledServices />
          ) : tab == "past" ? (
            <ServicesHistory />
          ) : tab == "listed" ? (
            <ListedServices />
          ) :null}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ServicesDashboard;

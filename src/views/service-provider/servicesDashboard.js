import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Layout/loggedInHeader";
import ListedServices from "./common/listedServices";

function ServicesDashboard() {
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
                SERVICE HISTORY
              </button>
              <button className="uploadBtn mr-3 mb-2">LISTED SERVICES</button>
              <Link
                to="/add-new-service"
                className="btn btn-outline-dark mayment-btn mb-2 "
              >
                ADD NEW SERVICE
              </Link>
            </div>
          </div>

          <ListedServices />
        </div>
      </section>
    </>
  );
}

export default ServicesDashboard;

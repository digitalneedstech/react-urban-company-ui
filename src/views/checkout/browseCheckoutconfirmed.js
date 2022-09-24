import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Layout/footer";
import Header from "../../Layout/loggedInHeader";

function ClientbrowsecheckoutConfirmed() {
  return (
    <>
      <Header showRegisterButton={true} />

      <section className="client-section  client-sectionconfirmed position-relative">
        <div className="login-img d-none d-md-block">
          <div className="container-fluid h-100">
            <div className="row h-100">
              <div className="col-md-3 order-sm-2 pr-0 h-100">
                <img
                  src="images/confirmed-right.png"
                  className="loginbg"
                  alt=""
                />
              </div>
              <div className="col-md-8 order-sm-1"></div>
            </div>
          </div>
        </div>

        <div className="container min-heighvh position-relative">
          <div className="row pt-4">
            <div className="col-md-12 mt-2 pt-5 mt-sm-5 position-inherit">
              <h1>
                booking <span>confirmed</span>
              </h1>
              <h2>thank you</h2>

              <div className="booking-confirmed">
                <div className="row mt-3 mt-sm-4">
                  <div className="col-md-4">
                    <p>
                      Your slot have been confirmed with the booking ID#
                      PR0000238
                    </p>
                    <h6>
                      If you wish to cancel the booking, please use the my
                      bookings link below and click on cancel this booking.
                    </h6>
                    <div className="border-bottom mt-3 mt-sm-4"></div>

                    <div className="row align-items-center mt-3 ">
                      <div className="col-md-8 col-8">
                        <h4>Service</h4>
                        <h5>Drainage pipe blockage removal</h5>
                      </div>
                      <div className="col-md-4 col-4">
                        <h1>$750.00</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="serviceListeddetails-head booking-confrd mt-3 border-bottom pb-4">
                    <img
                      src="images/playbuzz-img.png"
                      className="play-img"
                      alt=""
                    />
                    <p>Gordan Entreprise Inc.</p>
                    <h6 className="d-flex align-items-center">
                      <img
                        src="images/Iconly-Bold-Star.svg"
                        className="mr-1"
                        alt=""
                        height="15px"
                      />{" "}
                      4.7 (147 reviews)
                    </h6>
                  </div>
                </div>
              </div>

              <div className="row mt-4 mb-4">
                <div className="col-md-12">
                  <button type="button" className="btn btn-login ">
                    MY BOOKINGS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ClientbrowsecheckoutConfirmed;

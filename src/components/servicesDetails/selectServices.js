import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function SelectServices() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="position-stikyfixedbox">
        <div className="fixed-costbox">
          <div className="row align-items-end">
            <div className="col-md-5 col-6">
              <h2>FIXED COST</h2>
              <h1>$750.00</h1>
              <p>Listed on</p>
              <h6>12th Jun 2022</h6>
            </div>
            <div className="col-md-7 col-6">
              <button
                type="button"
                className="btn btn-login"
                onClick={handleShow}
              >
                SELECT SERVICES
              </button>
            </div>
          </div>

          <h3>Pay $20 now and rest to pro after the service.</h3>

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
              <h4>$20</h4>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6 col-8">
              <h4>Cancellation charges</h4>
              <h5>24hrs. after booking the slot</h5>
            </div>
            <div className="col-md-6 text-right col-4">
              <h4>$40</h4>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
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
      {/*  */}

      <Modal
        show={show}
        onHide={handleClose}
        className="filter-popup modal-dialog-slideout"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="service-head">
              <img src="images/popup-logo.svg" height="45px" alt="" />
              <h1>
                select <span>services</span>
              </h1>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mt-2">
            <div className="col-md-7 col-7 pr-0">
              <div className="wash-installationSelect">
                <h6>Wash basin installation</h6>
                <p>$100 / installation</p>
              </div>
            </div>
            <div className="col-md-5  col-5">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text lfet-btnpopup">
                    <button type="button" className="btn popup-btnint">
                      -
                    </button>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control popup-input"
                  placeholder="2"
                />
                <div className="input-group-append">
                  <span className="input-group-text righ-btnpopup">
                    <button
                      type="button"
                      className="btn  popup-btnint popup-btnright"
                    >
                      +
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-7 pr-0 col-7">
              <div className="wash-installationSelect">
                <h6>Hand faucet installation</h6>
                <p>$100 / installation</p>
              </div>
            </div>
            <div className="col-md-5 col-5">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text lfet-btnpopup">
                    <button type="button" className="btn popup-btnint">
                      -
                    </button>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control popup-input"
                  placeholder="2"
                />
                <div className="input-group-append">
                  <span className="input-group-text righ-btnpopup">
                    <button
                      type="button"
                      className="btn  popup-btnint popup-btnright"
                    >
                      +
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-7 pr-0 col-7">
              <div className="wash-installationSelect">
                <h6>Toilet installation</h6>
                <p>$250 / installation</p>
              </div>
            </div>
            <div className="col-md-5 col-5">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text lfet-btnpopup">
                    <button type="button" className="btn popup-btnint">
                      -
                    </button>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control popup-input"
                  placeholder="2"
                />
                <div className="input-group-append">
                  <span className="input-group-text righ-btnpopup">
                    <button
                      type="button"
                      className="btn  popup-btnint popup-btnright"
                    >
                      +
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-bottom selcet-servicesmargintop"></div>
          <div className="booking-confirmed">
            <div className="row align-items-center mt-3 ">
              <div className="col-md-8 col-8">
                <h4>Total service cost</h4>
                <h5>Installation services by plumber</h5>
              </div>
              <div className="col-md-4 col-4 text-right">
                <h1>$700.00</h1>
              </div>
            </div>
          </div>
          <div className="border-bottom mt-3"></div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-outline-primary post-btn mr-2"
          >
            BACK
          </button>
          <button type="button" className="btn btn-login">
            UPDATE & PROCEED
          </button>
          {/* <Button variant="secondary" onClick={handleClose}>Close</Button> */}
          {/* <Button variant="primary" onClick={handleClose}>Save Changes</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SelectServices;

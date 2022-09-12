import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Layout/loggedInHeader";

function Clientbrowsecheckout() {
  return (
    <>
      <Header showRegisterButton={true} />

      <section className="client-section  position-relative">
        <div className="login-img d-none d-md-block">
          <div className="container-fluid h-100">
            <div className="row h-100">
              <div className="col-md-5 order-sm-2 pr-0 h-100">
                <img
                  src="images/client-selector-right.svg"
                  className="loginbg"
                  alt=""
                />
              </div>
              <div className="col-md-7 order-sm-1"></div>
            </div>
          </div>
        </div>

        <div className="container min-heighvh position-relative">
          <div className="row pt-4">
            <div className="col-md-12 mt-2 pt-5 mt-sm-5 position-inherit">
              <h1>checkout</h1>
              <h2>to book you slot</h2>

              <div className="row">
                <div className="col-md-5">
                  <label for="#" className="profile-label mt-3 mt-sm-4">
                    Payment type
                  </label>
                  <div className="row">
                    <div className="col-md-4 pr-0">
                      <div className="form-group">
                        <input
                          className="filled-in"
                          type="checkbox"
                          value=""
                          id="Check"
                        />
                        <label className="checkFrom-label" for="Check">
                          Credit/debit card
                        </label>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="form-group">
                        <input
                          className="filled-in"
                          type="checkbox"
                          value=""
                          id="Check1"
                        />
                        <label className=" checkFrom-label" for="Check1">
                          Digital wallet (Paypal, stripe etc.)
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4 pr-0">
                      <div className="form-group">
                        <input
                          className="filled-in"
                          type="checkbox"
                          value=""
                          id="Check3"
                        />
                        <label className="checkFrom-label" for="Check3">
                          Pay after service
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group mt-2 mt-sm-3 position-relative">
                        <img
                          src="images/payment.png"
                          className="payment-checkout"
                          alt=""
                        />
                        <input
                          type="email"
                          className="form-control login-input profile-inpt"
                          placeholder="1234 5678 1234 5678"
                        />
                      </div>
                    </div>

                    <div className="col-md-6 col-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control login-input profile-inpt"
                          placeholder="Mayank"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control login-input profile-inpt"
                          placeholder="Sethi"
                        />
                      </div>
                    </div>

                    <div className="col-md-6 col-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control login-input profile-inpt"
                          placeholder="12/22"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control login-input profile-inpt"
                          placeholder="880"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5">
                  <label for="#" className="profile-label mt-2 mt-sm-4">
                    Billing information
                  </label>

                  <div className="row mt-2">
                    <div className="col-md-6 col-6">
                      <div className="select-box form-group">
                        <select className="form-control select-checkout">
                          <option value="3">United States</option>
                          <option>Newest listing first</option>
                          <option>Lowest budget</option>
                          <option>Highest budget</option>
                          <option>Oldest listing first</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 col-6">
                      <div className="select-box form-group">
                        <select className="form-control select-checkout">
                          <option value="3">Washington</option>
                          <option>Newest listing first</option>
                          <option>Lowest budget</option>
                          <option>Highest budget</option>
                          <option>Oldest listing first</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control login-input profile-inpt"
                          placeholder="8th Avenue, House no. 8990, Firth Floor"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control login-input profile-inpt"
                          placeholder="Seatlle"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control login-input profile-inpt"
                          placeholder="Postal code"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-2 mb-4">
                <div className="col-md-12">
                  <button type="button" className="btn btn-login ">
                    PAY & PROCEED TO BOOK A SLOT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Clientbrowsecheckout;

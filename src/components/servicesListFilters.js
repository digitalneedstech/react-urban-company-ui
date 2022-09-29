import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import MultiRangeSlider from "multi-range-slider-react";
import AsyncSelectInput from "./asyncSelectInput";

function ServicesListFilters(props) {
  const { showNav, count, searchKeyword, setSearchKeyword,setSortValue } = props;
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const onSortChange=(event)=>{
    setSortValue(event.target.value);
  }
  return (
    <>
      <section className={`browse-section ${showNav ? "" : "pt-4 pt-sm-5"}`}>
        <div className="container">
          <div className={`row ${showNav ? "mt-2" : "pt-5 pt-ms-5"}`}>
            <div className="col-md-5">
              <div className="top-banner-searchbar browse-searchbar  position-relative">
                <div className="row align-items-center">
                  <div className="col-md-7 col-8 pr-0 pr-sm-3">
                    <img
                      src="images/search.svg"
                      className="search-icon"
                      alt=""
                      style={{ zIndex: 1 }}
                    />
                    <AsyncSelectInput
                      placeholder="Search for services..."
                      url="/metadata/keywords"
                      name="indexSearch"
                      onChange={(e) => setSearch(e.target.value)}
                      value={search}
                      isMulti={false}
                    />
                  </div>
                  <div className="col-md-5 text-right col-4 pr-2 pr-sm-4">
                    <button
                      onClick={() => {
                        setSearchKeyword(search);
                      }}
                      type="button"
                      className="btn btn-login mr-2"
                    >
                      SEARCH
                    </button>
                  </div>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-md-12">
                  <ul>
                    <li className="first-text">Trending:</li>
                    <li>
                      <a href="#">AC Repair</a>
                    </li>
                    <li>
                      <a href="#">Architect</a>
                    </li>
                    <li>
                      <a href="#">Web Service</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4 pt-3 pt-sm-0">
              <div className="top-banner-searchbar browse-searchbar position-relative">
                <div className="row align-items-center">
                  <div className="col-md-7 col-8 pr-0 pr-sm-3">
                    <img
                      src="images/location.svg"
                      className="search-icon"
                      alt=""
                    />
                    <input
                      type="email"
                      className="form-control search-inpt"
                      placeholder="Seattle, Washington"
                    />
                  </div>
                  <div className="col-md-5 text-right col-4 pr-2 pr-sm-4">
                    <button
                      type="button"
                      className="btn btn-login browse-btn mr-2"
                    >
                      SEARCH
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 found-box">
            <div className="row align-items-center">
              <div className="col-md-7 col-12">
                <div className="client-profilehead">
                  <h1>
                    found <span> {count} results</span> in{" "}
                    {searchKeyword ? searchKeyword : "Services"}
                  </h1>
                  <h2>in “Seattle, Washington”</h2>
                </div>
              </div>

              <div className="col-md-5 col-12 mt-3 mt-sm-0">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <h6 onClick={handleShow}>
                      <img src="images/filter.svg" alt="" height="27px" />{" "}
                      Filter results
                    </h6>
                  </div>
                  <div className="col-md-8">
                    <div className="filter-box">
                      <div className=" d-flex align-items-center">
                        <img src="images/arrow.svg" alt="" height="22px" />
                        <select onChange={onSortChange}
                          className="form-control form-select"
                          aria-label=".form-select-lg example"
                        >
                          <option value="0">Sort listing</option>
                          <option value="1">Newest listing first</option>
                          <option value="2">Lowest budget</option>
                          <option value="3">Highest budget</option>
                          <option value="4">Oldest listing first</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                filter <span>results</span>
              </h1>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label for="#" className="profile-label mt-1">
            Budget
          </label>
          <div className="form-group">
            <input className="filled-in" type="checkbox" value="" id="Check" />
            <label className="checkFrom-label" for="Check">
              Fixed price
            </label>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="App">
                <MultiRangeSlider
                  min={0}
                  max={100}
                  step={5}
                  ruler={true}
                  label={true}
                  preventWheel={false}
                  minValue={minValue}
                  maxValue={maxValue}
                  onInput={(e) => {
                    handleInput(e);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="form-group mt-3 mb-3 mb-sm-0">
            <input className="filled-in" type="checkbox" value="" id="Check1" />
            <label className="checkFrom-label" for="Check1">
              Hourly
            </label>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="App">
                <MultiRangeSlider
                  min={0}
                  max={100}
                  step={5}
                  ruler={true}
                  label={true}
                  preventWheel={false}
                  minValue={minValue}
                  maxValue={maxValue}
                  onInput={(e) => {
                    handleInput(e);
                  }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="select-box form-group">
                <select className="form-control select-checkout">
                  <option value="3">All durations</option>
                  <option>Newest listing first</option>
                  <option>Lowest budget</option>
                  <option>Highest budget</option>
                  <option>Oldest listing first</option>
                </select>
              </div>
            </div>
          </div>
          <div className="border-bottom"></div>
          <label for="#" className="profile-label mt-2">
            Type
          </label>
          <div className="row">
            <div className="col-md-3 col-4">
              <div className="form-group">
                <input
                  className="filled-in"
                  type="checkbox"
                  value=""
                  id="Check2"
                />
                <label className="checkFrom-label" for="Check2">
                  Individual
                </label>
              </div>
            </div>
            <div className="col-md-3 col-4">
              <div className="form-group">
                <input
                  className="filled-in"
                  type="checkbox"
                  value=""
                  id="Check3"
                />
                <label className="checkFrom-label" for="Check3">
                  Company
                </label>
              </div>
            </div>
          </div>

          <div className="border-bottom"></div>
          <label for="#" className="profile-label mt-2">
            Rating
          </label>
          <div className="row">
            <div className="col-md-4 col-4 col-6">
              <div className="form-group">
                <input
                  className="filled-in"
                  type="checkbox"
                  value=""
                  id="Check4"
                />
                <label className="checkFrom-label" for="Check4">
                  4 - 5 Stars
                </label>
              </div>
            </div>
            <div className="col-md-4 col-4 col-6 ">
              <div className="form-group">
                <input
                  className="filled-in"
                  type="checkbox"
                  value=""
                  id="Check5"
                />
                <label className="checkFrom-label" for="Check5">
                  3 - 4 stars
                </label>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="form-group">
                <input
                  className="filled-in"
                  type="checkbox"
                  value=""
                  id="Check6"
                />
                <label className="checkFrom-label" for="Check6">
                  2 - 3 stars
                </label>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-login">
            Apply filters
          </button>
          <button
            type="button"
            className="btn btn-outline-danger remove-btnoutline"
          >
            Remove filters
          </button>
          {/* <Button variant="secondary" onClick={handleClose}>Close</Button> */}
          {/* <Button variant="primary" onClick={handleClose}>Save Changes</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ServicesListFilters;

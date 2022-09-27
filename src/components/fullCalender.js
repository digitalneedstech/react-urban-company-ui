import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import _ from "lodash";
import { useSelector } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Header from "../Layout/loggedInHeader";
import { addNewBooking } from "../redux/actions/booking";
import { fetchData } from "../redux/helpers";
import Footer from "../Layout/footer";

function FullCalender() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const bookingData = state?.bookingData;
  const { booking } = useSelector((state) => state.booking);
  const user = useSelector((state) => state.user);
  const { userData } = user.user;

  const handleDateClick = (arg) => {
    addNewBooking({ date: arg.dateStr });
  };

  const handleTimeClick = (e) => {
    addNewBooking({ time: e.target.value });
  };

  const updateService = async () => {
    let data = {
      properties: {
        serviceId: bookingData.serviceId,
        serviceProviderId: bookingData.serviceProviderId,
        time: booking.time,
        date: booking.date,
        timeZone: "IST",
      },
      updateProperties: {
        type: "Re-Scheduled",
        actorSentBy: "Client",
      },
    };
    let response = await fetchData(
      `/${userData.id}/bookings/${bookingData.id}`,
      "PUT",
      data
    );
    console.log(response);
    if (!_.isEmpty(response)) {
      navigate("/browse-checkout-confirmed");
    }
  };

  return (
    <>
      <Header />
      <section className="pb-4 pb-sm-5">
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-7 mt-2 pt-5 mt-sm-5 ">
              <div className="client-profilehead newclient-headclender position-relative">
                <h2>edit service slots</h2>
              </div>
              <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                dateClick={handleDateClick}
                selectable={true}
                events={[
                  { title: "12 slots", date: "2022-09-01" },
                  { title: "4 slots", date: "2022-09-02" },
                  { title: "No slots", date: "2022-09-03" },
                  { title: "No slots", date: "2022-09-04" },
                  { title: "12 slots", date: "2022-09-05" },
                  { title: "12 slots", date: "2022-09-06" },
                  { title: "12 slots", date: "2022-09-07" },
                  { title: "10 slots", date: "2022-09-08" },
                  { title: "No slots", date: "2022-09-09" },
                  { title: "No slots", date: "2022-09-10" },
                  { title: "6 slots", date: "2022-09-11" },
                  { title: "4 slots", date: "2022-09-12" },
                  { title: "5 slots", date: "2022-09-13" },
                  { title: "6 slots", date: "2022-09-14" },
                  { title: "6 slots", date: "2022-09-15" },
                  { title: "6 slots", date: "2022-09-16" },
                  { title: "12 slots", date: "2022-09-17" },
                  { title: "12 slots", date: "2022-09-18" },
                  { title: "6 slots", date: "2022-09-19" },
                  { title: "11 slots", date: "2022-09-20" },
                  { title: "6 slots", date: "2022-09-21" },
                  { title: "10 slots", date: "2022-09-22" },
                  { title: "No slots", date: "2022-09-23" },
                  { title: "No slots", date: "2022-09-24" },
                  { title: "6 slots", date: "2022-09-25" },
                  { title: "4 slots", date: "2022-09-26" },
                  { title: "5 slots", date: "2022-09-27" },
                  { title: "6 slots", date: "2022-09-28" },
                  { title: "6 slots", date: "2022-09-29" },
                  { title: "6 slots", date: "2022-09-30" },
                ]}
              />
            </div>
            <div className="col-md-5 mt-2 pt-1 pt-sm-5 mt-sm-5 pl-3 pl-sm-0">
              <div className="row text-sm-right text-left">
                <div className="col-md-12 mt-2">
                  {!_.isEmpty(bookingData) ? (
                    <button
                      type="button"
                      className="btn btn-login mr-3"
                      onClick={updateService}
                    >
                      UPDATE SERVICE SLOTS
                    </button>
                  ) : (
                    <Link to="/browse-checkout" className="btn btn-login mr-3">
                      BOOK SLOT
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      navigate(-1);
                    }}
                    type="button"
                    className="btn btn-outline-primary post-btn"
                  >
                    BACK
                  </button>
                </div>
              </div>

              <div className="account-timeslotsec mt-4 mt-sm-5">
                <div className="row">
                  <div className="col-md-12">
                    <label htmlFor="#" className="profile-label">
                      Select time slots
                    </label>

                    <div className="accountTime-slot">
                      <input
                        className="with-gap"
                        type="radio"
                        checked={booking?.time == "9 am - 10 am"}
                        name="time"
                        onChange={handleTimeClick}
                        value="9 am - 10 am"
                        id="client1"
                      />
                      <label htmlFor="client1">9 am - 10 am</label>

                      <input
                        className="with-gap"
                        type="radio"
                        checked={booking?.time == "12 pm - 1 pm"}
                        name="time"
                        onChange={handleTimeClick}
                        value="12 pm - 1 pm"
                        id="client2"
                      />
                      <label htmlFor="client2">12 pm - 1 pm</label>

                      <input
                        className="with-gap"
                        type="radio"
                        checked={booking?.time == "1 pm - 12 pm"}
                        name="time"
                        onChange={handleTimeClick}
                        value="1 pm - 12 pm"
                        id="client3"
                      />
                      <label htmlFor="client3">1 pm - 12 pm</label>

                      <input
                        className="with-gap"
                        type="radio"
                        checked={booking?.time == "2 pm - 10 pm"}
                        name="time"
                        onChange={handleTimeClick}
                        value="2 pm - 10 pm"
                        id="client4"
                      />
                      <label htmlFor="client4">2 pm - 10 pm</label>

                      <input
                        className="with-gap"
                        type="radio"
                        checked={booking?.time == "7 pm - 11 pm"}
                        name="time"
                        onChange={handleTimeClick}
                        value="7 pm - 11 pm"
                        id="client5"
                      />
                      <label htmlFor="client5">7 pm - 11 pm</label>

                      <input
                        className="with-gap"
                        type="radio"
                        checked={booking?.time == "8 pm - 12 pm"}
                        name="time"
                        onChange={handleTimeClick}
                        value="8 pm - 12 pm"
                        id="client6"
                      />
                      <label htmlFor="client6">8 pm - 12 pm</label>

                      <input
                        className="with-gap"
                        type="radio"
                        checked={booking?.time == "9 pm - 10 pm"}
                        name="time"
                        onChange={handleTimeClick}
                        value="9 pm - 10 pm"
                        id="client7"
                      />
                      <label htmlFor="client7">9 pm - 10 pm</label>
                    </div>

                    <label htmlFor="#" className="profile-label mt-2 mt-sm-4">
                      Bulk action (for this month)
                    </label>
                    <div className="balk-actionsection">
                      <div className="row">
                        <div className="col-md-12">
                          <ul>
                            <li>
                              <input
                                className="filled-in"
                                type="checkbox"
                                value=""
                                id="Check"
                              />
                              <label
                                className="checkFrom-label"
                                htmlFor="Check"
                              >
                                No slots for all Mondays
                              </label>
                            </li>
                            <li>
                              <input
                                className="filled-in"
                                type="checkbox"
                                value=""
                                id="Chec2"
                              />
                              <label
                                className="checkFrom-label"
                                htmlFor="Chec2"
                              >
                                No slots for all Fridays
                              </label>
                            </li>
                            <li>
                              <input
                                className="filled-in"
                                type="checkbox"
                                value=""
                                id="Chec3"
                              />
                              <label
                                className="checkFrom-label"
                                htmlFor="Chec3"
                              >
                                No slots for all Tuesdays
                              </label>
                            </li>
                            <li>
                              <input
                                className="filled-in"
                                type="checkbox"
                                value=""
                                id="Chec4"
                              />
                              <label
                                className="checkFrom-label"
                                htmlFor="Chec4"
                              >
                                No slots for all{" "}
                                <span className="new-labelbluetext">
                                  Saturdays
                                </span>
                              </label>
                            </li>
                            <li>
                              <input
                                className="filled-in"
                                type="checkbox"
                                value=""
                                id="Chec5"
                              />
                              <label
                                className="checkFrom-label"
                                htmlFor="Chec5"
                              >
                                No slots for all Wednesdays
                              </label>
                            </li>
                            <li>
                              <input
                                className="filled-in"
                                type="checkbox"
                                value=""
                                id="Chec6"
                              />
                              <label
                                className="checkFrom-label"
                                htmlFor="Chec6"
                              >
                                No slots for all Sundays
                              </label>
                            </li>
                            <li>
                              <input
                                className="filled-in"
                                type="checkbox"
                                value=""
                                id="Chec7"
                              />
                              <label
                                className="checkFrom-label"
                                htmlFor="Chec7"
                              >
                                No slots for all Thursdays
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* <div className="row">
                                            <div className="col-md-6">
                                                <div className="">
                                                    <input className="filled-in" type="checkbox" value="" id="Check" />
                                                    <label className="checkFrom-label" htmlFor="Check">
                                                        No slots for all Mondays
                                                    </label>
                                                </div>
                                                <div className="mt-2">
                                                    <input className="filled-in" type="checkbox" value="" id="Chec2" />
                                                    <label className="checkFrom-label" htmlFor="Chec2">
                                                        No slots for all Tuesdays
                                                    </label>
                                                </div>
                                                <div className="mt-2">
                                                    <input className="filled-in" type="checkbox" value="" id="Chec3" />
                                                    <label className="checkFrom-label" htmlFor="Chec3">
                                                        No slots for all Wednesdays
                                                    </label>
                                                </div>
                                                <div className="mt-2">
                                                    <input className="filled-in" type="checkbox" value="" id="Chec4" />
                                                    <label className="checkFrom-label" htmlFor="Chec4">
                                                        No slots for all Thursdays
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="">
                                                    <input className="filled-in" type="checkbox" value="" id="Chec5" />
                                                    <label className="checkFrom-label" htmlFor="Chec5">
                                                        No slots for all Fridays
                                                    </label>
                                                </div>

                                                <div className="mt-2">
                                                    <input className="filled-in" type="checkbox" value="" id="Chec6" />
                                                    <label className="checkFrom-label" htmlFor="Chec6">
                                                        No slots for all <span className="new-labelbluetext">Saturdays</span>
                                                    </label>
                                                </div>

                                                <div className="mt-2">
                                                    <input className="filled-in" type="checkbox" value="" id="Chec7" />
                                                    <label className="checkFrom-label" htmlFor="Chec7">
                                                        No slots for all Sundays
                                                    </label>
                                                </div>
                                            </div>
                                        </div> */}
                  </div>
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

export default FullCalender;

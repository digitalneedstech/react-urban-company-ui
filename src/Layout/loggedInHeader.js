import * as React from "react";
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { onLogout } from "../redux/actions/user";

export default function LoggedInHeader(props) {
  const { showRegisterButton, showNav } = props;
  const user = useSelector((state) => state.user);
  const { userData } = user.user;
  const location = useLocation();
  let { pathname } = location;

  let isClientPath = userData.type == "client";

  return (
    <>
      <header>
        <div className="container">
          <div className="tophead border-bottom">
            <div className="row align-items-center">
              <div className="col-md-6 col-5 moblogo">
                <Link to="/">
                  <img src="images/Logo.svg" alt="" />
                </Link>
                {showRegisterButton && (
                  <>
                    {isClientPath ? (
                      <button
                        type="button"
                        className="btn btn-login ml-4 d-none d-sm-inline-block"
                      >
                        REGISTER AS A SERVICE PROVIDER
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-login ml-4 d-none d-sm-inline-block"
                      >
                        WANT TO HIRE SOMEONE?
                      </button>
                    )}
                  </>
                )}
              </div>
              <div className="col-md-6 col-7">
                <ul className="tophead-right">
                  <li className="client-loginHead d-none d-sm-block">
                    <a href="#">
                      {isClientPath ? (
                        <img
                          src="images/pro-headimg.png"
                          className="pro-headimg"
                          alt=""
                        />
                      ) : (
                        <img
                          src="images/service-prohead-img.png"
                          className="pro-headimg"
                          alt=""
                        />
                      )}
                      You are logged in as a{" "}
                      <span>
                        {isClientPath ? "CLIENT" : "SERVICE PROVIDER"}
                      </span>
                    </a>
                  </li>
                  <li className="user-picHead">
                    <a href="#">
                      <span>
                        <img
                          src={
                            userData.profileImageUrl
                              ? userData.profileImageUrl
                              : "images/pro-userpic.jpg"
                          }
                          alt=""
                        />
                      </span>
                      <p>Hi, {userData.name} !</p>
                    </a>
                  </li>
                  <li>
                    <a onClick={onLogout}>
                      <img src="images/bell.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {showNav && (
        <Navbar expand="lg" className="listed-bar">
          <div className="container">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#">
                  <img src="images/blue-status.svg" alt="" />
                  BROWSE
                </Nav.Link>
                <Nav.Link href="#">
                  <img src="images/note.svg" alt="" />
                  PROJECTS
                </Nav.Link>
                {isClientPath ? (
                  <Nav.Link href="/bookings-dashboard">
                    <img src="images/gray-cal.svg" alt="" />
                    BOOKINGS
                  </Nav.Link>
                ) : (
                  <Nav.Link
                    href="/services-dashboard"
                    className={
                      pathname == "/services-dashboard" ? "active" : ""
                    }
                  >
                    <img src="images/gray-cal.svg" alt="" />
                    SERVICES
                  </Nav.Link>
                )}
                <Nav.Link href="#">
                  <img src="images/dollar.svg" alt="" />
                  EARNINGS
                </Nav.Link>
                <Nav.Link href="#">
                  <img src="images/mgs.svg" alt="" />
                  SUPPORT
                </Nav.Link>
                <Nav.Link href="#">
                  <img src="images/setting.svg" alt="" />
                  ACCOUNT
                </Nav.Link>
                <Nav.Link href="#">
                  <img src="images/archive.svg" alt="" />
                  SAVED
                </Nav.Link>
                <Nav.Link href="#">
                  <img src="images/trend.svg" alt="" />
                  REPORTS
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      )}
    </>
  );
}

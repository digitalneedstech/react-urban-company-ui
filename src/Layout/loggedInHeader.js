import * as React from "react";
import { useLocation, Link } from "react-router-dom";
import { logout } from "../firebase";

export default function LoggedInHeader() {
  const location = useLocation();
  let { pathname } = location;
  let isClientPath = pathname.indexOf("client") !== -1;

  return (
    <header>
      <div className="container">
        <div className="tophead border-bottom">
          <div className="row align-items-center">
            <div className="col-md-3 col-5 moblogo">
              <Link to="/">
                <img src="images/Logo.svg" alt="" />
              </Link>
            </div>
            <div className="col-md-9 col-7">
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
                    <span>{isClientPath ? "CLIENT" : "SERVICE PROVIDER"}</span>
                  </a>
                </li>
                <li className="user-picHead">
                  <a href="#">
                    <span>
                      <img src="images/pro-userpic.jpg" alt="" />
                    </span>
                    <p>Hi, Vinod !</p>
                  </a>
                </li>
                <li>
                  <a onClick={logout}>
                    <img src="images/bell.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

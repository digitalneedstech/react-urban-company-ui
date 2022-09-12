import * as React from "react";
import { useLocation, Link } from "react-router-dom";

export default function LoginHeader() {
  const location = useLocation();
  let { pathname } = location;
  let isSignupPath = pathname.indexOf("signup") !== -1;

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
                <li>
                  {isSignupPath ? (
                    <Link
                      to="/login"
                      className="btn btn-login"
                      style={{ color: "#fff" }}
                    >
                      LOGIN
                    </Link>
                  ) : (
                    <Link
                      to="/signup-selector"
                      className="btn btn-login"
                      style={{ color: "#fff" }}
                    >
                      SIGNUP
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

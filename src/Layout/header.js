import * as React from "react";
import { Link } from "react-router-dom";

export default function Header() {
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
                <li className="d-none d-sm-block">
                  <Link to="/service-signup">
                    Register as a service provider
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="btn btn-login"
                    style={{ color: "#fff" }}
                  >
                    Login / Signup
                  </Link>
                </li>
                <li className="d-none d-sm-inline-block">
                  <a href="#">
                    <button
                      type="button"
                      className="btn btn-outline-primary post-btn"
                    >
                      Post a Project
                    </button>
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

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../images/Logo.svg";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="tophead border-bottom">
          <div className="row align-items-center">
            <div className="col-md-3 col-5 moblogo">
              <Link href="/">
                <Image src={Logo} alt="" />
              </Link>
            </div>
            <div className="col-md-9 col-7">
              <ul className="tophead-right">
                <li className="d-none d-sm-block">
                  <Link href="/signup">Register as a service provider</Link>
                </li>
                <li>
                  <Link href="/login">
                    <button type="button" className="btn btn-login">
                      Login / Signup
                    </button>
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

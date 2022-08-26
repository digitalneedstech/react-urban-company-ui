import React, { useState, useRef } from "react";
import _ from "lodash";
import { registerWithEmailAndPassword } from "../firebase";
import { validateemail } from "../utils/validation";

function Signupform(props) {
  const { type } = props;
  const inputEmail = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [isChecked, setisChecked] = useState(false);
  const [formError, setFormError] = useState("");

  const onEmailChange = () => {
    let value = inputEmail.current.value;
    if (validateemail(value)) {
      setEmail(value);
      setFormError("");
    } else {
      setFormError("Please enter a valid email");
    }
  };

  const onCheckChange = (e) => {
    setisChecked(!isChecked);
  };

  const register = async () => {
    await registerWithEmailAndPassword(name, mobile, email, password, type);
  };

  return (
    <>
      <div className="row mt-4 mt-sm-4">
        <div className="col-md-4">
          <div className="form-group position-relative">
            <img src="images/client-user.svg" className="login-smsimg" alt="" />
            <input
              type="text"
              className="form-control login-input"
              placeholder="Full name (first & last name)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group position-relative">
            <img
              src="images/client-mobile.svg"
              className="login-smsimg"
              alt=""
            />
            <input
              type="number"
              className="form-control login-input"
              placeholder="Mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="form-group position-relative">
            <img src="images/login-sms.svg" className="login-smsimg" alt="" />
            <input
              ref={inputEmail}
              type="email"
              className="form-control login-input"
              placeholder="Email address"
              onChange={onEmailChange}
            />
          </div>
          {!_.isEmpty(formError) && (
            <div className="invalid-feedback mb-3" style={{ display: "block" }}>
              {formError}
            </div>
          )}
        </div>
        <div className="col-md-4">
          <div className="form-group position-relative">
            <img
              src="images/password-lock.svg"
              className="login-smsimg"
              alt=""
            />
            <input
              type="password"
              className="form-control login-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img src="images/password-eye.svg" className="paswd-eyes" alt="" />
          </div>
        </div>
      </div>

      <div className="row mt-1">
        <div className="col-md-5">
          <div className="form-group" onClick={onCheckChange}>
            <input
              className="filled-in"
              type="checkbox"
              value="termsChecked"
              checked={isChecked}
              onChange={onCheckChange}
            />
            <label className=" checkFrom-label" htmlFor="Check">
              Yes, I understand and agree to the Protocall Terms of Service,
              including the User Agreement and Privacy Policy .
            </label>
          </div>
        </div>
      </div>

      <div className="row mt-2 mb-4">
        <div className="col-md-12">
          <button
            type="button"
            className="btn btn-login"
            disabled={
              !_.isEmpty(formError) ||
              _.isEmpty(email) ||
              _.isEmpty(password) ||
              _.isEmpty(mobile) ||
              _.isEmpty(name) ||
              !isChecked
            }
            onClick={register}
          >
            CREATE MY ACCOUNT
          </button>
        </div>
      </div>
    </>
  );
}

export default Signupform;

import React, { useState } from "react";
import _ from "lodash";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import UploadImageInput from "./uploadImageInput";
import { uploadUserImage } from "../redux/actions/user";
import { fetchData } from "../redux/helpers";

export default function UploadProfileImage(props) {
  const user = useSelector((state) => state.user);
  const { userData } = user.user;
  const { afterImageUpload } = props;
  const location = useLocation();
  const { pathname } = location;
  const isCompanyPath = pathname.indexOf("company") !== -1;

  const [image, setImage] = useState("");
  const [deleteImg, setDeleteImg] = useState(false);

  const onImageUpload = (url) => {
    setImage(url);
    uploadUserImage(url);
  };

  const onFinishSAccount = async () => {
    let data = {
      name: userData.name,
      email: userData.email,
      userId: userData.uid,
      mobileNumber: userData.mobile,
      profileImageUrl: userData.profileImageUrl,
      type: userData.type,
    };

    let response = fetchData("/signUp", "POST", data);
    if (_.isEmpty(response)) {
      afterImageUpload();
    }
  };

  return (
    <>
      <section className="client-profile">
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-8 mt-2 pt-5 mt-sm-5">
              <div className="client-profilehead">
                {isCompanyPath ? (
                  <>
                    <h1>company logo</h1>
                    <h2>upload your logo here</h2>
                  </>
                ) : (
                  <>
                    <h1>profile image</h1>
                    <h2>upload your profile image</h2>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {isCompanyPath ? (
                <img src="images/company-logoleftimg.svg" alt="" />
              ) : (
                <img src="images/profile-welcome.svg" alt="" />
              )}
            </div>
            <div className="col-md-6">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <label htmlFor="#" className="profile-label">
                    Upload / browse profile image
                  </label>
                  <UploadImageInput
                    onImageUpload={onImageUpload}
                    deleteImg={deleteImg}
                    setDeleteImg={setDeleteImg}
                  />

                  <div className="border-bottom"></div>
                  <div className="profile-content">
                    <div className="row mt-3 mt-sm-4">
                      {_.isEmpty(image) ? (
                        <div className="col-md-12">
                          <h1>Profile image tips</h1>
                          <ul>
                            <li>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </li>
                            <li>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </li>
                            <li>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </li>
                          </ul>
                        </div>
                      ) : (
                        <div className="profile-content">
                          <div className="row mt-3 mt-sm-3 ml-1">
                            <div className="col-md-12">
                              <img
                                src={image}
                                className="user-uploadimg"
                                alt=""
                              />
                              <a onClick={() => setDeleteImg(true)}>
                                <img
                                  src="images/close-square.svg"
                                  className="cross-img"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="row mt-2 mb-4">
                    <div className="col-md-12">
                      <button
                        type="button"
                        className="btn btn-login"
                        onClick={onFinishSAccount}
                      >
                        FINISH ACCOUNT SETUP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

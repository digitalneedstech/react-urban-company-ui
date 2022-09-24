import React, { useState } from "react";
import _ from "lodash";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import Header from "../../../Layout/loggedInHeader";
import Footer from "../../../Layout/footer";
import UploadImageInput from "../../../components/uploadImageInput";
import { fetchData } from "../../../redux/helpers";

const UploadDocument = ({ handleInputChange, name, isDoc }) => {
  const [image, setImage] = useState("");
  const [deleteImg, setDeleteImg] = useState(false);

  const onImageUpload = (url) => {
    setImage(url);
    handleInputChange({ target: { name, value: url } });
  };

  return (
    <>
      <UploadImageInput
        onImageUpload={onImageUpload}
        deleteImg={deleteImg}
        setDeleteImg={setDeleteImg}
        isDoc={isDoc}
      />
      {image && (
        <div className="profile-content">
          <div className="row align-items-center">
            <div className="col-md-3 col-5">
              <img src={image} alt="" />
            </div>
            <div className="col-md-3 pl-0 col-6">
              <button
                type="button"
                className="btn btn-danger remove-btn"
                onClick={() => setDeleteImg(true)}
              >
                REMOVE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

function KYC() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const { userData } = user.user;
  const [inputFields, setInputFields] = useState({});

  const handleInputChange = (event) => {
    let { name, value } = event.target;
    let data = { ...inputFields, [name]: value };
    setInputFields(data);
  };

  const onFinishKYC = async () => {
    let data = {
      type: userData.type,
      details: [
        ..._.map(inputFields, (value, key) => ({
          attribute: key,
          value: value,
        })),
      ],
    };

    let response = await fetchData(
      `/serviceProviders/account/${userData.id}`,
      "POST",
      data
    );
    if (!_.isEmpty(response)) {
      navigate("/individual-onsiteoroffsite");
    }
  };

  return (
    <>
      <Header />
      <section className="service-providerFullbg">
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-12 mt-2 pt-5 mt-sm-5">
              <div className="client-profilehead">
                <h1>account verification</h1>
                <h2>complete the form for KYC verification</h2>
              </div>
            </div>
          </div>

          <div className="row mt-4 align-items-end">
            <div className="col-md-3">
              <img src="images/girl-meditation.svg" alt="" />
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="#" className="profile-label">
                  Full name
                </label>
                <input
                  type="text"
                  name="full_name"
                  onChange={handleInputChange}
                  className="form-control login-input profile-inpt"
                  placeholder="Vinod Sharma"
                  value={userData.name}
                />
              </div>

              <div className="form-group">
                <label htmlFor="#" className="profile-label">
                  Describe about you
                </label>
                <textarea
                  name="description"
                  onChange={handleInputChange}
                  className="form-control  login-input profile-inpt"
                  placeholder="Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis aspernatur. Sint blanditiis dignissimos ut non enim error. Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis aspernatur. Sint blanditiis dignissimos ut non enim error."
                  rows="4"
                ></textarea>
              </div>

              <div className="">
                <label htmlFor="#" className="profile-label">
                  Upload / browse profile image
                </label>
                <UploadDocument
                  handleInputChange={handleInputChange}
                  name="profile_image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-providerfullbgBottom">
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="#" className="profile-label">
                  Basic details
                </label>
                <input
                  type="email"
                  name="basic_details"
                  onChange={handleInputChange}
                  className="form-control login-input profile-inpt"
                  placeholder="vinod@mocklabs.com"
                  value={userData.email}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="mobile"
                  onChange={handleInputChange}
                  className="form-control login-input profile-inpt"
                  placeholder="+00 9876543210"
                  value={userData.mobileNumber}
                />
              </div>

              <label htmlFor="#" className="profile-label">
                Documents
              </label>
              <Accordion defaultActiveKey="0" className="accordreact">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    ID proof documents{" "}
                    <span className="added-accordtext">
                      Added
                      <img
                        src="images/arrow-down.svg"
                        className="ml-2"
                        alt=""
                      />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <UploadDocument
                      handleInputChange={handleInputChange}
                      name="documents"
                      isDoc={true}
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Qualifications{" "}
                    <span className="added-blackText">
                      -Not added
                      <img
                        src="images/arrow-down.svg"
                        className="ml-2"
                        alt=""
                      />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <UploadDocument
                      handleInputChange={handleInputChange}
                      name="qualifications"
                      isDoc={true}
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Certifications{" "}
                    <span className="added-blackText">
                      -Not added
                      <img
                        src="images/arrow-down.svg"
                        className="ml-2"
                        alt=""
                      />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <UploadDocument
                      handleInputChange={handleInputChange}
                      name="certifications"
                      isDoc={true}
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Bank details{" "}
                    <span className="added-blackText">
                      -Not added
                      <img
                        src="images/arrow-down.svg"
                        className="ml-2"
                        alt=""
                      />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <UploadDocument
                      handleInputChange={handleInputChange}
                      name="bank_details"
                      isDoc={true}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <div className="row mt-4">
                <div className="col-md-12">
                  <a onClick={onFinishKYC} className="btn btn-login mr-3 ">
                    VERIFY MY ACCOUNT
                  </a>
                  <Link
                    to="/individual-upload-image"
                    className="btn btn-outline-primary post-btn "
                  >
                    BACK
                  </Link>
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

export default KYC;

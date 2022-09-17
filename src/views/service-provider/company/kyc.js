import React, { useState } from "react";
import _ from "lodash";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import Header from "../../../Layout/loggedInHeader";
import Footer from "../../../Layout/footer";
import UploadImageInput from "../../../components/uploadImageInput";
import { fetchData } from "../../../redux/helpers";

const UploadDocument = ({ handleInputChange, name }) => {
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
      navigate("/add-team-member-1");
    }
  };

  return (
    <>
      <Header />
      <section className="service-providerFullbg">
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-8 mt-2 pt-5 mt-sm-5 ">
              <div className="client-profilehead">
                <h1>account verification</h1>
                <h2>complete the form for KYC verification</h2>
              </div>
            </div>
            <div className="col-md-4 text-right mt-2 pt-5 mt-sm-5  d-none d-sm-block">
              <a onClick={onFinishKYC} className="btn btn-login">
                ADD TEAM MEMBER(S)
              </a>
            </div>
          </div>

          <div className="row mt-4 align-items-end">
            <div className="col-md-3">
              <img src="images/girl-meditation.svg" alt="" />
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="#" className="profile-label">
                  Full company name
                </label>
                <input
                  type="text"
                  name="company_name"
                  onChange={handleInputChange}
                  className="form-control login-input profile-inpt"
                  placeholder="MockLabs Inc."
                />
              </div>

              <div className="form-group">
                <label htmlFor="#" className="profile-label">
                  Describe your company
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
                  Upload / browse logo
                </label>
                <UploadDocument
                  handleInputChange={handleInputChange}
                  name="company_logo"
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
                  Website link (optional)
                </label>
                <input
                  type="text"
                  name="website_link"
                  onChange={handleInputChange}
                  className="form-control login-input profile-inpt"
                  placeholder="https://mocklabs.com"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="company_number"
                  onChange={handleInputChange}
                  onBlur={handleInputChange}
                  className="form-control login-input profile-inpt"
                  placeholder="+00 9876543210"
                />
              </div>

              <div className="form-group">
                <label htmlFor="#" className="profile-label">
                  Admin details
                </label>
                <input
                  type="text"
                  name="admin_name"
                  onChange={handleInputChange}
                  className="form-control login-input profile-inpt"
                  placeholder="Vinod Sharma"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="admin_email"
                  onChange={handleInputChange}
                  className="form-control login-input profile-inpt"
                  placeholder="vinod@mocklabs.com"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="admin_contact"
                  onChange={handleInputChange}
                  className="form-control login-input profile-inpt"
                  placeholder="+00 9876543210"
                />
              </div>

              <label htmlFor="#" className="profile-label">
                Company documents
              </label>

              <Accordion defaultActiveKey="0" className="accordreact">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Company registration certificate{" "}
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
                      name="company_registration_certificate"
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Company bank details{" "}
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
                      name="company_bank_details"
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Other documents{" "}
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
                      name="other_documents"
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <div className="row mt-4">
                <div className="col-md-12">
                  <a onClick={onFinishKYC} className="btn btn-login mr-3 ">
                    ADD TEAM MEMBER(S)
                  </a>
                  <Link
                    to="/company-upload-logo"
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

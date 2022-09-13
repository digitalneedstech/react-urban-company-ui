import React, { useState } from "react";
import _ from "lodash";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Layout/loggedInHeader";
import UploadImageInput from "../../components/uploadImageInput";
import { fetchData } from "../../redux/helpers";
import { Accordion, Card, Button } from "react-bootstrap";

function AddNewService() {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [inputFields, setInputFields] = useState({});
  const [properties, setProperties] = useState([]);
  const [deleteImg, setDeleteImg] = useState(false);
  const user = useSelector((state) => state.user);
  const { userData } = user.user;

  const handleInputChange = (event) => {
    let { name, value } = event.target;
    let data = { ...inputFields, [name]: value };
    setInputFields(data);
  };

  const handlePropertyChange = (event) => {
    let { name, value } = event.target;
    let data = { ...properties, [name]: value.split(",") };
    setProperties(data);
  };

  console.log(inputFields);
  console.log(properties);

  const onImageUpload = (url) => {
    setImage(url);
  };

  const onPublishService = async () => {
    let tempArr = _.flatten(
      _.map(properties, (value, key) => {
        return _.map(value, (v, i) => {
          return { key: "", type: key, value: v };
        });
      })
    );

    let data = {
      metadata: {
        ...inputFields,
      },
      properties: [...tempArr, { key: "", type: "image", value: image }],
    };

    let response = await fetchData(
      `/serviceProviders/${userData.id}/services`,
      "POST",
      data
    );

    if (!_.isEmpty(response)) {
      navigate("/services-dashboard");
    }
  };

  return (
    <>
      <Header showRegisterButton={true} />

      <section className="service-providerFullbg">
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-8 mt-2 pt-5 mt-sm-5 ">
              <div className="client-profilehead">
                <h1>list a service</h1>
                <h2>add new service form</h2>
              </div>
            </div>
            <div className="col-md-4 text-right mt-2 pt-5 mt-sm-5  d-none d-sm-block">
              <button
                type="button"
                className="btn btn-login"
                onClick={onPublishService}
              >
                PUBLISH YOUR SERVICE
              </button>
            </div>
          </div>

          <div className="row mt-4 align-items-end">
            <div className="col-md-3">
              <img src="images/girl-meditation.svg" alt="" />
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="#" className="profile-label">
                  Headline for your service
                </label>
                <input
                  type="text"
                  name="headline"
                  onChange={handleInputChange}
                  className="form-control login-input profile-inpt"
                  placeholder="Drainage pipe blockage removal"
                />
              </div>

              <div className="form-group">
                <label htmlFor="#" className="profile-label">
                  Service details
                </label>
                <textarea
                  name="description"
                  onChange={handleInputChange}
                  className="form-control  login-input profile-inpt"
                  placeholder="You may have experience in fixing a lot of things at home but plumbing isn’t everyone’s cup of tea. Plumbing issues such as clogged drains, leaky faucets, Plumbing issues need to be addressed immediately in order to prevent them from exacerbating or causing further damages. Minor plumbing problems are quite common in every household. Book our plumbing services for all kinds of general plumbing services such as loose and leaky faucets, dripping tap, clogged shower head, cistern repair, toilet flush not working, clogged drain and sink or any other plumbing work."
                  rows="8"
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="#" className="profile-label">
                  Featured image(s)
                </label>
                <UploadImageInput
                  onImageUpload={onImageUpload}
                  deleteImg={deleteImg}
                  setDeleteImg={setDeleteImg}
                />
              </div>
              {image && (
                <div className="row">
                  <div className="col-md-4 col-4">
                    <div className="Featured-img">
                      <img src={image} alt="" className="furnitured-img" />
                      <img
                        src="images/close-far.svg"
                        alt=""
                        className="close-imgafar"
                        onClick={() => setDeleteImg(true)}
                      />
                    </div>
                  </div>
                </div>
              )}

              <label htmlFor="#" className="profile-label mt-3">
                Category
              </label>
              <div className="position-relative mb-0">
                <img
                  src="images/probuilder-search.svg"
                  className="login-smsimg"
                  alt=""
                />
                <input
                  type="text"
                  name="category"
                  onChange={handlePropertyChange}
                  className="form-control login-input"
                  placeholder="Search category"
                />
              </div>

              <h5 className="selected-probuilder selected-far">Selected</h5>
              <button
                type="button"
                className="btn btn-info skill-btn far-btn mr-2"
              >
                Skill lorem <img src="images/add-square.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="service-providerfullbgBottom pb-4 pb-sm-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <label htmlFor="#" className="profile-label mt-3">
                Included in this service
              </label>
              <div className="form-group position-relative">
                <img
                  src="images/probuilder-search.svg"
                  className="login-smsimg"
                  alt=""
                />
                <input
                  type="text"
                  name="inclusions"
                  onChange={handlePropertyChange}
                  className="form-control login-input"
                  placeholder="Add inclusions"
                />
              </div>

              <h5 className="selected-probuilder">Selected</h5>
              <button
                type="button"
                className="btn btn-info skill-btn far-btn mr-2"
              >
                Skill lorem <img src="images/add-square.svg" alt="" />
              </button>
              <button
                type="button"
                className="btn btn-info skill-btn far-btn mr-2"
              >
                Skill lorem <img src="images/add-square.svg" alt="" />
              </button>
              <button type="button" className="btn btn-info skill-btn far-btn">
                Skill lorem <img src="images/add-square.svg" alt="" />
              </button>

              <label htmlFor="#" className="profile-label mt-3">
                Not included in this service
              </label>
              <div className="form-group position-relative">
                <img
                  src="images/probuilder-search.svg"
                  className="login-smsimg"
                  alt=""
                />
                <input
                  type="text"
                  name="nonInclusions"
                  onChange={handlePropertyChange}
                  className="form-control login-input"
                  placeholder="Add non inclusions"
                />
              </div>

              <h5 className="selected-probuilder">Selected</h5>
              <button
                type="button"
                className="btn btn-info skill-btn far-btn mr-2"
              >
                Skill lorem <img src="images/add-square.svg" alt="" />
              </button>
              <button
                type="button"
                className="btn btn-info skill-btn far-btn mr-2"
              >
                Skill lorem <img src="images/add-square.svg" alt="" />
              </button>
              <button type="button" className="btn btn-info skill-btn far-btn">
                Skill lorem <img src="images/add-square.svg" alt="" />
              </button>
              <br />

              <label htmlFor="#" className="profile-label mt-3">
                Specify service cost
              </label>
              <div className=" desgin-radio">
                <input
                  className="with-gap"
                  type="radio"
                  name="type"
                  value="Hourly"
                  onChange={handleInputChange}
                  id="client1"
                />
                <label htmlFor="client1" className="radio-label">
                  Hourly rate
                </label>

                <input
                  className="with-gap"
                  type="radio"
                  name="type"
                  value="Fixed"
                  onChange={handleInputChange}
                  id="client2"
                />
                <label htmlFor="client2" className="radio-label">
                  Fixed cost
                </label>
              </div>

              <div className="row mt-3">
                <div className="col-md-4 col-4">
                  <div className="form-group">
                    <input
                      type="text"
                      name="charge"
                      onChange={handleInputChange}
                      className="form-control login-input profile-inpt"
                      placeholder="$20.00"
                    />
                  </div>
                </div>
                <div className="col-md-4 pl-0 col-4">
                  <div className="form-group">
                    <input
                      type="text"
                      name="visitingCharges"
                      onChange={handleInputChange}
                      className="form-control login-input profile-inpt"
                      placeholder="Visiting charges ($)"
                    />
                  </div>
                </div>

                <div className="col-md-4 pl-0 col-4">
                  <div className="form-group">
                    <input
                      type="text"
                      name="cancellationCharges"
                      onChange={handleInputChange}
                      className="form-control login-input profile-inpt"
                      placeholder="Cancellation charges ($)"
                    />
                  </div>
                </div>
              </div>

              <label htmlFor="#" className="profile-label">
                Frequently asked questions
              </label>

              <Accordion defaultActiveKey="0" className="accordreact">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <img
                      src="images/close-w.svg"
                      className="mr-2 addNew-accorimg"
                      height="18px"
                      alt=""
                    />{" "}
                    Question 1
                    <span className="added-accordtext">
                      <img src="images/arrow-down.svg" alt="" />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <img
                      src="images/close-w.svg"
                      className="mr-2 addNew-accorimg"
                      height="18px"
                      alt=""
                    />{" "}
                    Question 2
                    <span className="added-accordtext">
                      <img src="images/arrow-down.svg" alt="" />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <img
                      src="images/close-w.svg"
                      className="mr-2 addNew-accorimg"
                      height="18px"
                      alt=""
                    />{" "}
                    Question 3
                    <span className="added-accordtext">
                      <img src="images/arrow-down.svg" alt="" />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <img
                      src="images/close-w.svg"
                      className="mr-2 addNew-accorimg"
                      height="18px"
                      alt=""
                    />{" "}
                    Question 4
                    <span className="added-accordtext">
                      <img src="images/arrow-down.svg" alt="" />
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <div className="row mt-4">
                <div className="col-md-12">
                  <button
                    type="button"
                    className="btn btn-login mr-3"
                    onClick={onPublishService}
                  >
                    PUBLISH YOUR SERVICE
                  </button>
                  <Link
                    to="/services-dashboard"
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
    </>
  );
}

export default AddNewService;

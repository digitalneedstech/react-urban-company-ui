import React from "react";
import Header from "../../Layout/header";
import Footer from "../../Layout/footer";
import ServicesList from "../../components/servicesList";
import Testimonials from "../../components/testimonials";
import ServicesListFilters from "../../components/servicesListFilters";

function ServiceList() {
  return (
    <>
      <Header />
      <ServicesListFilters />
      <ServicesList />
      <section className="position-relative py-4 py-sm-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="images/project-left.png" className="img-fluid" alt="" />
            </div>
            <div className="col-md-6">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="top-bannerHead">
                    <h1>
                      post a<span> project</span>
                    </h1>
                    <h2>in less than a minute</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button
                      type="button"
                      className="btn btn-login mt-0 mt-sm-2"
                    >
                      POST A PROJECT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <Footer />
    </>
  );
}

export default ServiceList;

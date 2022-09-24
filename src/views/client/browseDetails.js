import React, { useState } from "react";
import ServicesDetails from "../../components/servicesDetails";
import Footer from "../../Layout/footer";
import Header from "../../Layout/loggedInHeader";

function ClientbrowseDetails() {
  return (
    <>
      <Header showRegisterButton={true} />
      <ServicesDetails />
      <Footer />
    </>
  );
}

export default ClientbrowseDetails;

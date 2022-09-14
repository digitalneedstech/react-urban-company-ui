import React, { useState } from "react";
import ServicesDetails from "../../components/servicesDetails";
import Header from "../../Layout/loggedInHeader";

function ClientbrowseDetails() {
  return (
    <>
      <Header showRegisterButton={true} />
      <ServicesDetails />
    </>
  );
}

export default ClientbrowseDetails;

import React from "react";
import Header from "../../Layout/loggedInHeader";
import ServicesDetails from "../../components/servicesDetails";

function ClientbrowseDetailsservices() {
  return (
    <>
      <Header showRegisterButton={true} />
      <ServicesDetails />
    </>
  );
}

export default ClientbrowseDetailsservices;

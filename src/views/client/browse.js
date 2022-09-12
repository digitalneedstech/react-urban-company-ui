import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Layout/loggedInHeader";
import ServicesList from "../../components/servicesList";
import ServicesListFilters from "../../components/servicesListFilters";

function Clientbrowsse() {
  return (
    <>
      <Header showRegisterButton={true} showNav={true} />
      <ServicesListFilters showNav={true} />
      <ServicesList showNav={true} />
    </>
  );
}

export default Clientbrowsse;

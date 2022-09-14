import React, { useState } from "react";
import _ from "lodash";
import Header from "../../Layout/loggedInHeader";
import ServicesList from "../../components/servicesList";
import ServicesListFilters from "../../components/servicesListFilters";

function Clientbrowsse() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header showRegisterButton={true} showNav={true} />
      <ServicesListFilters showNav={true} count={count} />
      <ServicesList showNav={true} setCount={setCount} />
    </>
  );
}

export default Clientbrowsse;

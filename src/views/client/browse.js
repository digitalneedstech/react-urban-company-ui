import React, { useEffect, useState } from "react";
import _ from "lodash";
import Header from "../../Layout/loggedInHeader";
import ServicesList from "../../components/servicesList";
import ServicesListFilters from "../../components/servicesListFilters";
import { fetchData } from "../../redux/helpers";

function Clientbrowsse() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await fetchData("/services", "GET");
      console.log(response);
      if (!_.isEmpty(response)) {
        setServices(response.services);
      }
    })();
  }, []);

  return (
    <>
      <Header showRegisterButton={true} showNav={true} />
      <ServicesListFilters showNav={true} />
      <ServicesList showNav={true} />
    </>
  );
}

export default Clientbrowsse;

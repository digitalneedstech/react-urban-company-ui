import React, { useState } from "react";
import _ from "lodash";
import { useLocation } from "react-router-dom";
import Header from "../../Layout/loggedInHeader";
import ServicesList from "../../components/servicesList";
import ServicesListFilters from "../../components/servicesListFilters";
import Footer from "../../Layout/footer";

function Clientbrowsse() {
  const { state } = useLocation();
  const [count, setCount] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState(state?.search);

  return (
    <>
      <Header showRegisterButton={true} showNav={true} />
      <ServicesListFilters
        showNav={true}
        count={count}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <ServicesList showNav={true} setCount={setCount} search={searchKeyword} />
      <Footer />
    </>
  );
}

export default Clientbrowsse;

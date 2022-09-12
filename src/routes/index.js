import React, { useEffect } from "react";
import _ from "lodash";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

import Login from "../views/login";
import Signup from "../views/signupSelector";
import ServiceSignupform from "../views/service-provider/signup";

import Home from "../views/index";
import ServicesList from "../views/guest/servicesList";

import ClientSignupform from "../views/client/signup";
import ClientUploadProfileImage from "../views/client/uploadProfileImg";
import ClientSelectorHireOrBrowse from "../views/client/selector-hire-browse";
import ClientBrowse from "../views/client/browse";
import ClientBrowseDetails from "../views/client/browseDetails";
import ClientBrowseDetailsservices from "../views/client/browseDetailsServices";

import IndividualUploadProfileImage from "../views/service-provider/individual/uploadProfileImg";
import IndividualKYC from "../views/service-provider/individual/kyc";
import IndividualOnsiteOffsite from "../views/service-provider/individual/onsiteoroffsite";
import IndividualProfilebuilder1 from "../views/service-provider/individual/profilebuilder1";
import IndividualProfilebuilder2 from "../views/service-provider/individual/profilebuilder2";
import IndividualProfilebuilder3 from "../views/service-provider/individual/profilebuilder3";
import IndividualProfilebuilder4 from "../views/service-provider/individual/profilebuilder4";

import CompanyUploadLogo from "../views/service-provider/company/uploadCompanyLogo";
import CompanyKYC from "../views/service-provider/company/kyc";
import AddTeamMemberform1 from "../views/service-provider/company/addTeamMemberform1";
import AddTeamMemberform2 from "../views/service-provider/company/addTeamMemberform2";
import AddTeamMemberform3 from "../views/service-provider/company/addTeamMemberform3";
import AddTeamMemberform4 from "../views/service-provider/company/addTeamMemberform4";

import BrowseCheckout from "../views/checkout/browseCheckout";
import BrowseCheckoutconfirmed from "../views/checkout/browseCheckoutconfirmed";
import ServiceDetails from "../views/guest/servicesDetails";

const AuthRoute = ({ component: Component, ...rest }) => {
  const [user, loading, error] = useAuthState(auth);

  return !_.isEmpty(user) ? <Outlet /> : <Navigate to="/login" />;
};

function RoutesComp() {
  return (
    <Router>
      <Routes>
        {/* Login and Signup */}
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup-selector" exact element={<Signup />} />
        <Route path="/service-signup" exact element={<ServiceSignupform />} />

        {/* Guest Routes */}
        <Route path="/" exact element={<Home />} />
        <Route path="/services-list" exact element={<ServicesList />} />
        <Route path="/services-details" exact element={<ServiceDetails />} />

        {/* Client Routes */}
        <Route path="/client-signup" exact element={<ClientSignupform />} />
        <Route exact path="/client-upload-image" element={<AuthRoute />}>
          <Route
            path="/client-upload-image"
            exact
            element={<ClientUploadProfileImage />}
          />
        </Route>
        <Route
          path="/client-selector-hire-browse"
          exact
          element={<ClientSelectorHireOrBrowse />}
        />
        <Route path="/client-browse" exact element={<ClientBrowse />} />
        <Route
          path="/client-browse-details"
          exact
          element={<ClientBrowseDetails />}
        />
        <Route
          path="/client-browse-details-services"
          exact
          element={<ClientBrowseDetailsservices />}
        />

        {/* Service Provider Individuals Routes */}
        <Route exact path="/individual-upload-image" element={<AuthRoute />}>
          <Route
            path="/individual-upload-image"
            exact
            element={<IndividualUploadProfileImage />}
          />
        </Route>
        <Route exact path="/individual-kyc" element={<AuthRoute />}>
          <Route path="/individual-kyc" exact element={<IndividualKYC />} />
        </Route>
        <Route
          path="/individual-onsiteoroffsite"
          exact
          element={<IndividualOnsiteOffsite />}
        />
        <Route
          path="/individual-profile-builder-1"
          exact
          element={<IndividualProfilebuilder1 />}
        />
        <Route
          path="/individual-profile-builder-2"
          exact
          element={<IndividualProfilebuilder2 />}
        />
        <Route
          path="/individual-profile-builder-3"
          exact
          element={<IndividualProfilebuilder3 />}
        />
        <Route
          path="/individual-profile-builder-4"
          exact
          element={<IndividualProfilebuilder4 />}
        />

        {/* Service Provider Company Routes */}
        {/* <Route exact path="/company-upload-logo" element={<AuthRoute />}> */}
        <Route
          path="/company-upload-logo"
          exact
          element={<CompanyUploadLogo />}
        />
        {/* </Route> */}
        <Route path="/company-kyc" exact element={<CompanyKYC />} />
        <Route
          path="/add-team-member-1"
          exact
          element={<AddTeamMemberform1 />}
        />
        <Route
          path="/add-team-member-2"
          exact
          element={<AddTeamMemberform2 />}
        />
        <Route
          path="/add-team-member-3"
          exact
          element={<AddTeamMemberform3 />}
        />
        <Route
          path="/add-team-member-4"
          exact
          element={<AddTeamMemberform4 />}
        />

        {/* Checkout Routes */}
        <Route path="/browse-checkout" exact element={<BrowseCheckout />} />
        <Route
          path="/browse-checkout-confirmed"
          exact
          element={<BrowseCheckoutconfirmed />}
        />
      </Routes>
    </Router>
  );
}

export default RoutesComp;

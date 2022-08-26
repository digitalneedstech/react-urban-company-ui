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
import Home from "../views/index";
import Login from "../views/login";
import Signup from "../views/signupSelector";
import ClientSignupform from "../views/client/signup";
import ServiceSignupform from "../views/service-provider/signup";
import ClientUploadProfileImage from "../views/client/uploadProfileImg";
import IndividualUploadProfileImage from "../views/service-provider/individual/uploadProfileImg";
import CompanyUploadLogo from "../views/service-provider/company/uploadCompanyLogo";
import IndividualKYC from "../views/service-provider/individual/kyc";
import CompanyKYC from "../views/service-provider/company/kyc";
import IndividualOnsiteOffsite from "../views/service-provider/individual/onsiteoroffsite";
import IndividualProfilebuilder1 from "../views/service-provider/individual/profilebuilder1";
import IndividualProfilebuilder2 from "../views/service-provider/individual/profilebuilder2";
import IndividualProfilebuilder3 from "../views/service-provider/individual/profilebuilder3";
import IndividualProfilebuilder4 from "../views/service-provider/individual/profilebuilder4";
import AddTeamMemberform1 from "../views/service-provider/company/addTeamMemberform1";
import AddTeamMemberform2 from "../views/service-provider/company/addTeamMemberform2";
import AddTeamMemberform3 from "../views/service-provider/company/addTeamMemberform3";
import AddTeamMemberform4 from "../views/service-provider/company/addTeamMemberform4";
import ClientsignupUploaded from "../pages/sprint_1/clientsignup-uploaded";
import Selectorhire from "../pages/sprint_1/selector-hire";
import Selectorbrowse from "../pages/sprint_1/selector-browse";
import ServiceproviderSelector from "../pages/sprint_1/serviceprovider-selector";
import ServiceproviderProfile from "../pages/sprint_1/serviceprovider-profile";
import ServiceproviderUploaded from "../pages/sprint_1/serviceprovider-uploaded";
import ServiceproviderSignupformCompany from "../pages/sprint_1/serviceprovider-signupform(company)";
import ServiceproviderCompanyuploaded from "../pages/sprint_1/serviceprovider-companyUploaded";
import ServiceproviderSignupformFull from "../pages/sprint_1/serviceprovider-signupformFull";
import ServiceProviderIndividualsignupUploaded from "../pages/sprint_1/serviceProviderIndividualsignup-uploaded";

const AuthRoute = ({ component: Component, ...rest }) => {
  const [user, loading, error] = useAuthState(auth);

  return !_.isEmpty(user) ? <Outlet /> : <Navigate to="/login" />;
};

function RoutesComp() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup-selector" exact element={<Signup />} />
        <Route path="/client-signup" exact element={<ClientSignupform />} />
        <Route path="/service-signup" exact element={<ServiceSignupform />} />
        <Route exact path="/client-upload-image" element={<AuthRoute />}>
          <Route
            path="/client-upload-image"
            exact
            element={<ClientUploadProfileImage />}
          />
        </Route>
        <Route exact path="/individual-upload-image" element={<AuthRoute />}>
          <Route
            path="/individual-upload-image"
            exact
            element={<IndividualUploadProfileImage />}
          />
        </Route>
        <Route exact path="/company-upload-logo" element={<AuthRoute />}>
          <Route
            path="/company-upload-logo"
            exact
            element={<CompanyUploadLogo />}
          />
        </Route>
        <Route exact path="/individual-kyc" element={<AuthRoute />}>
          <Route path="/individual-kyc" exact element={<IndividualKYC />} />
        </Route>
        <Route path="/company-kyc" exact element={<CompanyKYC />} />
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

        <Route
          path="/ClientsignupUploaded"
          exact
          element={<ClientsignupUploaded />}
        />
        <Route
          path="/ServiceProviderIndividualsignupUpload"
          exact
          element={<ServiceProviderIndividualsignupUploaded />}
        />
        <Route path="/Selectorhire" exact element={<Selectorhire />} />
        <Route path="/Selectorbrowse" exact element={<Selectorbrowse />} />
        <Route
          path="/ServiceproviderSelector"
          exact
          element={<ServiceproviderSelector />}
        />
        <Route
          path="/ServiceproviderProfile"
          exact
          element={<ServiceproviderProfile />}
        />
        <Route
          path="/ServiceproviderUploaded"
          exact
          element={<ServiceproviderUploaded />}
        />
        <Route
          path="/ServiceproviderSignupformCompany"
          exact
          element={<ServiceproviderSignupformCompany />}
        />
        <Route
          path="/ServiceproviderCompanyuploaded"
          exact
          element={<ServiceproviderCompanyuploaded />}
        />
        <Route
          path="/ServiceproviderSignupformFull"
          exact
          element={<ServiceproviderSignupformFull />}
        />
      </Routes>
    </Router>
  );
}

export default RoutesComp;

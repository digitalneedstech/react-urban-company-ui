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
import ClientUploadProfileImage from "../views/client/uploadProfileImg";
import IndividualUploadProfileImage from "../views/service-provider/individual/uploadProfileImg";
import CompanyUploadLogo from "../views/service-provider/company/uploadCompanyLogo";
import ClientsignupUploaded from "../pages/sprint_1/clientsignup-uploaded";
import Selectorhire from "../pages/sprint_1/selector-hire";
import Selectorbrowse from "../pages/sprint_1/selector-browse";
import ServiceproviderSelector from "../pages/sprint_1/serviceprovider-selector";
import ServiceSignupform from "../views/service-provider/signup";
import ServiceproviderProfile from "../pages/sprint_1/serviceprovider-profile";
import ServiceproviderUploaded from "../pages/sprint_1/serviceprovider-uploaded";
import ServiceprovicerOnsiteOffsite from "../pages/sprint_1/serviceprovider-(onsiteoroffsite)";
import ServiceproviderProfilebuilder1 from "../pages/sprint_1/serviceprovider-profilebuilder1";
import ServiceproviderProfilebuilder2 from "../pages/sprint_1/serviceprovider-profilebuilder2";
import ServiceproviderProfilebuilder3 from "../pages/sprint_1/serviceprovider-profilebuilder3";
import ServiceproviderProfilebuilder4 from "../pages/sprint_1/serviceprovider-profilebuilder4";
import ServiceproviderSignupformCompany from "../pages/sprint_1/serviceprovider-signupform(company)";
import ServiceproviderCompanyuploaded from "../pages/sprint_1/serviceprovider-companyUploaded";
import ServiceproviderTeamMemberform1 from "../pages/sprint_1/serviceprovider-teamMemberform";
import ServiceproviderTeamMemberform2 from "../pages/sprint_1/serviceprovider-teamMemberform2";
import ServiceproviderTeamMemberform3 from "../pages/sprint_1/serviceprovider-teamMemberform3";
import ServiceproviderTeamMemberform4 from "../pages/sprint_1/serviceprovider-teamMemberform4";
import ServiceproviderSignupformFull from "../pages/sprint_1/serviceprovider-signupformFull";
import ServiceproviderCompanyfull from "../pages/sprint_1/serviceprovider-companyFull";
import ServiceProviderIndividualsignupUploaded from "../pages/sprint_1/serviceProviderIndividualsignup-uploaded";
import ServiceproviderIndividualSignupformFull from "../pages/sprint_1/serviceproviderindividual-signupformFull";

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
        <Route
          path="/ServiceProviderIndividualsignupfull"
          exact
          element={<ServiceproviderIndividualSignupformFull />}
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
          path="/ServiceprovicerOnsiteOffsite"
          exact
          element={<ServiceprovicerOnsiteOffsite />}
        />
        <Route
          path="/ServiceproviderProfilebuilder1"
          exact
          element={<ServiceproviderProfilebuilder1 />}
        />
        <Route
          path="/ServiceproviderProfilebuilder2"
          exact
          element={<ServiceproviderProfilebuilder2 />}
        />
        <Route
          path="/ServiceproviderProfilebuilder3"
          exact
          element={<ServiceproviderProfilebuilder3 />}
        />
        <Route
          path="/ServiceproviderProfilebuilder4"
          exact
          element={<ServiceproviderProfilebuilder4 />}
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
          path="/ServiceproviderTeamMemberform1"
          exact
          element={<ServiceproviderTeamMemberform1 />}
        />
        <Route
          path="/ServiceproviderTeamMemberform2"
          exact
          element={<ServiceproviderTeamMemberform2 />}
        />
        <Route
          path="/ServiceproviderTeamMemberform3"
          exact
          element={<ServiceproviderTeamMemberform3 />}
        />
        <Route
          path="/ServiceproviderTeamMemberform4"
          exact
          element={<ServiceproviderTeamMemberform4 />}
        />
        <Route
          path="/ServiceproviderSignupformFull"
          exact
          element={<ServiceproviderSignupformFull />}
        />
        <Route
          path="/ServiceproviderCompanyfull"
          exact
          element={<ServiceproviderCompanyfull />}
        />
      </Routes>
    </Router>
  );
}

export default RoutesComp;

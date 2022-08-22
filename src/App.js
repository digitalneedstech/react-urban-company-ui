import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/sprint_1/index'; 
import Login from './pages/sprint_1/login'; 
import Password from './pages/sprint_1/password'; 
import Selector from "./pages/sprint_1/clientsinup-selector";
import Clientsignupform from "./pages/sprint_1/clientsignup-signupform";
import Clientsignupprofile from "./pages/sprint_1/clientsignup-profileimg";
import ClientsignupUploaded from "./pages/sprint_1/clientsignup-uploaded";
import Selectorhire from "./pages/sprint_1/selector-hire";
import Selectorbrowse from "./pages/sprint_1/selector-browse";
import ServiceproviderSelector from "./pages/sprint_1/serviceprovider-selector";
import ServiceproviderSignupform from "./pages/sprint_1/serviceprovider-signupform";
import ServiceproviderProfile from "./pages/sprint_1/serviceprovider-profile";
import ServiceproviderUploaded from "./pages/sprint_1/serviceprovider-uploaded";
import ServiceprovicerOnsiteOffsite from "./pages/sprint_1/serviceprovider-(onsiteoroffsite)";
import ServiceproviderProfilebuilder1 from "./pages/sprint_1/serviceprovider-profilebuilder1";
import ServiceproviderProfilebuilder2 from "./pages/sprint_1/serviceprovider-profilebuilder2";
import ServiceproviderProfilebuilder3 from "./pages/sprint_1/serviceprovider-profilebuilder3";
import ServiceproviderProfilebuilder4 from "./pages/sprint_1/serviceprovider-profilebuilder4";
import ServiceproviderSignupformCompany from "./pages/sprint_1/serviceprovider-signupform(company)";
import ServiceproviderCompanylogo from "./pages/sprint_1/serviceprovider-companylogo";
import ServiceproviderCompanyuploaded from "./pages/sprint_1/serviceprovider-companyUploaded";
import ServiceproviderTeamMemberform1 from "./pages/sprint_1/serviceprovider-teamMemberform";
import ServiceproviderTeamMemberform2 from "./pages/sprint_1/serviceprovider-teamMemberform2";
import ServiceproviderTeamMemberform3 from "./pages/sprint_1/serviceprovider-teamMemberform3";
import ServiceproviderTeamMemberform4 from "./pages/sprint_1/serviceprovider-teamMemberform4";
import ServiceproviderSignupformFull from "./pages/sprint_1/serviceprovider-signupformFull";
import ServiceproviderCompanyfull from "./pages/sprint_1/serviceprovider-companyFull";
import ServiceProviderIndividualsignupprofile from "./pages/sprint_1/serviceProviderIndividualsignup-profileimg";
import ServiceProviderIndividualsignupUploaded from "./pages/sprint_1/serviceProviderIndividualsignup-uploaded";
import ServiceproviderIndividualSignupformFull from "./pages/sprint_1/serviceproviderindividual-signupformFull";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>} />  
        <Route path='/login' exact element={<Login/>} /> 
        <Route path='/password' exact element={<Password/>} /> 
        <Route path='/Selector' exact element={<Selector/>} /> 
        <Route path='/Clientsignupform' exact element={<Clientsignupform/>} />
        <Route path='/Clientsignupprofile' exact element={<Clientsignupprofile/>} />
        <Route path='/ClientsignupUploaded' exact element={<ClientsignupUploaded/>} />
        <Route path='/ServiceProviderIndividualsignupprofile' exact element={<ServiceProviderIndividualsignupprofile/>} />
        <Route path='/ServiceProviderIndividualsignupUpload' exact element={<ServiceProviderIndividualsignupUploaded/>} />
        <Route path='/ServiceProviderIndividualsignupfull' exact element={<ServiceproviderIndividualSignupformFull/>} />
        <Route path='/Selectorhire' exact element={<Selectorhire/>} />
        <Route path='/Selectorbrowse' exact element={<Selectorbrowse/>} />
        <Route path='/ServiceproviderSelector' exact element={<ServiceproviderSelector/>} />
        <Route path='/ServiceproviderSignupform' exact element={<ServiceproviderSignupform/>} />
        <Route path='/ServiceproviderProfile' exact element={<ServiceproviderProfile/>} />
        <Route path='/ServiceproviderUploaded' exact element={<ServiceproviderUploaded/>} />
        <Route path='/ServiceprovicerOnsiteOffsite' exact element={<ServiceprovicerOnsiteOffsite/>} />
        <Route path='/ServiceproviderProfilebuilder1' exact element={<ServiceproviderProfilebuilder1/>} />
        <Route path='/ServiceproviderProfilebuilder2' exact element={<ServiceproviderProfilebuilder2/>} />
        <Route path='/ServiceproviderProfilebuilder3' exact element={<ServiceproviderProfilebuilder3/>} />
        <Route path='/ServiceproviderProfilebuilder4' exact element={<ServiceproviderProfilebuilder4/>} />
        <Route path='/ServiceproviderSignupformCompany' exact element={<ServiceproviderSignupformCompany/>} />
        <Route path='/ServiceproviderCompanylogo' exact element={<ServiceproviderCompanylogo/>} />
        <Route path='/ServiceproviderCompanyuploaded' exact element={<ServiceproviderCompanyuploaded/>} />
        <Route path='/ServiceproviderTeamMemberform1' exact element={<ServiceproviderTeamMemberform1/>} />
        <Route path='/ServiceproviderTeamMemberform2' exact element={<ServiceproviderTeamMemberform2/>} />
        <Route path='/ServiceproviderTeamMemberform3' exact element={<ServiceproviderTeamMemberform3/>} />
        <Route path='/ServiceproviderTeamMemberform4' exact element={<ServiceproviderTeamMemberform4/>} />
        <Route path='/ServiceproviderSignupformFull' exact element={<ServiceproviderSignupformFull/>} />
        <Route path='/ServiceproviderCompanyfull' exact element={<ServiceproviderCompanyfull/>} />

        

      </Routes>
    </Router>
  );
}

export default App;

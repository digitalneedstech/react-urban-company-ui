import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../Layout/loggedInHeader";
import UploadProfileImage from "../../../components/uploadProfileImage";

function UploadCompanyLogo() {
  const navigate = useNavigate();

  const afterImageUpload = () => {
    navigate("/company-kyc");
  };

  return (
    <>
      <Header />
      <UploadProfileImage afterImageUpload={afterImageUpload} />
    </>
  );
}

export default UploadCompanyLogo;

import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Layout/loggedInHeader";
import UploadProfileImage from "../../components/uploadProfileImage";

function ClientUploadImage() {
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

export default ClientUploadImage;

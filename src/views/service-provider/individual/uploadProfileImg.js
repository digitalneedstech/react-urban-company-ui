import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../Layout/loggedInHeader";
import UploadProfileImage from "../../../components/uploadProfileImage";
import Footer from "../../../Layout/footer";

function UploadIndividualProfileImage() {
  const navigate = useNavigate();

  const afterImageUpload = () => {
    navigate("/individual-kyc");
  };

  return (
    <>
      <Header />
      <UploadProfileImage afterImageUpload={afterImageUpload} />
      <Footer />
    </>
  );
}

export default UploadIndividualProfileImage;

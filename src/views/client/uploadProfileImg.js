import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Layout/loggedInHeader";
import UploadProfileImage from "../../components/uploadProfileImage";
import Footer from "../../Layout/footer";

function ClientUploadImage() {
  const navigate = useNavigate();

  const afterImageUpload = () => {
    navigate("/client-selector-hire-browse");
  };

  return (
    <>
      <Header />
      <UploadProfileImage afterImageUpload={afterImageUpload} />
      <Footer />
    </>
  );
}

export default ClientUploadImage;

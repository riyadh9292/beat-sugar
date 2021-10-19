import React from "react";
import Banner from "./Banner/Banner";
import OurDoctors from "./OurDoctors/OurDoctors";
import RecoverDiabulimia from "./RecoverFromDiabulimia/RecoverDiabulimia";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <OurDoctors />
      <RecoverDiabulimia />
    </div>
  );
};

export default Home;

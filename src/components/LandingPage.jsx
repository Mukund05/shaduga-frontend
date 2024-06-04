import React from "react";
import Navbar from "../elements/Navbar";
import Communities from "../elements/Communities";
import Footer from "../elements/Footer";
import LandingPageimg from "../elements/LandingPageimg";

const LandingPage = () => {
  return (
    <div className="bg-[#0d0d0d]">
      <Navbar />
      <Communities />
      <LandingPageimg />
      <Footer />
    </div>
  );
};

export default LandingPage;

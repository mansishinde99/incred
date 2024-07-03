import React from "react";
import Navbar from "../Components/Navbar";
import Voucher from "../Components/Voucher";
import Mainpage from "../Components/Mainpage";
import Graph from "../Components/Graph";
import Stats from "../Components/Stats";
import Investbond from "../Components/Investbond";
import CurrentIssues from "../Components/CurrentIssues";
import TextImg from "../Components/TextImg";
import Awards from "../Components/Awards";
import Faqs from "../Components/Faqs";
import Footer from "../Components/Footer";
import Featured from "../Components/Featured";
// import Testimonials from "../Components/Testimonials";

const MAIN = () => {
  return (
    <div>
      <Voucher />
      <Navbar />
      <Mainpage />
      <Graph />
      <Stats />
      <Investbond />
      <CurrentIssues />
       <TextImg />
      <Featured />
      <Awards />
      {/* <Testimonials /> */}
      <Faqs />
      <Footer />
    </div>
  );
};

export default MAIN;

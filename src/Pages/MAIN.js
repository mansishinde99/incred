import React from "react";
import Navbar from "../Components/Navbar";
import Voucher from "../Components/Voucher";
import Mainpage from "../Components/Mainpage";
import Graph from "../Components/Graph";
import Stats from "../Components/Stats";
import Investbond from "../Components/Investbond";
import Page2 from "../Components/Page2";
import TextImg from "../Components/TextImg";
import Awards from "../Components/Awards";
import Faqs from "../Components/Faqs";
import Footer from "../Components/Footer";

const MAIN = () => {
  return (
    <div>
      {/* <Voucher /> */}
      <Navbar />
      <Mainpage />
      <Graph />
      <Stats/>
      <Investbond/>
      <Page2/>
      <TextImg/>
      <Awards/>
      <Faqs/>
      <Footer/>
    </div>
  );
};

export default MAIN;

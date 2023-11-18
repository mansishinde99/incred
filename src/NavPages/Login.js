import React, { useState } from "react";
import "../Styles/Login.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

let logImages = [
  {
  img: "https://assets.incredmoney.com/images/webp/assetManagement.webp",
  text: "₹ 1185+ Crs",
  subText: "Assets Under Management",
  },
  {
  img: "https://assets.incredmoney.com/images/webp/ontimePayment.webp",
  text: "100%",
  subText: "On Time Payments",
  },
  {
  img: "https://assets.incredmoney.com/images/webp/investorCommunity.webp",
  text: "1.3 Lakhs+",
  subText: "Users",
  },
  {
  img: "https://assets.incredmoney.com/images/webp/avgReturns.webp",
  text: "10%-12% XIRR",
  subText: "Avg. Returns Earned",
  }
]

const Login = () => {
  const [select, setSelect] = useState("phone");

  var button = (select) => {
    setSelect(select);
  };

  const Settings = {
    dots: false,
    infinity: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  }

  return (
    <div className="loginPage">
      <div className="leftSide">
        <div className="sideBarContent">
          <p className="text">Earn <span>10-12% p.a.</span><br/> fixed returns</p>
          <p className="sub-text">Start with minimum ₹10,000</p>
          <ul>
            <li>Senior Secured Bonds</li>
            <li>Listed</li>
            <li>Anytime Liquidity</li>
          </ul>
        </div>
        <div className="slider">
          <Slider {...Settings}>
            {logImages.map((logImage,i) => (
              <div className="slide-content" key={i}>
                <img src={logImage.img}/>
                <div className="textpart">
                  <p className="text">{logImage.text}</p>
                  <p className="subText">{logImage.subText}</p>
                  </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="rightSide">
        <img className="logo" src="https://assets.incredmoney.com/images/webp/incred-money.webp"/>
        <p className="title">Welcome to <span>InCred Money</span></p>
        {/* <div className="choose">
          <div
            className="via"
            onClick={() => button("phone")}
            style={{
              backgroundColor: select == "phone" ? "#283a97" : "#fff",
              color: select == "phone" ? "#fff" : "#283a97",
              fontWeight: select == "phone" ? "500" : "400",
            }}
          >
            <PhoneIphoneIcon style={{ marginRight: "0.5rem", width: "20px" }} />
            Mobile
          </div>
          <div
            className="via"
            onClick={() => button("email")}
            style={{
              color: select == "email" ? "#fff" : "#283a97",
              backgroundColor: select == "email" ? "#283a97" : "#fff",
              fontWeight: select == "phone" ? "500" : "400",
            }}
          >
            <MailOutlineIcon style={{ marginRight: "0.5rem", width: "20px" }} />
            Email
          </div>
        </div> */}

        <div className="selectContainer">
          {select == "phone" ? (
            <div className="phone">
              <div className="selectCountry">
                <select>
                  <option disabled>Country</option>
                  <option>+91</option>
                </select>
              </div>
              <div style={{border: "1px solid #283a97", width: "0", height: "2.5vw", marginTop: "9px"}}></div>
              <input
                className="numInput"
                placeholder="Mobile Number*"
                inputMode="numeric"
                type="text"
                pattern="[0-9]"
              />
            </div>
          ) : (
            <div className="email">
              <input
                style={{ width: "410px" }}
                className="emailInput"
                placeholder="Email*"
                inputMode="text"
              />
            </div>
          )}
        </div>

        <p className="tnc">
          By proceeding, I accept the <span>Terms & Conditions</span>, and agree
          to receive messages such as OTPs & important updates on WhatsApp.
        </p>

        <button className="loginPageButton">Next</button>
      </div>
    </div>
  );
};

export default Login;

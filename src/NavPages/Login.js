import React, { useEffect, useState } from "react";

import Slider from "react-slick";
import OTPInput from "react-otp-input";

import { Toaster, toast } from "react-hot-toast";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

import { auth } from "../firebase.js";

import "../Styles/Login.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Login = () => {
  const [logImages, setLogImages] = useState([]);
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const url = "https://api.incredmoney.com/content/stats";

    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const statsData = await resp.json();
        setLogImages(statsData.data);
      } catch (error) {
        console.log("error : ", error);
      }
    };

    fetchData();
  }, []);

  const Settings = {
    dots: false,
    infinity: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const onCaptchVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  };

  const onSignup = (e) => {
    e.preventDefault();
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;
    const phoneNumber = "+919152628411";

    console.log(phoneNumber)

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setShowOtp(true);
        toast.success("Otp Sended!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onOtpVerify = () => {
    window.confirmationResult
      .confirm(otp)
      .then(async (result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="loginPage">
      <div className="leftSide">
        <div className="sideBarContent">
          <p className="text">Diversify With Confidence</p>
          <p className="sub-text">
            Start with minimum <span>₹5,000</span>
          </p>
          <ul>
            <li>Up to 9.10% p.a. on FDs</li>
            <li>1-12% p.a. on Bonds</li>
            <li>Anytime Liquidity</li>
          </ul>
        </div>
        <div className="slider">
          <Slider {...Settings}>
            {logImages.stats?.map((logImage, i) => (
              <div className="slide-content" key={i}>
                <img src={logImage.imgUrl} />
                <div className="textpart">
                  <p className="text">{logImage.text}</p>
                  <p className="subText">{logImage.subtext}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="rightSide">
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2>Login Successfully</h2>
        ) : (
          <>
            {showOtp ? (
              <div className="verification">
                <p className="title">
                  Welcome to <span>InCred Money</span>
                </p>
                <p>We have sent verification code</p>
                <OTPInput numInputs={4} value={otp} onChange={setOtp} />
                <p className="tnc">
                  By proceeding, I accept the <span>Terms & Conditions</span>,
                  and agree to receive messages such as OTPs & important updates
                  on WhatsApp.
                </p>
                <button className="loginPageButton" onClick={onOtpVerify}>
                  Verify
                </button>
              </div>
            ) : (
              <>
                <img
                  className="logo"
                  alt="InCred Money"
                  src="https://assets.incredmoney.com/images/webp/incred-money.webp"
                />
                <p className="title">
                  Welcome to <span>InCred Money</span>
                </p>
                <div className="selectContainer">
                  <div className="phone">
                    <div className="selectCountry">
                      <select>
                        <option disabled>Country</option>
                        <option>+91</option>
                      </select>
                    </div>
                    <div
                      style={{
                        border: "1px solid #283a97",
                        width: "0",
                        height: "2.5vw",
                        marginTop: "9px",
                      }}
                    ></div>
                    <input
                      className="numInput"
                      placeholder="Mobile Number*"
                      inputMode="numeric"
                      type="text"
                      pattern="[0-9]*"
                    />
                  </div>
                  <p className="tnc">
                    By proceeding, I accept the <span>Terms & Conditions</span>,
                    and agree to receive messages such as OTPs & important
                    updates on WhatsApp.
                  </p>

                  <button className="loginPageButton" onClick={onSignup}>
                    Next
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Login;

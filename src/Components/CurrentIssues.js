import React, { useEffect, useState } from "react";
import "../Styles/CurrentIssues.css";
import Slider from "react-slick";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Switch } from "antd";

const CurrentIssues = () => {
  const [bonds, setBonds] = useState([]);
  const [fd, setFd] = useState([]);
  const [color, setColor] = useState("bonds");
  const [switchOn, setSwitchOn] = useState([]);

  useEffect(() => {
    fetch("https://api.incredmoney.com/orobonds/bonds/")
      .then((response) => response.json())
      .then((json) => setBonds(json));
  }, []);

  useEffect(() => {
    fetch("https://api.incredmoney.com/fixedDeposits/fd")
      .then((resp) => resp.json())
      .then((json) => {
        setFd(json);
        setSwitchOn(Array(json.data.length).fill(true)); // Initialize switch states based on fd data length
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
  };

  const changeColor = (color) => {
    setColor(color);
  };

  const toggleSwitch = (index) => {
    setSwitchOn((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="currentIssues">
      <h1 className="head">Current Issues</h1>

      <div className="bonds-button">
        <button
          onClick={() => changeColor("bonds")}
          style={{
            backgroundColor: color === "bonds" ? "#283a97" : "#fff",
            color: color === "bonds" ? "#fff" : "#283a97",
          }}
        >
          Bonds
        </button>
        <button
          onClick={() => changeColor("deposit")}
          style={{
            color: color === "deposit" ? "#fff" : "#283a97",
            backgroundColor: color === "deposit" ? "#283a97" : "#fff",
          }}
        >
          Fixed Deposits
        </button>
      </div>

      {color === "bonds" ? (
        <div className="bonds">
          <Slider {...settings}>
            {bonds.data?.map((data, id) => {
              return data.soldOutTxt >= 25 && data.soldOutTxt <= 85 ? (
                <div className="bondsCards" key={id}>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar"></div>
                  </div>
                  <p className="soldout">{data.soldOutTxt}% sold out</p>
                  <div className="logo-displayName">
                    <img className="logo" src={data.logoUrl} alt="logo" />
                    <p className="displayName">{data.displayName}</p>
                  </div>
                  <li>Corporate Bond</li>
                  <p className="maturity">Maturity Date: {data.maturityDate}</p>
                  <div className="wrapper">
                    <div className="content">
                      <p className="text1">Min. Investment Amount</p>
                      <p className="text2">₹{data.minAmt}</p>
                    </div>
                    <div className="content">
                      <p className="text1">Credit Rating</p>
                      <p className="text2">{data.rating}</p>
                    </div>
                    <div className="content">
                      <p className="text1">Interest Payout</p>
                      <p className="text2">{data.couponType}</p>
                    </div>
                    <div className="content">
                      <p className="text1">Principal Repayment</p>
                      <p className="text2">{data.principalRepayment}</p>
                    </div>
                  </div>
                  <a className="view-details" href="#">
                    <button className="details">View Details</button>
                  </a>
                </div>
              ) : null;
            })}
          </Slider>
        </div>
      ) : (
        <div className="deposits">
          <Slider {...settings}>
            {fd.data?.map((data, id) => {
              return (
                <div className="fixed-deposits-cards" key={id}>
                  <div className="content">
                    <p className="return">{data.productTagLine}</p>
                    <p className="citizen">Sr. Citizen</p>

                    <Switch
                      checked={switchOn[id] || false}
                      onChange={() => toggleSwitch(id)}
                    />
                  </div>
                  <div className="content">
                    <img src={data.logoUrl} alt="logo" />
                    <p className="display-name">{data.displayName}</p>
                    <div>
                      <p className="interest">Interest up to</p>
                      <div className="annum">
                        {switchOn[id] ? (
                          <p className="return-amount">
                            {data.maxReturns.returns +
                              data.maxReturns.seniorCitizenBenefits +
                              data.maxReturns.womenBenefits}
                          </p>
                        ) : (
                          <p className="return-amount">
                            {data.maxReturns.returns}
                          </p>
                        )}
                        <div className="perc">
                          <p className="percent">%</p>
                          <p className="per-annum">p.a.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content2">
                    <img
                      className="sheild"
                      src="https://assets.incredmoney.com/images/webp/NeutralCard1.webp"
                      alt="Easy Withdrawal"
                    />
                    <p className="withdrawal">Easy Withdrawal</p>

                    <img
                      className="star"
                      src="https://assets.incredmoney.com/images/webp/NeutralCard2.webp"
                      alt="DICGC Insured"
                    />
                    <p className="insured">DICGC Insured</p>
                  </div>
                  <a className="view-details" href="#">
                    <button className="details">
                      View Details{" "}
                      <ArrowOutwardIcon style={{ paddingLeft: ".5vw" }} />
                    </button>
                  </a>
                </div>
              );
            })}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default CurrentIssues;

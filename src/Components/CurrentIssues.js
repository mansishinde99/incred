import React, { useEffect, useState } from "react";
import { Switch } from "antd";
import Slider from "react-slick";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import "../Styles/CurrentIssues.css";

const CurrentIssues = () => {
  const [fd, setFd] = useState([]);
  const [bonds, setBonds] = useState([]);
  const [color, setColor] = useState("bonds");

  useEffect(() => {
    fetch("https://api.incredmoney.com/orobonds/bonds/")
      .then((response) => response.json())
      .then((data) => setBonds(data.data));
  }, []);

  useEffect(() => {
    fetch("https://api.incredmoney.com/fixedDeposits/fd")
      .then((response) => response.json())
      .then((json) => {
        const updated = json.data.map((state) => {
          return state;
        });
        setFd(updated);
      });
  }, []);

  const toggleSwitch = (index) => {
    setFd((prevState) =>
      prevState.map((state, i) =>
        i === index ? { ...state, switchOn: !state.switchOn } : state
      )
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
  };

  return (
    <div className="currentIssues">
      <h1 className="head">Current Issues</h1>
      <div className="bonds-button">
        <button
          onClick={() => setColor("bonds")}
          style={{
            color: color === "bonds" ? "#fff" : "#283a97",
            backgroundColor: color === "bonds" ? "#283a97" : "#fff",
          }}
        >
          Bonds
        </button>
        <button
          onClick={() => setColor("deposit")}
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
            {bonds.map(
              (data, id) =>
                data.soldOutTxt >= 25 &&
                data.soldOutTxt <= 85 && (
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
                    <p className="maturity">
                      Maturity Date: {data.maturityDate}
                    </p>
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
                )
            )}
          </Slider>
        </div>
      ) : (
        <div className="deposits">
          <Slider {...settings}>
            {fd.map((data, id) => (
              <div className="fixed-deposits-cards" key={id}>
                <div className="content">
                  <p className="return">{data.productTagLine}</p>
                  <p className="citizen">Sr. Citizen</p>
                  <Switch
                    checked={data.switchOn}
                    onChange={() => toggleSwitch(id)}
                  />
                </div>
                <div className="content">
                  <img src={data.logoUrl} alt="logo" />
                  <p className="display-name">{data.displayName}</p>
                  <div>
                    <p className="interest">Interest up to</p>
                    <div className="annum">
                      <p className="return-amount">
                        {data.switchOn
                          ? data.maxReturns.returns +
                            data.maxReturns.seniorCitizenBenefits +
                            data.maxReturns.womenBenefits
                          : data.maxReturns.returns}
                      </p>
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
                    alt="Easy Withdrawal"
                    src="https://assets.incredmoney.com/images/webp/NeutralCard1.webp"
                  />
                  <p className="withdrawal">Easy Withdrawal</p>
                  <img
                    className="star"
                    alt="DICGC Insured"
                    src="https://assets.incredmoney.com/images/webp/NeutralCard2.webp"
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
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default CurrentIssues;

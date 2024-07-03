import React, { useEffect, useState } from "react";
import "../Styles/CurrentIssues.css";
import Slider from "react-slick";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const CurrentIssues = () => {
  const [bonds, setBonds] = useState([]);
  const [fd, setFd] = useState([]);
  const [color, setColor] = useState("bonds");
  const [switchOn, setSwitchOn] = useState(true);

  useEffect(() => {
    fetch("https://api.incredmoney.com/orobonds/bonds/")
      .then((response) => response.json())
      .then((json) => setBonds(json));
  }, []);

  useEffect(() => {
    fetch("https://api.incredmoney.com/fixedDeposits/fd")
      .then((resp) => resp.json())
      .then((json) => setFd(json));
    console.log("Ff", fd);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const changeColor = (color) => {
    setColor(color);
  };

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#888889" : "#283995",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

  
  return (
    <div className="currentIssues">
      <h1 className="head">Current Issues</h1>

      <div className="bonds-button">
        <button
          onClick={() => changeColor("bonds")}
          style={{
            backgroundColor: color == "bonds" ? "#283a97" : "#fff",
            color: color == "bonds" ? "#fff" : "#283a97",
          }}
        >
          Bonds
        </button>
        <button
          onClick={() => changeColor("deposit")}
          style={{
            color: color == "deposit" ? "#fff" : "#283a97",
            backgroundColor: color == "deposit" ? "#283a97" : "#fff",
          }}
        >
          Fixed Deposits
        </button>
      </div>

      {color == "bonds" ? (
        // BONDS
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
                    <img className="logo" src={data.logoUrl} />
                    <p className="displayName">{data.displayName}</p>
                  </div>
                  <li>Corporate Bond</li>
                  {/* <div className="mid">
                <p className="issuer">Issuer: {data.productName}</p>
                <p className="desc">{data.description}</p>
              </div> */}
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
        // FIXED DEPOSITS
        <div className="deposits">
          <Slider {...settings}>
            {fd.data?.map((data, id) => {
              return (
                <div className="fixed-deposits-cards" key={id}>
                  <div className="content">
                    <p className="return">{data.productTagLine}</p>
                    <p className="citizen">Sr. Citizen</p>
                    <Stack direction="row" alignItems="center">
                      <AntSwitch
                        defaultChecked={true}
                        inputProps={{ "aria-label": "ant design" }}
                        onChange={(event) => setSwitchOn(event.target.checked)}
                      />
                    </Stack>
                  </div>

                  <div className="content">
                    <img src={data.logoUrl} />
                    <p className="display-name">{data.displayName}</p>
                    <div>
                      <p className="interest">Interest up to</p>
                      <div className="annum">
                        {switchOn ? 
                        (<p className="return-amount">
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
                    />
                    <p className="withdrawal">Easy Withdrawal</p>

                    <img
                      className="star"
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
              );
            })}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default CurrentIssues;

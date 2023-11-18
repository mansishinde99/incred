import React, { useState } from "react";
import "../Styles/Faqs.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

let ques = [
  {
    Q: "What are alternate investments?",
    A: "Very simply, alternate investments are those that are not a part of traditional financial assets (Fixed deposits, Equity shares, Equity and Debt Mutual Funds) nor Traditional Physical Assets (Real Estate, Physical Gold).                                                                              Please read this blog to learn more about alternate investments:https://www.incredmoney.com/blog/alt-asset Examples of alternate investments are Corporate Bonds, Debentures, Private Equity, Venture Capital, High Yield Debt, P2P Lending, REITs, INVITs, etc.",
  },
  {
    Q: "What are the benefits of alternate investments?",
    A: "Higher Returns                                                                                 Alternate investments have the potential to give an extra kick to your returns. Of course, that extra return comes at some risk. That’s where the curation of platforms like InCred Money comes into the picture. We offer products that are vetted by our financial experts.                          Diversification                                                                                       Alternate assets typically have a lower correlation with traditional assets. For e.g. High yield bonds are not as susceptible to interest rate volatilities as traditional debt instruments. Thus, when alternate assets are added to the portfolio, they reduce the overall risk of the portfolio.                   Protection against Inflation                                                                          Inflation can be a killer. Certain alternate assets, such as REITs & fractional real estate, can serve as a hedge against inflation due to their tangible nature and limited supply. Debt products like Corporate Bonds and Debentures offer a 2%-5% p.a. higher returns than Fixed Deposits helping you combat inflation.",
  },
  {
    Q: "What is a Bond?",
    A: "A bond is an instrument through which corporations borrow money from other institutions and retail investors. The investors earn a fixed rate of interest on the bond at defined intervals and the principal amount is repaid on maturity.",
  },
  {
    Q: "What is a coupon?",
    A: "A coupon is the rate of interest that is paid on the investment value of the bond.",
  },
  {
    Q: "What is the risk associated with bonds?",
    A: "The three major risks associated with Bonds:                                                     Credit Risk- This refers to an event where the borrower is unable to repay either the full or part of the borrowed amount. This risk can be mitigated if the bond is secured which means that there will be a security cover (collateral) available to safeguard the interests of the lender.                      Liquidity risk-This risk refers to the inability to sell and liquidate the bond when you need the funds. Bonds are ideal if the investment horizon matches the maturity of the bond since liquidity in bonds is limited if they need to be sold before the maturity date. Though bonds are traded, the volume remains low.Interest rate risk- This risk refers to the change in the interest rates once the bonds are purchased. If the interest rate goes up after the bonds are purchased, there will be a Mark to Market loss on the investment.Other risks include Reinvestment risk and Fraud risk.",
  },
  {
    Q: "What are the important bond terminologies?",
    A: "Below are some of the important terms used to understand the bond offering:                       Yield:The Yield to Maturity or the YTM reflects the return that the investor will earn if he holds the bond till maturity.                                                                                     Size of the Issue: A large issue size attracts participation from various types of investors and thus, evaluation and diligence are generally more detailed.                                                 Credit Rating: Bonds are usually rated by Credit Rating Agencies like CRISIL, ICRA, CARE, etc. The higher the rating, the less risky the bond is. AAA is generally considered the top rating, and D is the lowest.Issue Type: An issue type can be either public or private.",
  },
  {
    Q: "What is the difference between coupon rate and Yield?",
    A: "The Coupon is the rate of interest that the investor will receive over the period of the bond. Whereas, YTM refers to the return that the investor will earn if he holds the bond till maturity. When the Price of the bond is equal to the Face Value, the Coupon rate and the yield would be the same. When Price is greater than Face value, the Coupon is greater than the yield and vice versa.",
  },
  {
    Q: "Is face value the same as the market price?",
    A: "No, Face value is the price of the security when it was first issued. All the interest payments are calculated based on face value. However, the market price could be higher or lower than the face value, based on prevailing market conditions.",
  },
  {
    Q: "Are bonds secured?",
    A: "Bonds can be secured as well as unsecured. Secured bonds are safer since they are secured with a charge on the issuer’s assets.",
  },
  {
    Q: "Is a DEMAT account mandatory to invest in bonds?",
    A: "Yes. The DEMAT account is mandatory since the bonds will be credited directly to your DEMAT account.  ",
  },
  {
    Q: "What documents do I need to invest in bonds?",
    A: "Minimum KYC documents like PAN, address proof, bank account details, and Demat details are required for onboarding.  ",
  },
  {
    Q: "How is the interest received taxed?",
    A: "The interest received will be taxed as per your income tax slab. TDS will be deducted before the interest amount gets credited to your bank account",
  },
  {
    Q: "How do bonds compare to fixed deposits in terms of interest rates, safety, and liquidity?",
    A: "Interest: In comparison to fixed deposits, bonds generally offer higher interest rates. Depending on the issuer of the bonds, one can get interest of 1%-5% higher than Bank Fixed Deposits.               Safety: Secured bonds are backed by collateral/assets. In case of the bankruptcy of the borrowing company the bondholders will be the first to receive their payments. However, FDs are not backed by assets. They are insured up to ₹ 500,000 by DICGC for the investors’ principal and interest amount.            Liquidity: Fixed Deposits can be liquidated but a penalty will be charged by the bank which will dent your returns significantly. Whereas, it is possible to sell listed corporate bonds on secondary markets at the prevailing market rates.",
  },
];

const Faqs = () => {
  return (
    <div className="faqs">
      <h1>FAQS</h1>
      <div className="question">
        {ques.map((que, i) => {
          return <Question key={i} Qu={que} />;
        })}
      </div>
    </div>
  );
};

const Question = (props) => {
  const [open, setOpen] = useState();

  var opened = () => {
    setOpen(!open);
  };

  return (
    <div className="faq">
      <p>
        {props.Qu.Q}
        <KeyboardArrowRightIcon
          onClick={opened}
          style={{
            transform: open ? "rotate(90deg)" : "rotate(360deg)",
            float: "right",
            color: "gray",
            fontSize: "35px",
          }}
        />
      </p>
      {open ? <p className="answer">{props.Qu.A}</p> : null}
    </div>
  );
};

export default Faqs;

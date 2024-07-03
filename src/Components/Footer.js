import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="logoSection">
          <img src="https://assets.incredmoney.com/images/webp/white-logo.webp" />
          <div>
            <p className="disclaimerTitle">GET IN TOUCH</p>
            <p className="contact">+91 8591871028</p>
            <p className="contact">+91 8928250817</p>
            <p className="contact">connect@incredmoney.com</p>
          </div>
          <div className="socialMedia">
            <p className="disclaimerTitle">SOCIAL MEDIA</p>
            <div className="socialImg">
              <a target="_blank" href="https://www.facebook.com/IncredMoney">
                <img
                  src="https://assets.incredmoney.com/images/webp/FBlogo.webp"
                  alt="facebook"
                />
              </a>
              <a target="_blank" href="https://www.instagram.com/incredmoney/">
                <img
                  src="https://assets.incredmoney.com/images/webp/instaLogo.webp"
                  alt="instagram"
                />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/incredmoney/"
              >
                <img
                  src="https://assets.incredmoney.com/images/webp/linkedinlogo.webp"
                  alt="linkedin"
                />
              </a>
              <a target="_blank" href="https://twitter.com/incredmoney">
                <img
                  src="https://assets.incredmoney.com/images/webp/twitter.webp"
                  alt="twitter"
                />
              </a>
            </div>
          </div>
          <div className="downloads">
            <div className="title-wrap">
              <p className="download-text">Download Incred Money App</p>
            </div>
            <div className="download-img">
              <img src="https://assets.incredmoney.com/images/webp/playstore.webp" />
              <img src="https://assets.incredmoney.com/images/webp/appstore.webp" />
            </div>
          </div>
        </div>
        <div className="disclaimer">
          <p className="disclaimerTitle">Disclaimer</p>
          <p className="disclaimerContent">
            Investments in debt securities are subject to risks. Read all the
            offer related documents carefully. The information contained herein
            is only to enable the Investor (or Lender) to make an informed
            decision. Any decision taken by the investor on the basis of this
            information is the sole responsibility of the Investor (Lender) and
            InCred Money is not liable. InCred Money has partnered with a third
            party platform regarding investments in various alternate investment
            opportunities. InCred Money will not be responsible for the full or
            partial loss of the principal and/or interest of the investor’s
            investment. InCred Money is only an intermediary introducing these
            third party services and is not responsible for any agreement you
            sign with the third party.</p>
            <hr /> 
            <p>InCred Money has been launched with the acquisition of
            Orowealth, one of the leading retail-focused digital investment
            platform. The acquisition brings AuM of INR 1,150+ Cr along with a
            robust technology platform and an experienced team to InCred Money.
            The InCred Money platform will span both B2C and B2B2C verticals,
            providing a comprehensive suite of investment products and services.</p>
            <hr />
            <p>ORO FINANCIAL CONSULTANTS PRIVATE LIMITED is registered as a Stock
            Broker in New Debt Segment of BSE Limited having SEBI registration
            number: INZ000312534.</p>
            <hr />
            <p>InCred Money is a brand name and Alpha Fintech Private Limited is
            the platform provider for this website www.incredmoney.com.
          </p>
        </div>
        <div className="flexFooter">
          <p>
            <a href="">Disclaimer</a>
          </p>
          <p>
            <a href="">Terms & Conditions</a>
          </p>
          <p style={{ border: "none" }}>
            <a href="">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

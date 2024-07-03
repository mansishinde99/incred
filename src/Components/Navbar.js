import React from "react";
import "../Styles/Navbar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from '@mui/icons-material/Menu';
import FiberNewIcon from '@mui/icons-material/FiberNew';


const Navbar = () => {
  return (
    <div className="container">
      <nav>
          <a className="incredImg" href="/">
            <img src="https://assets.incredmoney.com/images/webp/incred-money.webp" />
            
          </a>
        
        <div className="collapseNav">
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li className="dropdown" style={{ display: "flex" }}> 
              <a className="dropbtn">Products</a>
              <ArrowDropDownIcon style={{paddingLeft: ".5vw",height: ".9em", fontSize: "1.6rem"}} />
              <div className="dropdownContent" style={{marginTop:'30px'}}>
                <a className="hovered" style={{color:'black'}}>Corporate Bonds</a>
                <a className="hovered" style={{color:'black'}}>Fixed Deposits <FiberNewIcon style={{color:"#283996"}}/></a>
                <a className="hovered"style={{color:'black'}}>Market Linked Debentures</a>
                <a className="hovered"style={{color:'black'}}>NCD IPO</a>
              </div>
              </li>
              <li>
              <a href="">Refer</a>
            </li>
            <li className="dropdown" style={{ display: "flex" }}> 
              <a className="dropbtn">Company</a>
              <ArrowDropDownIcon style={{paddingLeft: ".5vw",height: ".9em", fontSize: "1.6rem"}} />
              <div className="dropdownContent" style={{marginTop:'30px'}}>
              <a className="hovered" style={{color:'black'}}>Contact Us</a>
                <a className="hovered" style={{color:'black'}}>Important Announcement</a>
                <a className="hovered"style={{color:'black'}}>Media</a>
                <a className="hovered"style={{color:'black'}}>Career</a>
              </div>
            </li>
            <li className="dropdown" style={{ display: "flex" }}> 
              <a className="dropbtn">Download App</a>
              <ArrowDropDownIcon style={{paddingLeft: ".5vw",height: ".9em", fontSize: "1.6rem"}} />
              <div className="dropdownContent" style={{marginTop:'30px'}}>
                <a className="hovered" style={{color:'black'}}>Play Store</a>
                <a className="hovered"style={{color:'black'}}>App Store</a>
              </div>
              </li>
            <li className="dropdown" style={{ display: "flex" }}>
              <a className="dropbtn">Learn</a>
              <ArrowDropDownIcon style={{paddingLeft: ".5vw",height: ".9em", fontSize: "1.6rem"}} />
              <div className="dropdownContent" style={{marginTop:'30px'}}>
                <a className="hovered" style={{color:'black'}}>Blogs</a>
                <a className="hovered"style={{color:'black'}}>Newsletter</a>
                <a className="hovered"style={{color:'black'}}>Calculators</a>
              </div>
            </li>
          </ul>
          <div className="button">
            <a className="loginButton" href="/login">
              Login
            </a>
            <a className="subsButton" href="/signup">
              Sign Up
            </a>
          </div>
        </div>
        <div className="menuIcon">
            <MenuIcon/>
            </div>
      </nav>
    </div>
  );
};

export default Navbar;

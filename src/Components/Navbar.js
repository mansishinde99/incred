import React from "react";
import "../Styles/Navbar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
  return (
    <div className="container">
      <nav>
          <a className="incredImg" href="/">
            <img src="https://www.incredmoney.com/static/images/logo/incred-money.png" />
          </a>
        
        <div className="collapseNav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li className="dropdown" style={{ display: "flex" }}> 
              <a className="dropbtn">Company</a>
              <ArrowDropDownIcon />
              <div className="dropdownContent" style={{marginTop:'30px'}}>
                <a className="hovered" style={{color:'black'}}>Important Announcement</a>
                <a className="hovered"style={{color:'black'}}>Media</a>
                <a className="hovered"style={{color:'black'}}>Career</a>
              </div>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Blogs</a>
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

import React from "react";

import "./footer.css";

import logo from "../../images/logo2.png";

const Footer = () => {
  return (
    <footer>
      <div className="footerLogo">
        <img src={logo}></img>
      </div>
      <div className="footerrLeft">
        <div className="footerText">
          <h4>Latest Blog Post</h4>
          <h3>Ready to get started?</h3>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </div>
        </div>
      </div>

      <div className="footerLeftCentre">
        <ul>
          <h4>PRODUCTS</h4>
          <li>Home Insurance</li>
          <li>Landlords Insurance</li>
          <li>Rent Protection</li>
          <li>Teneants Contents</li>
          <li>Teneants Liability</li>
          <li>Income Protection</li>
          <li>Mortgage Protection</li>
        </ul>
      </div>

      <div className="footerRightCentre">
        <ul>
          <h4>POLICY DOCUMENTS</h4>
          <li>Home Insurance</li>
          <li>Landlords Insurance</li>
          <li>Rent Protection</li>
          <li>Teneants Contents</li>
          <li>Teneants Liability</li>
          <li>Income Protection</li>
          <li>Mortgage Protection</li>
        </ul>
      </div>
      <div className="footerRight">
        <ul>
          <h4>SITEMAP</h4>
          <li>Home</li>
          <li>About us</li>
          <li>Careers</li>
          <li>Contact Us</li>
          <li>Terms & Conditions</li>
          <li>Cookies</li>
          <li>Accessibility</li>
          <li>Fair Processing Notice</li>
          <li>Modern Slavery Act</li>
        </ul>
      </div>

      <div className="topLogo">
        <img src={logo}></img>
      </div>

      <div className="siteMap">
        <ul>
          <h4>SITEMAP</h4>
          <li>Home</li>
          <li>About us</li>
          <li>Careers</li>
          <li>Contact Us</li>
          <li>Terms & Conditions</li>
          <li>Cookies</li>
          <li>Accessibility</li>
          <li>Fair Processing Notice</li>
          <li>Modern Slavery Act</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

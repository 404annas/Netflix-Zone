import React from "react";
import "./Footer.css";
import youtubeIcon from "../../assets/youtube_icon.png";
import twitterIcon from "../../assets/twitter_icon.png";
import instagramIcon from "../../assets/instagram_icon.png";
import facebookIcon from "../../assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={youtubeIcon} alt="Youtube Icon" />
        <img src={instagramIcon} alt="Instagram Icon" />
        <img src={facebookIcon} alt="Facebook Icon" />
        <img src={twitterIcon} alt="Twitter Icon" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Media Centre</li>
        <li>Gift Cards</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms Of Use</li>
        <li>Privacy Policy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Coporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright">
        Netflix Zone &copy; 1997-2025, Inc | All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;

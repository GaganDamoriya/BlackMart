import React from "react";
import "./footer.css";
import faceBookIcon from "../assests/images/facebook.svg";
import instaIcon from "../assests/images/instagram.svg";
import linkedinIcon from "../assests/images/linkedin.svg";
import twitterIcon from "../assests/images/twitter.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="Follow">
          <h1>Like &#38; Follow us</h1>
          <div className="social_icons">
            <img src={faceBookIcon} alt="faceBookIcon" />
            <img src={instaIcon} alt="instaIcon" />
            <img src={linkedinIcon} alt="linkedinIcon" />
            <img src={twitterIcon} alt="twitterIcon" />
          </div>
        </div>
        <div className="contact">
          <h2>Contact us</h2>
          <p>8447483193</p>
          <p>xzanderking457@gmail.com</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

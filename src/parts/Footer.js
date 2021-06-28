import React from "react";

import FB from "../assets/icons/fb.svg";
import Twitter from "../assets/icons/twitter.svg";
import IG from "../assets/icons/ig.svg";
import Email from "../assets/icons/email.svg";

import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <Fade bottom>
      <div className="footer">
        <div className="container">
          <div className="row">
            <Fade bottom delay={500}>
              <div className="col-md-5">
                <h4>UwebNewsApp</h4>
                <p>
                  Bayongbong Garut, <br /> Jawa Barat Indonesia
                </p>
                <p>wibyfabian08@gmail.com</p>
              </div>
            </Fade>
            <Fade bottom delay={1000}>
              <div className="col-md-2 d-flex flex-column">
                <h5>Support</h5>
                <a href="/">Privacy & Policy</a>
                <a href="/">Terms & Conditions</a>
                <a href="/">Support & System</a>
              </div>
            </Fade>
            <Fade bottom delay={1500}>
              <div className="col-md-2 d-flex flex-column">
                <h5>Our Services</h5>
                <a href="/">Sports</a>
                <a href="/">Technology</a>
                <a href="/">Bussines</a>
              </div>
            </Fade>
            <Fade bottom delay={2000}>
              <div className="col-md-3">
                <h5>Contact Us</h5>
                <div className="d-flex justify-content-between align-items-center w-50">
                  <img src={IG} alt="" />
                  <img src={FB} alt="" />
                  <img src={Twitter} alt="" />
                  <img src={Email} alt="" />
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <Fade bottom delay={2500}>
          <p className="text-center mt-5 copyright">
            Copyright 2021 • All rights reserved • Wiby Fabian Rianto
          </p>
        </Fade>
      </div>
    </Fade>
  );
};

export default Footer;

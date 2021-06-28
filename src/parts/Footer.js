import React from "react";
import Fade from "react-reveal/Fade";
import Email from "../assets/icons/email.svg";
import FB from "../assets/icons/fb.svg";
import GitHub from "../assets/icons/github.png";
import IG from "../assets/icons/ig.svg";
import Arrow from "../assets/images/arrow-top.png";

const Footer = () => {
  function top() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <div className="footer">
        <img
          src={Arrow}
          width={45}
          className="arrow"
          alt=""
          onClick={() => top()}
        />
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
              <div className="col-md-2 d-flex flex-column mt-3 mt-md-0">
                <h5>Support</h5>
                <a href="/">Privacy & Policy</a>
                <a href="/">Terms & Conditions</a>
                <a href="/">Support & System</a>
              </div>
            </Fade>
            <Fade bottom delay={1500}>
              <div className="col-md-2 d-flex flex-column mt-3 mt-md-0">
                <h5>Our Services</h5>
                <a href="/sport">Sports</a>
                <a href="/technology">Technology</a>
                <a href="/bisnis">Bussines</a>
                <a href="/science">Science</a>
              </div>
            </Fade>
            <Fade bottom delay={2000}>
              <div className="col-md-3 mt-3 mt-md-0">
                <h5>Contact Us</h5>
                <div className="d-flex justify-content-between align-items-center w-50">
                  <a
                    href="https://www.instagram.com/wiby_fabian/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={IG} width={25} alt="" />
                  </a>
                  <a
                    href="https://web.facebook.com/?_rdc=1&_rdr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={FB} width={25} alt="" />
                  </a>
                  <a
                    href="https://github.com/WibyFabian08"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={GitHub} width={25} alt="" />
                  </a>
                  <a href="/">
                    <img src={Email} width={25} alt="" />
                  </a>
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

import React from "react";

import Kotak from "../assets/images/kotak.svg";
import Android from "../assets/images/android.svg";
import Apple from "../assets/images/apple.svg";
import Phone from "../assets/images/phone.svg";

const OurApps = () => {
  return (
    <div className="our-apps d-flex flex-column justify-content-center align-items-center">
      <img src={Kotak} className="kotak" alt="" />
      <div className="container row d-flex align-items-center w-100">
        <div className="col-md-7 d-flex flex-column">
          <h2 className="mb-4">
            <span>Download</span> furniture order app <br />
            and get the bonus
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor.
          </p>
          <div className="d-flex">
            <img src={Android} alt="" />
            <img src={Apple} alt="" />
          </div>
        </div>
        <div className="col-md-5 d-flex justify-content-between align-items-center">
          <img src={Phone} alt="" />
          <h2 className="discount ml-5">GET 40% OFF FOR EVERY PURCHASE!</h2>
        </div>
      </div>
    </div>
  );
};

export default OurApps;

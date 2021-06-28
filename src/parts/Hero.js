import React from "react";

import Hero1 from "../assets/images/hero1.png";

import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <div className="container hero">
      <div className="row d-flex align-items-center">
        <Fade bottom delay={500}>
          <div className="col-md-5">
            <h2 className="mb-4">
              Penuhi hari <span>anda</span> dirumah <br />
              <span>dengan</span> berita terbaru
            </h2>
            <div className="desc">
              <p>
                Kami siap memberikan berita terbaru kepada anda, berita
                terpecaya dengan sumber terpercaya. Kami menyediakan berbagai
                macam berita mulai dri berita Olahraga, Bisnis, Ekonomi,
                Teknologi, Kesehatan, Sains dll.
              </p>
              <button className="btn">See More </button>
            </div>
          </div>
        </Fade>
        <Fade bottom delay={1000}>
          <div className="col-md-7">
            <img src={Hero1} width={652} alt="" />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Hero;

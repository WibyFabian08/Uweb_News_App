import React from "react";
import Fade from "react-reveal/Fade";
import News from "../assets/images/news.jpg";

const Hero = () => {
  return (
    <section className="container hero">
      <div className="row d-flex align-items-center">
        <Fade bottom delay={500}>
          <div className="col-12 col-md-5">
            <h2 className="mb-4 mr-md-0">
              Penuhi hari <span>anda</span> dirumah <br />
              <span>dengan</span> berita terbaru
            </h2>
            <div className="desc w-75">
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
          <div className="col-7 d-none d-md-block">
            <img src={News} className="w-100"  alt="" />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;

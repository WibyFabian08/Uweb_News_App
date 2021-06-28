import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import News1 from "../assets/images/news1.jpg";
import News2 from "../assets/images/news2.jpg";
import News3 from "../assets/images/news3.jpg";

const Service = () => {
  return (
    <Fade bottom>
      <div className="container service">
        <div className="row d-flex align-items-center">
          <div className="col-md-5 d-none d-md-block">
            <div className="container-grid">
              <div className="row-1">
                <div className="item column 6">
                  <img src={News1} width={222} height={222} alt="" />
                </div>
                <div className="item column 6 mt-4">
                  <img src={News2} width={222} height={222} alt="" />
                </div>
              </div>
              <div className="item column 6 row-1">
                <img src={News3} width={222} height={469} alt="" />
              </div>
              <div className="item column 6 row-1"></div>
            </div>
          </div>
          <Fade bottom delay={500}>
            <div className="col-md-7 p-5">
              <h2 className="mb-3">
                Bagaimana kami menyediakan <span>berita</span>
              </h2>
              <p>
                Kami menyediakan informasi dengan akurat dan tepat serta dapat
                dipercaya, reporter kami bekerja dengan penuh kejujuran dan
                tanpa imbalan ataupun suap dari pihak manapun. Berikut beberapa
                kategori berita populer :
              </p>
              <div className="row d-flex justify-content-between align-items-center flex-wrap">
                <Link to="/" className="btn mt-3 mt-md-0">
                  Headline
                </Link>
                <Link to="/sport" className="btn mt-3 mt-md-0">
                  Sports
                </Link>
                <Link to="/technology" className="btn mt-3 mt-md-0">
                  Technology
                </Link>
                <Link to="/bisnis" className="btn mt-3 mt-md-0">
                  Bussines
                </Link>
                <Link to="/science" className="btn mt-3 mt-md-0">
                  Science
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  );
};

export default Service;

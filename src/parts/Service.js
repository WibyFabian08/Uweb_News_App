import React from "react";

import Service1 from "../assets/images/service1.png";
import Service2 from "../assets/images/service2.png";
import Service3 from "../assets/images/service3.png";

import Fade from "react-reveal/Fade";

const Service = () => {
  return (
    <Fade bottom>
      <div className="container service">
        <div className="row d-flex align-items-center">
          <div className="col-md-5">
            <div className="container-grid">
              <div className="row-1">
                <div className="item column 6">
                  <img src={Service1} width={222} height={222} alt="" />
                </div>
                <div className="item column 6 mt-4">
                  <img src={Service3} width={222} height={222} alt="" />
                </div>
              </div>
              <div className="item column 6 row-1">
                <img src={Service2} width={222} height={469} alt="" />
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
              <div className="d-flex justify-content-between align-items-center">
                <button className="btn">Sports</button>
                <button className="btn">Technology</button>
                <button className="btn">Healthy</button>
                <button className="btn">Entertainment</button>
                <button className="btn">Science</button>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  );
};

export default Service;

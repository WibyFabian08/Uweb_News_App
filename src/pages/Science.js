import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import NewsList from "../parts/NewsList";
import OurApps from "../parts/OurApps";
import Service from "../parts/Service";

const Science = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Science News";

    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=id&category=science&apiKey=f2a93cbfe37442bf8fe8a751a4c7ac1c"
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="landing-page">
      <div className="hero-wrapper">
        <div className="box"></div>
        <div className="content-wrapper w-100">
          <Header></Header>
          <Hero></Hero>
        </div>
      </div>
      <Service></Service>
      <NewsList data={data} title="Science News"></NewsList>
      <OurApps></OurApps>
      <Footer></Footer>
    </div>
  );
};

export default Science;

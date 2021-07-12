import React, { useState } from "react";

import Header from "../parts/Header";
import Hero from "../parts/Hero";
import Service from "../parts/Service";
import NewsList from "../parts/NewsList";
import OurApps from "../parts/OurApps";
import Footer from "../parts/Footer";
import Covid from "../parts/Covid";
import { useEffect } from "react";

import axios from "axios";

const LandingPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    window.scroll(0, 0);
    document.title = 'Headline News'

    axios
      .get(
        `${process.env.REACT_APP_API_HOST}/v2/top-headlines?country=id&apiKey=f2a93cbfe37442bf8fe8a751a4c7ac1c`
      )
      .then((res) => {
        console.log(res.data)
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
      <NewsList data={data} title="Headline News"></NewsList>
      <OurApps></OurApps>
      <Covid></Covid>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
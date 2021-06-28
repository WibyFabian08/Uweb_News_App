import React from "react";
import formatDate from "../helpers/formatDate";

const NewsList = ({ data, title }) => {
  return (
    <div className="news-list">
      <div className="container">
        <h2 className="mt-5">{title}</h2>
        <div className="row d-flex align-items-center flex-wrap justify-content-center">
          {data?.articles.map((data, index) => {
            return (
              <div
                className="col-12 col-md-6 d-flex flex-column mb-5 w-100"
                key={index}
              >
                <div className="w-100 image-wrapper">
                  <img src={data?.urlToImage} className="w-100" alt="News" />
                </div>
                <p className="date mt-4">
                  {formatDate(data.publishedAt)} - {data.author || "author"}
                </p>
                <h4>{data.title}</h4>
                <p className="desc">{data.description || "Description"}</p>
                <div>
                  <a
                    href={data.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    data={data}
                  >
                    Read More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsList;

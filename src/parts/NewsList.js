import React from "react";
import formatDate from "../helpers/formatDate";


const NewsList = ({ data, title }) => {
  return (
    <div className="container news-list">
      <h2>{title}</h2>
      <div className="row d-flex align-items-center flex-wrap">
        {data?.articles.map((data, index) => {
          return (
            <div className="col-md-6 d-flex flex-column mb-5" key={index}>
              <img src={data?.urlToImage} width={513} height={350} alt="News" />
              <p className="date mt-4">{formatDate(data.publishedAt)} - {data.author || 'author'}</p>
              <h4>{data.title}</h4>
              <p className="desc">{data.description || "Description"}</p>
              <div>
                <a href={data.url} target="_blank" rel="noreferrer" className="btn" data={data}>Read More</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsList;

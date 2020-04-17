import React from "react";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Loader from "../Loader/Loader";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "./Carousel.css";

function CarouselComponent(props) {
  const [state, setState] = useState({
    articles: [],
  });
  let noOfRecords = 100;
  const [fetching, setFetching] = useState(true);

  function endsWithAny(suffixes, string) {
    return suffixes.some(function (suffix) {
      return string.endsWith(suffix);
    });
  }

  function fetchNews() {
    let dateObj = new Date();
    let fromDate =
      dateObj.getFullYear() +
      "-" +
      (dateObj.getMonth() + 1) +
      "-" +
      dateObj.getDate();
    const url = `https://newsapi.org/v2/everything?q=Covid19&language=en&pageSize=${noOfRecords}&from=${fromDate}&sortBy=popularity&apiKey=092667353de94deb920b134f239a35ac`;
    //"http://newsapi.org/v2/top-headlines?country=in&apiKey=092667353de94deb920b134f239a35ac";
    var req = new Request(url);
    fetch(req)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        res.status === "error"
          ? console.log("API error :", res.message)
          : setState({ articles: res.articles.reverse() });
        setFetching(false);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  }

  useEffect(() => {
    fetchNews();
  }, [fetching]);

  let imgUrl = "";
  let flag = false;
  let { articles } = state;
  let randomNumber = Math.floor(Math.random() * 80);
  articles = articles.slice(randomNumber, randomNumber + 5);

  return (
    <React.Fragment>
      <div className="header text-center">
        <h1>Top Headlines</h1>
        {fetching === true ? (
          <Loader />
        ) : (
          <span
            className="badge badge-success badge-btn"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setFetching(true);
              fetchNews();
            }}
          >
            Fetch new stories
          </span>
        )}
        <hr />
      </div>
      {articles.length === 0 || fetching ? (
        // <Loader />
        <SkeletonTheme color="#838c90" highlightColor="#444">
          <p>
            <Skeleton height={400} />
          </p>
        </SkeletonTheme>
      ) : (
        <Carousel>
          {articles.map((article, index) => {
            flag = endsWithAny(
              [".jpeg", ".png", ".jpg"],
              article.urlToImage != null ? article.urlToImage : ""
            );
            flag === true
              ? (imgUrl = article.urlToImage)
              : (imgUrl = require("../../assets/img/notFoundBG.jpg"));

            return (
              <Carousel.Item key={index}>
                <a href={article.url} target="_blank">
                  <img
                    src={imgUrl}
                    alt={article.title}
                    className="carouselblur"
                  />

                  <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                      <Tooltip>
                        <strong>Click to read the full story</strong>.
                      </Tooltip>
                    }
                  >
                    <Carousel.Caption className="bgColor">
                      <h3>{article.title}</h3>
                      <p>{article.description}</p>
                      {/* <p>{article.publishedAt}</p> */}
                    </Carousel.Caption>
                  </OverlayTrigger>
                </a>
              </Carousel.Item>
            );
          })}
        </Carousel>
      )}
    </React.Fragment>
  );
}

export default CarouselComponent;

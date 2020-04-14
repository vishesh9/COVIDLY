import { useState, useEffect } from "react";
import React, { Component } from "react";
import CasesList from "../CaseList/CasesList";
import Maps from "../TableTest/TableTest";
import CarouselComponent from "../Carousel/Carousel";

const DashboardComponent = (props) => {
  const [TotalCasesObj, setTotalCasesObj] = useState({
    TotalCases: [],
    IsLoading: true,
  });
  const [Articles, setArticles] = useState({
    articles: [],
  });

  useEffect(() => {
    fetch("https://api.covid19india.org/data.json")
      .then((res) => res.json())
      .then((tc) => {
        setTotalCasesObj({ TotalCases: tc.statewise, IsLoading: false });
      });
  }, []);

  return (
    <React.Fragment>
      <main className="container fadeIn">
        <div className="header text-center">
          <h1>Top Headlines</h1>
        </div>
        <div className="row">
          <div className="col-md-12" style={{ minHeight: "270px" }}>
            <CarouselComponent />
          </div>
        </div>
        <div className="row" style={{ paddingTop: "15px" }}>
          <div className="col-md-6">
            <CasesList TotalCasesObj={TotalCasesObj} />
          </div>
          <div className="col-md-6">
            <Maps />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default DashboardComponent;

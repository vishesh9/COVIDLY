import { useState, useEffect } from "react";
import React, { Component } from "react";
import CasesList from "../CaseList/CasesList";
import Maps from "../Map/Map";
import CarouselComponent from "../Carousel/Carousel";
import axios from "axios";
import TopStateChart from "../PieCharts/TopStatesChart";

const DashboardComponent = (props) => {
  const [TotalCasesObj, setTotalCasesObj] = useState({
    TotalCases: [],
    IsLoading: true,
  });

  const [WorldCases, setWorldCases] = useState([]);

  useEffect(() => {
    async function getData() {
      let firstURL = "https://api.covid19india.org/data.json";
      let secondURL = "https://corona.lmao.ninja/v2/countries";

      const requestOne = axios.get(firstURL);
      const requestTwo = axios.get(secondURL);

      await axios
        .all([requestOne, requestTwo])
        .then(
          axios.spread((...responses) => {
            const responseOne = responses[0];
            const responseTwo = responses[1];
            setTotalCasesObj({
              TotalCases: responseOne.data.statewise,
              IsLoading: false,
            });
            setWorldCases(responseTwo.data);
          })
        )
        .catch((err) => {
          console.log(err);
        });
    }
    getData();
  }, []);

  return (
    <React.Fragment>
      <main className="container fadeIn">
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
            {TotalCasesObj.TotalCases.length > 0 ? (
              <Maps TotalCasesObj={TotalCasesObj} />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <TopStateChart
              TotalCasesObj={TotalCasesObj}
              WorldCases={WorldCases}
            />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default DashboardComponent;

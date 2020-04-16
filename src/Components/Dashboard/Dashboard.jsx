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

  const [stateWiseData, setStateWiseData] = useState([]);
  const [WorldCases, setWorldCases] = useState([]);

  useEffect(() => {
    // fetch("https://api.covid19india.org/data.json")
    //   .then((res) => res.json())
    //   .then((tc) => {
    //     setTotalCasesObj({ TotalCases: tc.statewise, IsLoading: false });
    //   });
    async function getData() {
      let firstURL = "https://api.covid19india.org/data.json";
      // let secondURL = "https://api.covid19india.org/state_district_wise.json";
      let secondURL = "https://corona.lmao.ninja/v2/countries";

      const requestOne = axios.get(firstURL);
      const requestTwo = axios.get(secondURL);

      await axios
        .all([requestOne, requestTwo])
        .then(
          axios.spread((...responses) => {
            const responseOne = responses[0];
            const responseTwo = responses[1];
            // console.log(responseOne);
            // console.log(responseTwo);
            setTotalCasesObj({
              TotalCases: responseOne.data.statewise,
              IsLoading: false,
            });
            // setStateWiseData(responseTwo.data);
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
        <div className="header text-center">
          <h1>Top Headlines</h1>
          <hr />
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

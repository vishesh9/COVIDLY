import React, { useEffect, useState } from "react";
import { Pie, Doughnut, Bar } from "react-chartjs-2";

const TopStateChart = (props) => {
  const { TotalCases } = props.TotalCasesObj;
  const { WorldCases } = props;

  const chartData = prepareStateChart();
  const worldData = prepareWorldChart();

  const options = {
    responsive: true,
    legend: {
      display: true,
      position: "left",
    },
  };

  const stateDataPie = {
    labels: chartData?.States,
    datasets: [
      {
        // 300, 50, 100, 40, 120
        data: chartData?.Data,
        backgroundColor: [
          "#46BFBD",
          "#F7464A",
          "#FDB45C",
          "#949FB1",
          "#4D5360",
          "#422343",
          "#993300",
          "#196619",
          "#1f1f2e",
          "#004d4d",
        ],
        hoverBackgroundColor: [
          "#5AD3D1",
          "#FF5A5E",
          "#FFC870",
          "#A8B3C5",
          "#616774",
          "#ad69b0",
          "#ff884d",
          "#33cc33",
          "#47476b",
          "#009999",
        ],
      },
    ],
  };

  const worldDataPie = {
    labels: worldData?.Country,
    datasets: [
      {
        // 300, 50, 100, 40, 120
        data: worldData?.Data,
        backgroundColor: [
          "#F7464A",
          "#46BFBD",
          "#FDB45C",
          "#949FB1",
          "#4D5360",
          "#422343",
          "#196619",
          "#993300",
          "#004d4d",
          "#1f1f2e",
        ],
        hoverBackgroundColor: [
          "#FF5A5E",
          "#5AD3D1",
          "#FFC870",
          "#A8B3C5",
          "#616774",
          "#ad69b0",
          "#33cc33",
          "#ff884d",
          "#009999",
          "#47476b",
        ],
      },
    ],
  };

  function prepareStateChart() {
    const sortedCases = [...TotalCases];
    const length = sortedCases.length;
    if (length > 0) {
      sortedCases.sort((a, b) => {
        var x = +a.confirmed.toLowerCase();
        var y = +b.confirmed.toLowerCase();
        return y - x;
      });
      const TopFive = sortedCases.slice(1, 11);
      // Prepare data for chartJS
      const Data = TopFive.map((ele) => ele.confirmed); // for ex: [ 22, 44, 35, ...]
      const States = TopFive.map((ele) => ele.state); // for ex: [ 22, 44, 35, ...]
      return {
        Data,
        States,
      };
    }
  }

  function prepareWorldChart() {
    const sortedCases = [...WorldCases];
    const length = sortedCases.length;
    if (length > 0) {
      sortedCases.sort((a, b) => {
        var x = +a.active;
        var y = +b.active;
        return y - x;
      });
      const TopFive = sortedCases.slice(1, 11);
      // Prepare data for chartJS
      const Data = TopFive.map((ele) => ele.active); // for ex: [ 22, 44, 35, ...]
      const Country = TopFive.map((ele) => ele.country); // for ex: [ 22, 44, 35, ...]
      return {
        Data,
        Country,
      };
    }
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-6">
          <div className="header">
            <h1>Most affected</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="header">
            <h6>Top 10 states/UT's in India with most number of cases.</h6>
            <hr />
          </div>
        </div>
        <div className="col-md-6">
          <div className="header">
            <h6>Top 10 countries with most number of cases.</h6>
            <hr />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <Doughnut
            data={{
              datasets: stateDataPie.datasets,
              labels: stateDataPie.labels,
            }}
            options={options}
          />
        </div>
        {/* <div className="header">
          <h6>Top 10 countries with most number of cases.</h6>
          <hr />
        </div> */}
        <div className="col-md-6">
          <Doughnut
            data={{
              datasets: worldDataPie.datasets,
              labels: worldDataPie.labels,
            }}
            options={options}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default TopStateChart;

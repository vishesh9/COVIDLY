import React, { Component } from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <React.Fragment>
      {/* <div className="background">
        <div className="blur"></div>
        <div className="loader">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div> */}
      <div className="individualLoader">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </React.Fragment>
  );
};

export default Loader;

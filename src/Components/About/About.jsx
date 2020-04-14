import React, { Component } from "react";

import FooterComponent from "../Footer/Footer";

const AboutComponent = (props) => {
  return (
    <React.Fragment>
      <main className="container fadeIn">
        <div className="header text-center">
          <h1>About me</h1>
        </div>
        <div className="row">
          <div className="col-md-12">About me will be available soon.</div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default AboutComponent;

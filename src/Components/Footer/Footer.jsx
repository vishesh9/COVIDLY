import React, { Component } from "react";
import { Link } from "react-router-dom";

const FooterComponent = (props) => {
  return (
    <React.Fragment>
      <footer className="page-footer footer-dark" id="about_us">
        <hr id="line" style={{ width: "20px", border: "0.5px solid grey" }} />
        <div>
          <div className="container-fluid">
            <p className="text-center">
              © 2020 COVIDLY. All rights reserved. Made with{" "}
              <span className="heart" style={{ color: "red" }}>
                ❤
              </span>{" "}
              by{" "}
              <a
                href="https://www.linkedin.com/in/vishaish-pandita/"
                target="_blank"
              >
                Vishaish Pandita
              </a>
              <br />
              Have something to say? Say it <Link to="/feedback">here</Link>
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default FooterComponent;

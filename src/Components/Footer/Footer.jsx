import React, { Component } from "react";

const FooterComponent = (props) => {
  return (
    <React.Fragment>
      <footer className="page-footer footer-dark" id="about_us">
        <hr id="line" style={{ width: "20px", border: "0.5px solid grey" }} />
        <div className="footer-copyright">
          <div className="container-fluid">
            <p className="copyright text-center">
              © 2020 COVIDLY. All rights reserved. Made with
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
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default FooterComponent;

import React, { useState, Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed ? "navbar-toggler collapsed" : "navbar-toggler";
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <Link to="/" className="navbar-brand fadeIn">
            <img className="iconClass rotate" src="/covidIcon.png" />
          </Link>
          <button
            // className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-toggle="collapse"
            onClick={this.toggleNavbar}
            className={`${classTwo}`}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`${classOne}`} id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <Link
                to="/"
                onClick={this.toggleNavbar}
                className="nav-link fadeIn"
                style={{ animationDelay: "0.5s", opacity: "0" }}
              >
                <li className="nav-item active">
                  Home <span className="sr-only">(current)</span>
                </li>
              </Link>

              <Link
                to="/precautions"
                onClick={this.toggleNavbar}
                className="nav-link fadeIn"
                style={{ animationDelay: "0.75s", opacity: "0" }}
              >
                <li className="nav-item">Precautions</li>
              </Link>

              <Link
                to="/about"
                onClick={this.toggleNavbar}
                className="nav-link fadeIn"
                style={{ animationDelay: "1s", opacity: "0" }}
              >
                <li className="nav-item">About</li>
              </Link>
            </ul>
            {/* <form className="form-inline my-2 my-lg-0"> */}
            {/* <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /> */}
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={() => {
                window.open(
                  "https://github.com/vishesh9/COVIDLY.git",
                  "_blank"
                );
              }}
            >
              <i
                className="fa fa-github"
                style={{ fontSize: "1.2rem", paddingRight: "2px" }}
              ></i>
              <span style={{ paddingLeft: "3px" }}>GitHub</span>
            </button>
            {/* </form> */}
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;

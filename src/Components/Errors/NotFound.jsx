import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = (props) => {
  return (
    <React.Fragment>
      {/* <img
              src={require("../../assets/img/404.jpg")}
              style={{ width: "100%" }}
            /> */}
      <section class="page_404 fadeIn">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 ">
              <div class="col-sm-12 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>

                <div class="contant_box_404">
                  <h3 class="h2">Looks like you're lost</h3>

                  <p>the page you are looking for not avaible!</p>

                  <Link to="/">
                    <button className="btn btn-outline-success my-2 my-sm-0">
                      Go to Home
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default NotFound;

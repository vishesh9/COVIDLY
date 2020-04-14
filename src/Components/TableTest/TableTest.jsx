import React, { Component } from "react";
import india from "@svg-maps/india";
import { SVGMap, CheckboxSVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import "./TableTest.css";
import "react-svg-map/lib/index.css";

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // Create new map object
    this.customTaiwan = {
      ...india,
      label: "Custom map label",
      locations: india.locations.map((location) => {
        console.log(location);
      }),
    };
  }

  onMouseOver($event) {
    debugger;
  }

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <h1>India</h1>
          <h6>Hover over a state/UT for more details </h6>
        </div>
        <div className="p-2">
          <CheckboxSVGMap
            map={india}
            onLocationMouseOver={this.onMouseOver()}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Maps;

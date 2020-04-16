import React, { useState, useEffect } from "react";
import india from "@svg-maps/india";
import { SVGMap } from "react-svg-map";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import styled from "styled-components";

import "react-svg-map/lib/index.css";
import "./Map.css";
import "react-svg-map/lib/index.css";

function Maps(props) {
  // const SVGMapStyled = styled(SVGMap)`
  //   path {
  //     fill: #343a40 !important;
  //   }

  //   path:hover,
  //   polygon:hover {
  //     fill: #ff7c65 !important;
  //   }
  // `;

  const { TotalCases } = props.TotalCasesObj;
  const [CasesCount, setCasesCount] = useState(0);
  const [CityName, setCityName] = useState("");
  const [ActiveCount, setActiveCount] = useState(0);
  const [RecoveredCount, setRecoveredCount] = useState(0);
  const [DeceasedCount, setDeceasedCount] = useState(0);
  const [HoveredStateDetails, setHoveredStateDetails] = useState([]);

  useEffect(() => {
    if (HoveredStateDetails.length > 0) {
      setCityName(HoveredStateDetails[0].state);
      setCasesCount(+HoveredStateDetails[0].confirmed);
      setActiveCount(+HoveredStateDetails[0].active);
      setRecoveredCount(+HoveredStateDetails[0].recovered);
      setDeceasedCount(+HoveredStateDetails[0].deaths);
    }
  }, [HoveredStateDetails]);

  const onMouseOverMap = (e) => {
    const HoveredStateId = e.target.attributes.id.value.toUpperCase();
    const StateDetails = TotalCases.filter((ele) => {
      return ele.statecode.toUpperCase() === HoveredStateId;
    });
    setHoveredStateDetails(StateDetails);
  };

  const onMouseOutMap = () => {
    setCityName("");
    setCasesCount(0);
    setActiveCount(0);
    setRecoveredCount(0);
    setDeceasedCount(0);
  };

  const getClassForBadge = () => {
    if (CasesCount < 50) return "badge p-2 m-1 badge-success";
    else if (CasesCount > 50 && CasesCount < 100)
      return "badge p-2 m-1 badge-warning";
    else return "badge p-2 m-1 badge-danger";
  };
  let Classes = getClassForBadge();

  return (
    <React.Fragment>
      <div className="header">
        <h1>India</h1>
        <h6>Hover over a state/UT for more details </h6>
        <hr />
      </div>
      <div className="p-2">
        <div>
          {CasesCount === 0 &&
          ActiveCount === 0 &&
          RecoveredCount === 0 &&
          DeceasedCount === 0 ? (
            ""
          ) : (
            <div
              className="row"
              style={{ position: "fixed", right: "0", bottom: "54%" }}
            >
              <div className="col-md-12 text-right">
                <span className={Classes}>State/UT : {CityName}</span>
                <br />
                <span className={Classes}>Total Cases : {CasesCount}</span>
                <br />
                <span className={Classes}> Active : {ActiveCount} </span>
                <br />
                <span className={Classes}>Recovered : {RecoveredCount} </span>
                <br />
                <span className={Classes}>Deceased : {DeceasedCount}</span>
              </div>
            </div>
          )}
          <SVGMap
            map={india}
            onLocationMouseOver={(e) => {
              onMouseOverMap(e);
            }}
            onLocationMouseOut={() => {
              onMouseOutMap();
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Maps;

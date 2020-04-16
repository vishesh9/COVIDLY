import React, { useState, useEffect } from "react";
import india from "@svg-maps/india";
import { SVGMap } from "react-svg-map";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import "react-svg-map/lib/index.css";
import "./Map.css";
import "react-svg-map/lib/index.css";

function Maps(props) {
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

  return (
    <React.Fragment>
      <div className="header">
        <h1>India</h1>
        <h6>Hover over a state/UT for more details </h6>
      </div>
      <div className="p-2">
        <OverlayTrigger
          key="top"
          placement="top"
          overlay={
            <Tooltip>
              {CasesCount === 0 &&
              ActiveCount === 0 &&
              RecoveredCount === 0 &&
              DeceasedCount === 0 ? (
                ""
              ) : (
                <strong>
                  <span>
                    {CityName} : {CasesCount} <br />
                    Active : {ActiveCount} <br />
                    Recovered : {RecoveredCount} <br />
                    Deceased : {DeceasedCount}
                  </span>
                </strong>
              )}
            </Tooltip>
          }
        >
          <div>
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
        </OverlayTrigger>
      </div>
    </React.Fragment>
  );
}

export default Maps;

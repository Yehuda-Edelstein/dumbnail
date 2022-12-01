import React from "react";
import { OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import "./style.index.scss";

function Popular({
  setChannelName,
  setIsTemplate,
  setTemplate,
  setChannelTemp,
  setIsChannelTemp,
}) {
  const data = require("../../../../../../static/popular/popular.json");

  function createTooltip(str) {
    if (str.includes("_")) {
      return str.replace(/_/g, " ").split(".png");
    }
    return str.split(".png");
  }

  function clearChannelTemp() {
    setIsChannelTemp(false);
    setChannelName("Channel");
  }

  return (
    <div className="popular-container">
      <h5>Popular</h5>
      <div className="scroll d-flex">
        <div className="before-overlay"></div>
        <OverlayTrigger
          key={"blank"}
          placement={"top"}
          delay={{ show: "100", hide: "10" }}
          overlay={<Tooltip id={"tooltip-top"}>Reset</Tooltip>}
        >
          <div className="popular d-grid" onClick={clearChannelTemp}>
            <div className="blank-popular"></div>
          </div>
        </OverlayTrigger>
        {data.map((pic) => {
          return (
            <OverlayTrigger
              key={pic}
              placement={"top"}
              delay={{ show: "100", hide: "10" }}
              overlay={
                <Tooltip id={"tooltip-top"}>{createTooltip(pic)}</Tooltip>
              }
            >
              <div
                className="popular"
                key={pic}
                onClick={() => {
                  setIsChannelTemp(true);
                  setChannelTemp(pic);
                  setChannelName(createTooltip(pic));
                }}
              >
                <img
                  src={require(`../../../../../../static/popular/${pic}`)}
                  alt=""
                />
              </div>
            </OverlayTrigger>
          );
        })}
        <div className="overlay"></div>
      </div>
    </div>
  );
}

export default Popular;

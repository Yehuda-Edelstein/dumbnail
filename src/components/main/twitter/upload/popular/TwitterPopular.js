import React from "react";
import { OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import "./TwitterPopular.scss";

function TwitterPopular({
  setIsActive,
  setIsPopular,
  setName,
  setHandle,
  setPopular,
  setSelectedProf,
}) {
  const data = require("./../../../../../static/popular/twitter/popular.json");

  function createTooltip(str) {
    if (str.includes("_")) {
      return str.replace(/_/g, " ").split(".png");
    }
    return str.split(".png");
  }

  function reset() {
    setSelectedProf();
    setIsPopular(false);
    setName("Name");
    setHandle("Handle");
  }

  return (
    <div className="twitter-popular-container">
      <h5>Popular</h5>
      <div className="scroll d-flex">
        <div className="before-overlay"></div>
        <OverlayTrigger
          key={"blank"}
          placement={"top"}
          delay={{ show: "100", hide: "10" }}
          overlay={<Tooltip id={"tooltip-top"}>Reset</Tooltip>}
        >
          <div className="twitter-popular d-grid" onClick={reset}>
            <div className="twitter-blank-popular"></div>
          </div>
        </OverlayTrigger>
        {data.map((pop) => {
          //   console.log(`${pop}: ${pop.img}, ${pop.handle}`);
          return (
            <OverlayTrigger
              key={pop.handle}
              placement={"top"}
              delay={{ show: "100", hide: "10" }}
              overlay={
                <Tooltip id={"tooltip-top"}>{createTooltip(pop.img)}</Tooltip>
              }
            >
              <div
                className="twitter-popular"
                key={pop.handle}
                onClick={() => {
                  setIsActive(true);
                  setIsPopular(true);
                  setSelectedProf();
                  setPopular(pop.img);
                  setName(pop.name);
                  setHandle(pop.handle);
                }}
              >
                <img
                  src={require(`./../../../../../static/popular/twitter/${pop.img}`)}
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

export default TwitterPopular;

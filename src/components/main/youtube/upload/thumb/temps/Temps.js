import React from "react";
import "./Temps.scss";

function Temps({
  setChannelName,
  setIsTemplate,
  setTemplate,
  setIsActive,
  setChannelTemp,
  setIsChannelTemp,
}) {
  const data = require("../../../../../../static/temps/youtube/popular.json");

  function clearTemp() {
    setIsTemplate(false);
    setIsChannelTemp(false);
    setChannelName("Channel");
  }

  function setTemp() {
    // setChannelTemp("Mr_Beast.png");
    // setChannelName("MrBeast");
  }

  return (
    <div>
      <div className="temp-container">
        <h5>Templates</h5>
        <div className="scroll d-flex">
          <div className="before-overlay"></div>
          <div className="blank-temp d-grid" onClick={clearTemp}>
            <div className="blank-temp-label">Reset</div>
          </div>
          {data.map((temp) => {
            return (
              <div
                className="temp d-grid"
                key={temp.thumb}
                onClick={() => {
                  setIsActive(true);
                  setIsTemplate(true);
                  setIsChannelTemp(true);
                  setTemplate(temp.thumb);
                  setChannelTemp(temp.thumb);
                  setChannelName(temp.name);
                }}
              >
                <div className="temp-label">{temp.name}</div>
                <img
                  className="border-top-0"
                  src={require(`../../../../../../static/temps/youtube/${temp.thumb}`)}
                  alt=""
                />
              </div>
            );
          })}
          <div className="overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default Temps;

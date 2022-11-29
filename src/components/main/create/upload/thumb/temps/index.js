import React from "react";
import beastThumb from "../../../../../../static/temps/mrbeast/thumb.png";

import "./style.index.scss";

function Temps({
  setChannelName,
  setIsTemplate,
  setTemplate,
  setIsActive,
  setChannelTemp,
  setIsChannelTemp,
}) {
  function clearTemp() {
    setIsTemplate(false);
    setIsChannelTemp(false);
    setChannelName("Channel");
  }

  function setBeast() {
    setIsActive(true);
    setIsTemplate(true);
    setIsChannelTemp(true);
    setTemplate(beastThumb);
    setChannelTemp("Mr_Beast.png");
    setChannelName("MrBeast");
  }

  return (
    <div>
      <div className="temp-container">
        <h5>Templates</h5>
        <div className="d-flex">
          {/* turn this into some kind of map later */}
          <div className="blank-temp d-grid me-3" onClick={clearTemp}>
            <div className="blank-temp-label">Blank</div>
          </div>

          <div className="temp d-grid" onClick={setBeast}>
            <div className="temp-label">MrBeast</div>
            <img className="border-top-0" src={beastThumb} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Temps;

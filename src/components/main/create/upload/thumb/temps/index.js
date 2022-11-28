import React, { useState } from "react";
import example from "../../../../../../static/temps/mrbeast/example.png";
import beastThumb from "../../../../../../static/temps/mrbeast/thumb.png";
import beastChannel from "../../../../../../static/temps/mrbeast/channel.png";

import "./style.index.scss";

function Temps({
  setChannelName,
  setIsTemplate,
  setTemplate,
  setIsActive,
  setChannelTemp,
}) {
  // add a check to the temp picked and a clear button to get rid of the temp
  // const [beastChecked, setBeastChecked] = useState(false);

  function clearTemp() {
    setIsTemplate(false);
    setChannelName("Channel");
  }

  function setBeast() {
    setIsActive(true);
    setIsTemplate(true);
    setTemplate(beastThumb);
    setChannelTemp(beastChannel);
    setChannelName("MrBeast");

    // setBeastChecked(true);
  }

  return (
    <div className="temp-container">
      <h5>Templates</h5>
      <div className="d-flex">
        {/* turn this into some kind of map later */}
        <div className="blank-temp d-grid me-3" onClick={clearTemp}>
          <div className="blank-temp-label">Blank</div>
        </div>

        <div className="temp d-grid" onClick={setBeast}>
          <div className="temp-label">MrBeast</div>
          <img className="border-top-0" src={example} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Temps;

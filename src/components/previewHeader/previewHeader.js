import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Switch from "../switch/Switch";

function PreviewHeader({
  needsSwitch,
  switchMode,
  setSwitchMode,
  switchOn,
  switchOff,
}) {
  return (
    <div className="preview-header">
      <h5>Preview</h5>
      {needsSwitch && (
        <div className="">
          <OverlayTrigger
            key={"right"}
            placement={"right"}
            delay={{ show: "700", hide: "100" }}
            overlay={<Tooltip id={"tooltip-right"}>Toggle mode</Tooltip>}
          >
            <div className="d-flex switch">
              <Switch
                isOn={switchMode}
                handleToggle={() => {
                  setSwitchMode(!switchMode);
                }}
                bgOn={switchOn}
                bgOff={switchOff}
              />
            </div>
          </OverlayTrigger>
          {switchMode ? <h4>[ Dark ]</h4> : <h4>[ Light ]</h4>}
        </div>
      )}
    </div>
  );
}

export default PreviewHeader;

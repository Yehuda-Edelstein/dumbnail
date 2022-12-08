import React from "react";
import "./style.index.scss";
import { OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";

function MessageDownload({ isActive, downloadMessage }) {
  return (
    <div>
      {" "}
      {isActive ? (
        <div className={"message-download"} onClick={downloadMessage}>
          DOWNLOAD{" "}
        </div>
      ) : (
        <OverlayTrigger
          key={"top"}
          placement={"top"}
          delay={{ show: "700", hide: "100" }}
          overlay={
            <Tooltip id={"tooltip-top"}>
              Upload images or enter info to activate
            </Tooltip>
          }
        >
          <div className={"message-not-active"}>DOWNLOAD </div>
        </OverlayTrigger>
      )}
    </div>
  );
}

export default MessageDownload;

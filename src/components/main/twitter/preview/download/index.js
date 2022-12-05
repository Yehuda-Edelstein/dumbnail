import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import "./style.index.scss";
import { OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";

function Download({ isActive, downloadTweet }) {
  return (
    <div>
      {" "}
      {isActive ? (
        <div className={"twitter-download"} onClick={downloadTweet}>
          DOWNLOAD{" "}
          <FontAwesomeIcon icon={icon({ name: "download", style: "solid" })} />
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
          <div className={"twitter-not-active"}>
            DOWNLOAD{" "}
            <FontAwesomeIcon
              icon={icon({ name: "download", style: "solid" })}
            />
          </div>
        </OverlayTrigger>
      )}
    </div>
  );
}

export default Download;

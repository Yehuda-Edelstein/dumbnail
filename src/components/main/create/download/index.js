import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import "./style.index.scss";
import { OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";

function Download({ isActive, downloadImage }) {
  return (
    <div>
      {" "}
      {isActive ? (
        <button className={"download"} onClick={downloadImage}>
          DOWNLOAD{" "}
          <FontAwesomeIcon icon={icon({ name: "download", style: "solid" })} />
        </button>
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
          <div className={"not-active"}>
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

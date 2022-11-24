import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import "./style.index.scss";

function Download({ downloadImage }) {
  return (
    <div>
      {" "}
      <button className="download" onClick={downloadImage}>
        DOWNLOAD{" "}
        <FontAwesomeIcon icon={icon({ name: "download", style: "solid" })} />
      </button>
    </div>
  );
}

export default Download;

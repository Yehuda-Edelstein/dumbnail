import React from "react";
import * as htmlToImage from "html-to-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

function Download({ ref }) {
  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(ref.current);

    // download image
    const link = document.createElement("a");
    link.download = "dumbnail.png";
    link.href = dataUrl;
    link.click();
  };
  return (
    <div>
      {" "}
      <button onClick={downloadImage}>
        Download{" "}
        <FontAwesomeIcon icon={icon({ name: "download", style: "solid" })} />
      </button>
    </div>
  );
}

export default Download;

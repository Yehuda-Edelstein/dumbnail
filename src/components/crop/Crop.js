import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Crop.scss";

function Crop({ handleClose, img, x, setX, y, setY, zoom, setZoom, ratio }) {
  const [currentX, setCurrentX] = useState(x);
  const [currentY, setCurrentY] = useState(y);
  const [currentZoom, setCurrentZoom] = useState(zoom);
  return (
    <div className="crop-container">
      <div className="crop-container-header">
        <div className="d-flex">
          <div
            className="icon-enabled"
            onClick={() => {
              setX(currentX);
              setY(currentY);
              setZoom(currentZoom);
              handleClose();
            }}
          >
            <FontAwesomeIcon icon={["fa", "check"]} />
            <span>Done</span>
          </div>{" "}
          <div
            className="icon-enabled"
            onClick={() => {
              setX(x);
              setY(y);
              setZoom(zoom);
              handleClose();
            }}
          >
            <FontAwesomeIcon icon={["fa", "xmark"]} />
            <span>Cancel</span>
          </div>
        </div>
      </div>
      <div className="crop-container-body">
        <div
          className="arrow-left"
          onClick={() => {
            setCurrentX(currentX + 10);
          }}
        >
          <FontAwesomeIcon icon={["fa", "arrow-left"]} />
        </div>
        <div className="d-grid">
          <div
            className="arrow-up"
            onClick={() => {
              setCurrentY(currentY + 10);
            }}
          >
            <FontAwesomeIcon icon={["fa", "arrow-up"]} />
          </div>
          <div className={`pic-container ${ratio}`}>
            <img
              className="pic"
              src={img}
              alt=""
              style={{
                transform: `scale(${currentZoom}%) translate(${currentX}px, ${currentY}px)`,
              }}
            />
          </div>
          <div
            className="arrow-down"
            onClick={() => {
              setCurrentY(currentY - 10);
            }}
          >
            <FontAwesomeIcon icon={["fa", "arrow-down"]} />
          </div>
        </div>
        <div
          className="arrow-right"
          onClick={() => {
            setCurrentX(currentX - 10);
          }}
        >
          <FontAwesomeIcon icon={["fa", "arrow-right"]} />
        </div>
      </div>
      <div className="crop-container-footer">
        <div
          className={currentZoom < 200 ? "icon-enabled" : "icon-disabled"}
          onClick={() => {
            if (currentZoom < 200) {
              setCurrentZoom(currentZoom + 10);
            }
          }}
        >
          <FontAwesomeIcon icon={["fa", "magnifying-glass-plus"]} />
        </div>
        <div
          className={currentZoom > 100 ? "icon-enabled" : "icon-disabled"}
          onClick={() => {
            if (currentZoom > 100) {
              setCurrentZoom(currentZoom - 10);
            }
          }}
        >
          {" "}
          <FontAwesomeIcon icon={["fa", "magnifying-glass-minus"]} />
        </div>
      </div>
    </div>
  );
}

export default Crop;

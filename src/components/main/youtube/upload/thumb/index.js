import React from "react";
import "./style.index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Temps from "./temps/Temps";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Tooltip from "react-bootstrap/Tooltip";
// import Popover from "react-bootstrap/Popover";
// import Button from "react-bootstrap/Button";

function UploadThumb({
  uploadThumbnail,
  // for cropping
  thumbZoom,
  setThumbZoom,
  thumbX,
  thumbY,
  setThumbX,
  setThumbY,
  //
  selectedThumb,
  previewThumb,
  setChannelName,
  uploadChannelPic,
  setIsTemplate,
  setTemplate,
  setPreviewThumb,
  setSelectedThumb,
  setIsActive,
  setChannelTemp,
  setIsChannelTemp,
}) {
  function reset() {
    setPreviewThumb();
    setSelectedThumb();
  }
  return (
    <div>
      <div className="d-grid">
        {selectedThumb ? (
          <div>
            <div className="upload-container">
              <div className="crop-border">
                <div className="vertical">
                  <FontAwesomeIcon
                    className="arrow-up"
                    icon={["fa", "arrow-up"]}
                    onClick={() => {
                      setThumbY(thumbY + 10);
                    }}
                  />
                  <FontAwesomeIcon
                    className="arrow-down"
                    icon={["fa", "arrow-down"]}
                    onClick={() => {
                      setThumbY(thumbY - 10);
                    }}
                  />
                </div>
                <div className="horizontal">
                  <FontAwesomeIcon
                    className="arrow-left"
                    icon={["fa", "arrow-left"]}
                    onClick={() => {
                      setThumbX(thumbX + 10);
                    }}
                  />
                  <FontAwesomeIcon
                    className="arrow-right"
                    icon={["fa", "arrow-right"]}
                    onClick={() => {
                      setThumbX(thumbX - 10);
                    }}
                  />
                </div>
              </div>
              {selectedThumb && (
                <div className="sidebar">
                  <div>
                    <FontAwesomeIcon
                      className="clear"
                      icon={["fa", "trash"]}
                      onClick={reset}
                    />
                  </div>
                  <div className="d-grid">
                    <FontAwesomeIcon
                      className="zoom"
                      icon={["fa", "magnifying-glass-plus"]}
                      onClick={() => {
                        if (thumbZoom < 200) {
                          setThumbZoom(thumbZoom + 10);
                        }
                      }}
                    />
                    <FontAwesomeIcon
                      className="zoom"
                      icon={["fa", "magnifying-glass-minus"]}
                      onClick={() => {
                        if (thumbZoom > 100) {
                          setThumbZoom(thumbZoom - 10);
                        }
                      }}
                    />
                  </div>
                  <div>
                    <FontAwesomeIcon
                      className="reset"
                      icon={["fa", "rotate-left"]}
                      onClick={() => {
                        setThumbX(0);
                        setThumbY(0);
                        setThumbZoom(100);
                      }}
                    />
                  </div>
                </div>
              )}
              <div>
                {selectedThumb && (
                  <img
                    className="pic"
                    src={previewThumb}
                    alt=""
                    style={{
                      transform: `scale(${thumbZoom}%) translate(${thumbX}px, ${thumbY}px)`,
                      width: "100%",
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        ) : (
          <div onChange={uploadThumbnail}>
            <div className="upload-container upload-container-hover">
              <div className="upload">
                <input
                  type="file"
                  accept="image/*"
                  title=""
                  onChange={uploadThumbnail}
                  className="hidden-input"
                />
                <span>Click here to upload thumbnail</span>
                <div>
                  <FontAwesomeIcon icon={["fa", "upload"]} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* <div className="notes">
        <ul>
          <li>
            *zoom range maxes out at 200% and cannot be zoomed out past original
            picture.
          </li>
          <li>
            **make sure to cover the entire thumbnail window, if you see a red
            background if you've cropped too far.
          </li>
        </ul>
      </div> */}
      <Temps
        setChannelName={setChannelName}
        setIsTemplate={setIsTemplate}
        setTemplate={setTemplate}
        setIsActive={setIsActive}
        setChannelTemp={setChannelTemp}
        setIsChannelTemp={setIsChannelTemp}
      />
    </div>
  );
}

export default UploadThumb;

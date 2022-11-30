import React from "react";
import "./style.index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import Temps from "./temps";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

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
  setPreviewChannelPic,
  setSelectedThumb,
  setIsActive,
  setChannelTemp,
  setIsChannelTemp,
}) {
  function reset() {
    setPreviewThumb();
    setPreviewChannelPic();
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
                    icon={icon({ name: "arrow-up", style: "solid" })}
                    onClick={() => {
                      setThumbY(thumbY + 10);
                    }}
                  />
                  <FontAwesomeIcon
                    className="arrow-down"
                    icon={icon({ name: "arrow-down", style: "solid" })}
                    onClick={() => {
                      setThumbY(thumbY - 10);
                    }}
                  />
                </div>
                <div className="horizontal">
                  <FontAwesomeIcon
                    className="arrow-left"
                    icon={icon({ name: "arrow-left", style: "solid" })}
                    onClick={() => {
                      setThumbX(thumbX + 10);
                    }}
                  />
                  <FontAwesomeIcon
                    className="arrow-right"
                    icon={icon({ name: "arrow-right", style: "solid" })}
                    onClick={() => {
                      setThumbX(thumbX - 10);
                    }}
                  />
                </div>
              </div>
              {selectedThumb && (
                <div className="sidebar">
                  <div>
                    <OverlayTrigger
                      key={"right"}
                      placement={"right"}
                      overlay={<Tooltip id={"tooltip-right"}>Clear</Tooltip>}
                    >
                      <FontAwesomeIcon
                        className="clear"
                        icon={icon({
                          name: "trash",
                          style: "solid",
                        })}
                        onClick={reset}
                      />
                    </OverlayTrigger>
                  </div>
                  <div className="d-grid">
                    <FontAwesomeIcon
                      className="zoom"
                      icon={icon({
                        name: "magnifying-glass-plus",
                        style: "solid",
                      })}
                      onClick={() => {
                        if (thumbZoom < 200) {
                          setThumbZoom(thumbZoom + 10);
                        }
                      }}
                    />
                    <FontAwesomeIcon
                      className="zoom"
                      icon={icon({
                        name: "magnifying-glass-minus",
                        style: "solid",
                      })}
                      onClick={() => {
                        if (thumbZoom > 100) {
                          setThumbZoom(thumbZoom - 10);
                        }
                      }}
                    />
                  </div>
                  <div>
                    <OverlayTrigger
                      key={"right"}
                      placement={"right"}
                      overlay={<Tooltip id={"tooltip-right"}>Reset</Tooltip>}
                    >
                      <FontAwesomeIcon
                        className="reset"
                        icon={icon({
                          name: "rotate-left",
                          style: "solid",
                        })}
                        onClick={() => {
                          setThumbX(0);
                          setThumbY(0);
                          setThumbZoom(100);
                        }}
                      />
                    </OverlayTrigger>
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
                  <FontAwesomeIcon
                    icon={icon({ name: "upload", style: "solid" })}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="notes">
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
      </div>
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

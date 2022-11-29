import React from "react";
import "./style.index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Popular from "./popular";

function UploadChannel({
  setPreviewChannelPic,
  setSelectedChannelPic,
  selectedChannelPic,
  previewChannelPic,
  uploadChannelPic,
  channelPicZoom,
  setChannelPicZoom,
  channelPicX,
  channelPicY,
  setChannelPicX,
  setChannelPicY,
  // for popular channels
  setChannelName,
  setIsTemplate,
  setTemplate,
  setIsActive,
  setChannelTemp,
  setIsChannelTemp,
}) {
  function reset() {
    setPreviewChannelPic();
    setSelectedChannelPic();
  }

  return (
    <div>
      <div className="d-grid">
        {selectedChannelPic ? (
          <div>
            <h5>Crop</h5>
            <div className="upload-channel-container">
              <div className="crop-border">
                <div className="vertical">
                  <FontAwesomeIcon
                    className="arrow-up"
                    icon={icon({ name: "arrow-up", style: "solid" })}
                    onClick={() => {
                      setChannelPicY(channelPicY - 10);
                    }}
                  />
                  <FontAwesomeIcon
                    className="arrow-down"
                    icon={icon({ name: "arrow-down", style: "solid" })}
                    onClick={() => {
                      setChannelPicY(channelPicY + 10);
                    }}
                  />
                </div>
                <div className="horizontal">
                  <FontAwesomeIcon
                    className="arrow-left"
                    icon={icon({ name: "arrow-left", style: "solid" })}
                    onClick={() => {
                      setChannelPicX(channelPicX - 10);
                    }}
                  />
                  <FontAwesomeIcon
                    className="arrow-right"
                    icon={icon({ name: "arrow-right", style: "solid" })}
                    onClick={() => {
                      setChannelPicX(channelPicX + 10);
                    }}
                  />
                </div>
              </div>
              {selectedChannelPic && (
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
                        if (channelPicZoom < 200) {
                          setChannelPicZoom(channelPicZoom + 10);
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
                        if (channelPicZoom > 100) {
                          setChannelPicZoom(channelPicZoom - 10);
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
                          setChannelPicX(0);
                          setChannelPicY(0);
                          setChannelPicZoom(100);
                        }}
                      />
                    </OverlayTrigger>
                  </div>
                </div>
              )}
              <div>
                {selectedChannelPic && (
                  <img
                    className="pic"
                    src={previewChannelPic}
                    alt=""
                    style={{
                      transform: `scale(${channelPicZoom}%) translate(${channelPicX}px, ${channelPicY}px)`,
                      width: "100%",
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        ) : (
          <div onChange={uploadChannelPic}>
            <div className="upload-channel-container upload-container-hover">
              <div className="upload">
                <input
                  type="file"
                  accept="image/*"
                  title=""
                  onChange={uploadChannelPic}
                  className="hidden-input"
                />
                <span>Click here to upload channel image</span>
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
      <div>
        <div className="notes">
          <ul>
            <li>
              *zoom range maxes out at 200% and cannot be zoomed out past
              original picture.
            </li>
            <li>
              **make sure to cover the entire channel image window, if you see a
              red background if you've cropped too far.
            </li>
          </ul>
        </div>
        <Popular
          setChannelName={setChannelName}
          setIsTemplate={setIsTemplate}
          setTemplate={setTemplate}
          setIsActive={setIsActive}
          setChannelTemp={setChannelTemp}
          setIsChannelTemp={setIsChannelTemp}
        />
      </div>
    </div>
  );
}

export default UploadChannel;

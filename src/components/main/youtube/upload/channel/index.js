import React from "react";
import "./style.index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Tooltip from "react-bootstrap/Tooltip";
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
            <div className="upload-channel-container">
              <div className="crop-border">
                <div className="vertical">
                  <FontAwesomeIcon
                    className="arrow-up"
                    icon={["fa", "arrow-up"]}
                    onClick={() => {
                      setChannelPicY(channelPicY + 10);
                    }}
                  />
                  <FontAwesomeIcon
                    className="arrow-down"
                    icon={["fa", "arrow-down"]}
                    onClick={() => {
                      setChannelPicY(channelPicY - 10);
                    }}
                  />
                </div>
                <div className="horizontal">
                  <FontAwesomeIcon
                    className="arrow-left"
                    icon={["fa", "arrow-left"]}
                    onClick={() => {
                      setChannelPicX(channelPicX + 10);
                    }}
                  />
                  <FontAwesomeIcon
                    className="arrow-right"
                    icon={["fa", "arrow-right"]}
                    onClick={() => {
                      setChannelPicX(channelPicX - 10);
                    }}
                  />
                </div>
              </div>
              {selectedChannelPic && (
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
                        if (channelPicZoom < 200) {
                          setChannelPicZoom(channelPicZoom + 10);
                        }
                      }}
                    />
                    <FontAwesomeIcon
                      className="zoom"
                      icon={["fa", "magnifying-glass-minus"]}
                      onClick={() => {
                        if (channelPicZoom > 100) {
                          setChannelPicZoom(channelPicZoom - 10);
                        }
                      }}
                    />
                  </div>
                  <div>
                    <FontAwesomeIcon
                      className="reset"
                      icon={["fa", "rotate-left"]}
                      onClick={() => {
                        setChannelPicX(0);
                        setChannelPicY(0);
                        setChannelPicZoom(100);
                      }}
                    />
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
                  <FontAwesomeIcon icon={["fa", "upload"]} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        {/* <div className="notes">
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
        </div> */}
        <Popular
          setChannelName={setChannelName}
          setIsTemplate={setIsTemplate}
          setTemplate={setTemplate}
          setIsActive={setIsActive}
          setChannelTemp={setChannelTemp}
          setIsChannelTemp={setIsChannelTemp}
          setSelectedChannelPic={setSelectedChannelPic}
        />
      </div>
    </div>
  );
}

export default UploadChannel;

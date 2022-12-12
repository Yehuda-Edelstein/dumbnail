import React, { useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Channel.scss";
import Crop from "../../../crop/Crop";

function Channel({
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
  setChannelTemp,
  setIsChannelTemp,
  isChannelTemp,
}) {
  const data = require("../../../../../static/popular/youtube/popular.json");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function createTooltip(str) {
    if (str.includes("_")) {
      return str.replace(/_/g, " ").split(".png");
    }
    return str.split(".png");
  }

  function clearChannelTemp() {
    setPreviewChannelPic();
    setSelectedChannelPic();
    setIsChannelTemp(false);
    setChannelName("Channel");
  }

  function reset() {
    setPreviewChannelPic();
    setSelectedChannelPic();
  }

  return (
    <div className="channel-container">
      {
        show ? (
          <Crop
            show={show}
            handleClose={handleClose}
            img={previewChannelPic}
            x={channelPicX}
            y={channelPicY}
            setX={setChannelPicX}
            setY={setChannelPicY}
            zoom={channelPicZoom}
            setZoom={setChannelPicZoom}
          />
        ) : (
          <div>
            <div className="upload-channel-header">
              <h5>Channel</h5>
              <div className="d-flex">
                {selectedChannelPic && (
                  <div>
                    <OverlayTrigger
                      key={"top"}
                      placement={"top"}
                      delay={{ show: "700", hide: "100" }}
                      overlay={<Tooltip id={"tooltip-top"}>Crop</Tooltip>}
                    >
                      <FontAwesomeIcon
                        icon={["fa", "crop"]}
                        onClick={handleShow}
                        className="icon-enabled"
                      />
                    </OverlayTrigger>
                  </div>
                )}
                <div>
                  <OverlayTrigger
                    key={"top"}
                    placement={"top"}
                    delay={{ show: "700", hide: "100" }}
                    overlay={<Tooltip id={"tooltip-top"}>Clear</Tooltip>}
                  >
                    <FontAwesomeIcon
                      icon={["fa", "circle-xmark"]}
                      onClick={
                        selectedChannelPic || isChannelTemp
                          ? clearChannelTemp
                          : null
                      }
                      className={
                        selectedChannelPic || isChannelTemp
                          ? "icon-enabled"
                          : "icon-disabled"
                      }
                    />
                  </OverlayTrigger>
                </div>
              </div>
            </div>
            <div className="upload-channel-body d-flex">
              <div>
                {" "}
                {!selectedChannelPic && (
                  <div onChange={uploadChannelPic}>
                    <div>
                      <div className="upload-channel-pic">
                        <input
                          type="file"
                          accept="image/*"
                          title=""
                          onChange={uploadChannelPic}
                          className="hidden-input"
                        />
                        <div className="upload-channel-label">Upload</div>
                        <FontAwesomeIcon icon={["fa", "upload"]} />
                      </div>
                    </div>
                  </div>
                )}
                {selectedChannelPic && (
                  <div onChange={uploadChannelPic}>
                    <div>
                      <div className="upload-channel-pic">
                        <input
                          type="file"
                          accept="image/*"
                          title=""
                          onChange={uploadChannelPic}
                          className="hidden-input"
                        />
                        <div className="upload-channel-label">Upload</div>
                        <FontAwesomeIcon icon={["fa", "upload"]} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="scroll-container">
                <div className="before-overlay"></div>
                <div className="scroll d-flex">
                  {data.map((pic) => {
                    return (
                      <OverlayTrigger
                        key={pic}
                        placement={"top"}
                        delay={{ show: "100", hide: "10" }}
                        overlay={
                          <Tooltip id={"tooltip-top"}>
                            {createTooltip(pic)}
                          </Tooltip>
                        }
                      >
                        <div
                          className="popular"
                          key={pic}
                          onClick={() => {
                            setIsChannelTemp(true);
                            setSelectedChannelPic();
                            setChannelTemp(pic);
                            setChannelName(createTooltip(pic));
                          }}
                        >
                          <img
                            src={require(`../../../../../static/popular/youtube/${pic}`)}
                            alt=""
                          />
                        </div>
                      </OverlayTrigger>
                    );
                  })}
                </div>
                <div className="overlay"></div>
              </div>
            </div>
          </div>
        )
        // </div>
      }
      {/* <div className="d-grid">
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
      <div> */}
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
    </div>
  );
}

export default Channel;

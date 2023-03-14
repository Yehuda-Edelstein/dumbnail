import React, { useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Channel.scss";
import Crop from "../../../main/crop/Crop";

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
  const data = require("../../../../static/popular/youtube/popular.json");

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

  return (
    <div className="channel-container">
      {show ? (
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
              <div className="scroll">
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
                          src={require(`../../../../static/popular/youtube/${pic}`)}
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
      )}
    </div>
  );
}

export default Channel;

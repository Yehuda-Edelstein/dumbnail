import React, { useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Channel.scss";
import Crop from "../../main/crop/Crop";
import data from "../../../static/popular/youtube/popular.json";
import { createTooltip, upload } from "../../../helpers/Helpers";

function Channel({
  selectedChannelPic,
  previewChannelPic,
  setSelectedChannelPic,
  setPreviewChannelPic,
  isChannelTemp,
  setIsChannelTemp,
  channelPicZoom,
  setChannelPicZoom,
  channelPicX,
  channelPicY,
  setChannelPicX,
  setChannelPicY,
  setChannelName,
  setChannelTemp,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="upload-container">
      {show ? (
        <Crop
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
          <div className="upload-container-header">
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
                      !selectedChannelPic || !isChannelTemp
                        ? () => {
                            setPreviewChannelPic();
                            setSelectedChannelPic();
                            setIsChannelTemp(false);
                            setChannelName("Channel");
                          }
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
          <div className="upload-container-body">
            <div>
              <div className="upload-channel-pic">
                <input
                  type="file"
                  accept="image/*"
                  title=""
                  onChange={(ev) => {
                    setSelectedChannelPic(upload(ev));
                  }}
                  className="hidden-input"
                />
                <div className="upload-channel-label">Upload</div>
                <FontAwesomeIcon icon={["fa", "upload"]} />
              </div>
            </div>
            <div className="scroll-container">
              <div className="before-overlay"></div>
              <div className="scroll">
                {data.map((pic) => {
                  return (
                    // maybe get rid of this?
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
                          src={require(`../../../static/popular/youtube/${pic}`)}
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

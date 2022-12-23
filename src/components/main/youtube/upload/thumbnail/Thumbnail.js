import React, { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Thumbnail.scss";
import Crop from "../../../crop/Crop";

function Thumbnail({
  uploadThumbnail,
  clearTemp,
  thumbZoom,
  setThumbZoom,
  thumbX,
  thumbY,
  setThumbX,
  setThumbY,
  selectedThumb,
  previewThumb,
  setChannelName,
  isTemplate,
  setIsTemplate,
  setTemplate,
  setPreviewThumb,
  setSelectedThumb,
  setIsActive,
  setChannelTemp,
  setIsChannelTemp,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const data = require("../../../../../static/temps/youtube/popular.json");

  function reset() {
    setPreviewThumb();
    setSelectedThumb();
  }

  return (
    <div className="thumbnail-container">
      {show ? (
        <Crop
          show={show}
          handleClose={handleClose}
          img={previewThumb}
          x={thumbX}
          y={thumbY}
          setX={setThumbX}
          setY={setThumbY}
          zoom={thumbZoom}
          setZoom={setThumbZoom}
        />
      ) : (
        <div>
          <div className="upload-thumb-header">
            <h5>Thumbnail</h5>
            <div className="d-flex">
              {selectedThumb && (
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
                    onClick={!selectedThumb ? null : reset}
                    className={
                      !selectedThumb ? "icon-disabled" : "icon-enabled"
                    }
                  />
                </OverlayTrigger>
              </div>
              <div>
                <OverlayTrigger
                  key={"top"}
                  placement={"top"}
                  delay={{ show: "700", hide: "100" }}
                  overlay={<Tooltip id={"tooltip-top"}>Clear template</Tooltip>}
                >
                  <FontAwesomeIcon
                    icon={["fa", "rotate-left"]}
                    onClick={!isTemplate ? null : clearTemp}
                    className={!isTemplate ? "icon-disabled" : "icon-enabled"}
                  />
                </OverlayTrigger>
              </div>
            </div>
          </div>
          <div className="upload-thumb-body d-flex">
            <div className="upload-thumb-container">
              {!selectedThumb && (
                <div onChange={uploadThumbnail}>
                  <div>
                    <div className="upload-thumb">
                      <input
                        type="file"
                        accept="image/*"
                        title=""
                        onChange={uploadThumbnail}
                        className="hidden-input"
                      />
                      <div className="upload-thumb-label">Upload</div>
                      <FontAwesomeIcon icon={["fa", "upload"]} />
                    </div>
                  </div>
                </div>
              )}
              {selectedThumb && (
                <div onChange={uploadThumbnail}>
                  <div>
                    <div className="upload-thumb">
                      <input
                        type="file"
                        accept="image/*"
                        title=""
                        onChange={uploadThumbnail}
                        className="hidden-input"
                      />
                      <div className="upload-thumb-label">Upload</div>
                      <FontAwesomeIcon icon={["fa", "upload"]} />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="scroll-container">
              <div className="before-overlay"></div>
              <div className="scroll d-flex">
                {/* <div className="before-overlay"></div> */}

                {data.map((temp) => {
                  return (
                    <div
                      className="temp d-grid"
                      key={temp.thumb}
                      onClick={() => {
                        setIsTemplate(true);
                        setIsChannelTemp(true);
                        setTemplate(temp.thumb);
                        setChannelTemp(temp.thumb);
                        setChannelName(temp.name);
                      }}
                    >
                      <div className="temp-label">{temp.name}</div>
                      <img
                        className="border-top-0"
                        src={require(`../../../../../static/temps/youtube/${temp.thumb}`)}
                        alt=""
                      />
                    </div>
                  );
                })}
                <div className="overlay"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Thumbnail;

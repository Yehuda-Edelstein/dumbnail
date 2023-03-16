import React, { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Thumbnail.scss";
import Crop from "../../main/crop/Crop";
import { upload } from "../../../helpers/Helpers";
import data from "../../../static/temps/youtube/popular.json";

function Thumbnail({
  selectedThumb,
  previewThumb,
  setSelectedThumb,
  setPreviewThumb,
  isTemplate,
  setIsTemplate,
  setTemplate,
  setIsChannelTemp,
  setChannelTemp,
  setChannelName,
  thumbX,
  thumbY,
  thumbZoom,
  setThumbX,
  setThumbY,
  setThumbZoom,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="upload-container">
      {show ? (
        <Crop
          handleClose={handleClose}
          img={previewThumb}
          x={thumbX}
          y={thumbY}
          zoom={thumbZoom}
          setX={setThumbX}
          setY={setThumbY}
          setZoom={setThumbZoom}
          ratio={"thumbnail"}
        />
      ) : (
        <div>
          <div className="upload-container-header">
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
                    onClick={
                      !selectedThumb
                        ? null
                        : () => {
                            setPreviewThumb();
                            setSelectedThumb();
                          }
                    }
                    className={
                      !selectedThumb ? "icon-disabled" : "icon-enabled"
                    }
                  />
                </OverlayTrigger>
              </div>
              <OverlayTrigger
                key={"top"}
                placement={"top"}
                delay={{ show: "700", hide: "100" }}
                overlay={<Tooltip id={"tooltip-top"}>Clear template</Tooltip>}
              >
                <FontAwesomeIcon
                  icon={["fa", "rotate-left"]}
                  onClick={
                    !isTemplate
                      ? null
                      : () => {
                          setIsTemplate(false);
                          setIsChannelTemp(false);
                          setChannelName("Channel");
                        }
                  }
                  className={!isTemplate ? "icon-disabled" : "icon-enabled"}
                />
              </OverlayTrigger>
            </div>
          </div>
          <div className="upload-container-body">
            <div>
              <div className="upload-thumb">
                <input
                  type="file"
                  accept="image/*"
                  title=""
                  onChange={(ev) => {
                    setSelectedThumb(upload(ev));
                  }}
                  className="hidden-input"
                />
                <div className="upload-thumb-label">Upload</div>
                <FontAwesomeIcon icon={["fa", "upload"]} />
              </div>
            </div>
            <div className="scroll-container">
              <div className="before-overlay"></div>
              <div className="scroll temps">
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
                        src={require(`../../../static/temps/youtube/${temp.thumb}`)}
                        alt=""
                      />
                    </div>
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

export default Thumbnail;

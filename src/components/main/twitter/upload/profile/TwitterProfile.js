import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import Crop from "../../../crop/Crop";
import "./TwitterProfile.scss";

function TwitterProfile({
  setIsPopular,
  isPopular,
  setName,
  setHandle,
  setPopular,
  setSelectedProf,
  profZoom,
  profX,
  profY,
  setProfX,
  setProfY,
  setProfZoom,
  selectedProf,
  previewProf,
  uploadProf,
}) {
  const data = require("../../../../../static/popular/twitter/popular.json");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // turn this into a helper function
  function createTooltip(str) {
    if (str.includes("_")) {
      return str.replace(/_/g, " ").split(".png");
    }
    return str.split(".png");
  }

  function reset() {
    setSelectedProf();
    setIsPopular(false);
    setName("Name");
    setHandle("Handle");
  }

  return (
    <div className="profile-container">
      {show ? (
        <Crop
          show={show}
          handleClose={handleClose}
          img={previewProf}
          x={profX}
          y={profY}
          setX={setProfX}
          setY={setProfY}
          zoom={profZoom}
          setZoom={setProfZoom}
        />
      ) : (
        <div>
          <div className="upload-profile-header">
            <h5>Profile</h5>
            <div className="d-flex">
              {selectedProf && (
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
                    onClick={selectedProf || isPopular ? reset : null}
                    className={
                      selectedProf || isPopular
                        ? "icon-enabled"
                        : "icon-disabled"
                    }
                  />
                </OverlayTrigger>
              </div>
            </div>
          </div>
          <div className="upload-profile-body d-flex">
            <div>
              {!selectedProf && (
                <div onChange={uploadProf}>
                  <div>
                    <div className="upload-profile-pic">
                      <input
                        type="file"
                        accept="image/*"
                        title=""
                        onChange={uploadProf}
                        className="hidden-input"
                      />
                      <div className="upload-channel-label">Upload</div>
                      <FontAwesomeIcon icon={["fa", "upload"]} />
                    </div>
                  </div>
                </div>
              )}
              {selectedProf && (
                <div onChange={uploadProf}>
                  <div>
                    <div className="upload-profile-pic">
                      <input
                        type="file"
                        accept="image/*"
                        title=""
                        onChange={uploadProf}
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
                {data.map((pop) => {
                  return (
                    <OverlayTrigger
                      key={pop.handle}
                      placement={"top"}
                      delay={{ show: "100", hide: "10" }}
                      overlay={
                        <Tooltip id={"tooltip-top"}>
                          {createTooltip(pop.img)}
                        </Tooltip>
                      }
                    >
                      <div
                        className="profile"
                        key={pop.handle}
                        onClick={() => {
                          setIsPopular(true);
                          setSelectedProf();
                          setPopular(pop.img);
                          setName(pop.name);
                          setHandle(pop.handle);
                        }}
                      >
                        <img
                          src={require(`./../../../../../static/popular/twitter/${pop.img}`)}
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

export default TwitterProfile;

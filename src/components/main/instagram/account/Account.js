import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { createTooltip, upload } from "../../../../helpers/Helpers";
import Crop from "../../crop/Crop";
import "./Account.scss";

function Account({
  isPopular,
  setIsPopular,
  setPopular,
  setUsername,
  preview,
  setPreview,
  selected,
  setSelected,
  x,
  setX,
  y,
  setY,
  zoom,
  setZoom,
}) {
  // randomize order or sort better, but prob just randomize
  const data = require("../../../../static/popular/instagram/popular.json");

  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  function reset() {
    setIsPopular(false);
    setUsername("Username");
    setPreview();
    setSelected();
  }

  return (
    <div className="instagram-account-container">
      {show ? (
        <Crop
          show={show}
          handleClose={toggle}
          img={preview}
          x={x}
          y={y}
          zoom={zoom}
          setX={setX}
          setY={setY}
          setZoom={setZoom}
          ratio={"user"}
        />
      ) : (
        <div>
          <div className="upload-account-header">
            <h5>Account</h5>
            <div className="d-flex">
              {selected && (
                <div>
                  <OverlayTrigger
                    key={"top"}
                    placement={"top"}
                    delay={{ show: "700", hide: "100" }}
                    overlay={<Tooltip id={"tooltip-top"}>Crop</Tooltip>}
                  >
                    <FontAwesomeIcon
                      icon={["fa", "crop"]}
                      onClick={toggle}
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
                    onClick={selected || isPopular ? reset : null}
                    className={
                      selected || isPopular ? "icon-enabled" : "icon-disabled"
                    }
                  />
                </OverlayTrigger>
              </div>
            </div>
          </div>
          <div className="upload-account-body d-flex">
            <div className="upload-account-container">
              {!selected && (
                <div
                  onChange={(ev) => {
                    upload(ev, setSelected);
                    setIsPopular(false);
                  }}
                >
                  <div>
                    <div className="upload-account">
                      <input
                        type="file"
                        accept="image/*"
                        title=""
                        onChange={(ev) => {
                          upload(ev, setSelected);
                        }}
                        className="hidden-input"
                      />
                      <div className="upload-account-label">Upload</div>
                      <FontAwesomeIcon icon={["fa", "upload"]} />
                    </div>
                  </div>
                </div>
              )}
              {selected && (
                <div>
                  <div>
                    <div className="upload-account">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(ev) => {
                          upload(ev, setSelected);
                        }}
                        title=""
                        className="hidden-input"
                      />
                      <div className="upload-account-label">Upload</div>
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
                          setSelected();
                          setPopular(pop.img);
                          setUsername(pop.name);
                        }}
                      >
                        <img
                          src={require(`./../../../../static/popular/instagram/${pop.img}`)}
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

export default Account;

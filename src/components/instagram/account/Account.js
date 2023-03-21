import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { upload } from "../../../helpers/Helpers";
import Crop from "../../crop/Crop";
import data from "./../../../assets/images/instagram/popular.json";

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

  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  return (
    <div className="upload-container">
      {show ? (
        <Crop
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
          <div className="upload-container-header">
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
                    onClick={
                      selected || isPopular
                        ? () => {
                            setIsPopular(false);
                            setUsername("Username");
                            setPreview();
                            setSelected();
                          }
                        : null
                    }
                    className={
                      selected || isPopular ? "icon-enabled" : "icon-disabled"
                    }
                  />
                </OverlayTrigger>
              </div>
            </div>
          </div>
          <div className="upload-container-body">
            <div>
              <div className="upload-profile-pic">
                <input
                  type="file"
                  accept="image/*"
                  title=""
                  onChange={(ev) => {
                    setSelected(upload(ev));
                  }}
                  className="hidden-input"
                />
                <div className="upload-profile-label">Upload</div>
                <FontAwesomeIcon icon={["fa", "upload"]} />
              </div>
            </div>
            <div className="scroll-container">
              <div className="before-overlay"></div>
              <div className="scroll">
                {data.map((pop) => {
                  return (
                    // <OverlayTrigger
                    //   key={pop.handle}
                    //   placement={"top"}
                    //   delay={{ show: "100", hide: "10" }}
                    //   overlay={
                    //     <Tooltip id={"tooltip-top"}>
                    //       {createTooltip(pop.img)}
                    //     </Tooltip>
                    //   }
                    // >
                    <div
                      className="popular"
                      key={pop.username}
                      onClick={() => {
                        setIsPopular(true);
                        setSelected();
                        setPopular(pop.img);
                        setUsername(pop.username);
                      }}
                    >
                      <img
                        src={require(`./../../../assets/images/instagram/${pop.img}`)}
                        alt=""
                      />
                    </div>
                    // </OverlayTrigger>
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

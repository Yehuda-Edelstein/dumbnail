import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import Crop from "../../crop/Crop";
import data from "../../../assets/images/twitter/popular.json";
import { upload } from "../../../helpers/Helpers";

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
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="upload-container">
      {show ? (
        <Crop
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
          <div className="upload-container-header">
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
                    onClick={
                      selectedProf || isPopular
                        ? () => {
                            setSelectedProf();
                            setIsPopular(false);
                            setName("Name");
                            setHandle("Handle");
                          }
                        : null
                    }
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
          <div className="upload-container-body">
            <div>
              <div className="upload-profile-pic">
                <input
                  type="file"
                  accept="image/*"
                  title=""
                  onChange={(ev) => {
                    setSelectedProf(upload(ev));
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
                        src={require(`../../../assets/images/twitter/${pop.img}`)}
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

export default TwitterProfile;

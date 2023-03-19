import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { upload } from "../../../../helpers/Helpers";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Crop from "../../../crop/Crop";
import "./Photo.scss";

function Photo({
  previewPhoto,
  selectedPhoto,
  setPreviewPhoto,
  setSelectedPhoto,
  photoX,
  photoY,
  photoZoom,
  setPhotoX,
  setPhotoY,
  setPhotoZoom,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function reset() {
    setPreviewPhoto();
    setSelectedPhoto();
  }

  return (
    <div className="instagram-photo-container">
      {show ? (
        <Crop
          show={show}
          handleClose={handleClose}
          img={previewPhoto}
          x={photoX}
          y={photoY}
          zoom={photoZoom}
          setX={setPhotoX}
          setY={setPhotoY}
          setZoom={setPhotoZoom}
          ratio={"instagram-post"}
        />
      ) : (
        <div>
          <div className="upload-photo-header">
            <h5>Photo</h5>
            <div className="d-flex">
              {selectedPhoto && (
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
                    onClick={!selectedPhoto ? null : reset}
                    className={
                      !selectedPhoto ? "icon-disabled" : "icon-enabled"
                    }
                  />
                </OverlayTrigger>
              </div>
            </div>
          </div>
          <div className="upload-photo-body d-flex">
            <div className="upload-photo-container">
              {!selectedPhoto && (
                <div
                  onChange={(ev) => {
                    upload(ev, setSelectedPhoto);
                  }}
                >
                  <div>
                    <div className="upload-photo">
                      <input
                        type="file"
                        accept="image/*"
                        title=""
                        onChange={(ev) => {
                          upload(ev, setSelectedPhoto);
                        }}
                        className="hidden-input"
                      />
                      <div className="upload-photo-label">Upload</div>
                      <FontAwesomeIcon icon={["fa", "upload"]} />
                    </div>
                  </div>
                </div>
              )}
              {selectedPhoto && (
                <div>
                  <div>
                    <div className="upload-photo">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(ev) => {
                          upload(ev, setSelectedPhoto);
                        }}
                        title=""
                        className="hidden-input"
                      />
                      <div className="upload-photo-label">Upload</div>
                      <FontAwesomeIcon icon={["fa", "upload"]} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Photo;

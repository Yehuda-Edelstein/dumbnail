import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TwitterProfilePic({
  profZoom,
  profX,
  profY,
  setProfX,
  setProfY,
  setProfZoom,
  selectedProf,
  previewProf,
  uploadProf,
  setPreviewProf,
  setSelectedProf,
}) {
  function reset() {
    setPreviewProf();
    setSelectedProf();
  }
  return (
    <div className="d-grid">
      {selectedProf ? (
        <div>
          <div className="upload-container">
            <div className="crop-border">
              <div className="vertical">
                <FontAwesomeIcon
                  className="arrow-up"
                  icon={["fa", "arrow-up"]}
                  onClick={() => {
                    setProfY(profY + 10);
                  }}
                />
                <FontAwesomeIcon
                  className="arrow-down"
                  icon={["fa", "arrow-down"]}
                  onClick={() => {
                    setProfY(profY - 10);
                  }}
                />
              </div>
              <div className="horizontal">
                <FontAwesomeIcon
                  className="arrow-left"
                  icon={["fa", "arrow-left"]}
                  onClick={() => {
                    setProfX(profX + 10);
                  }}
                />
                <FontAwesomeIcon
                  className="arrow-right"
                  icon={["fa", "arrow-right"]}
                  onClick={() => {
                    setProfX(profX - 10);
                  }}
                />
              </div>
            </div>
            {selectedProf && (
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
                      if (profZoom < 200) {
                        setProfZoom(profZoom + 10);
                      }
                    }}
                  />
                  <FontAwesomeIcon
                    className="zoom"
                    icon={["fa", "magnifying-glass-minus"]}
                    onClick={() => {
                      if (profZoom > 100) {
                        setProfZoom(profZoom - 10);
                      }
                    }}
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    className="reset"
                    icon={["fa", "rotate-left"]}
                    onClick={() => {
                      setProfX(0);
                      setProfY(0);
                      setProfZoom(100);
                    }}
                  />
                </div>
              </div>
            )}
            <div>
              {selectedProf && (
                <img
                  className="pic"
                  src={previewProf}
                  alt=""
                  style={{
                    transform: `scale(${profZoom}%) translate(${profX}px, ${profY}px)`,
                    width: "100%",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div onChange={uploadProf}>
          <div className="upload-container upload-container-hover">
            <div className="upload">
              <input
                type="file"
                accept="image/*"
                title=""
                onChange={uploadProf}
                className="hidden-input"
              />
              <span>Click here to upload profile pic</span>
              <div>
                <FontAwesomeIcon icon={["fa", "upload"]} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TwitterProfilePic;

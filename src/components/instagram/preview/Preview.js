import React, { useRef } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Switch from "../../switch/Switch";
import { addCommas, download } from "../../../helpers/Helpers";
import v from "./../../../assets/images/instagram/instagram-verified.png";
import el from "./../../../assets/images/instagram/instagram-elipses.png";
import da from "./../../../assets/images/instagram/dark-elip.png";
import dmBar from "./../../../assets/images/instagram/dm-bar.png";
import lmBar from "./../../../assets/images/instagram/lm-bar.png";
import dmSave from "./../../../assets/images/instagram/dm-save.png";
import lmSave from "./../../../assets/images/instagram/lm-save.png";

import "./Preview.scss";

function Preview({
  isPopular,
  popular,
  photoZoom,
  photoX,
  photoY,
  profileZoom,
  profileX,
  profileY,
  previewPhoto,
  selectedPhoto,
  selectedProfile,
  previewProfile,
  switchDevice,
  setSwitchDevice,
  isDarkMode,
  setIsDarkMode,
  username,
  isVerified,
  likes,
  description,
  comments,
  month,
  day,
  year,
  setIsLiked,
}) {
  const ref = useRef(null);
  return (
    <div className="preview-container">
      <h5>Preview</h5>
      <div className="preview-header">
        <OverlayTrigger
          key={"right"}
          placement={"right"}
          delay={{ show: "700", hide: "100" }}
          overlay={<Tooltip id={"tooltip-right"}>Toggle mode</Tooltip>}
        >
          <div className="d-flex switch">
            <Switch
              isOn={switchDevice}
              handleToggle={() => {
                setSwitchDevice(!switchDevice);
                setIsDarkMode(!isDarkMode);
              }}
              bgOn={"rgba(193, 53, 132, .5)"}
              bgOff={"rgba(193, 53, 132, 0.25)"}
            />
          </div>
        </OverlayTrigger>
        {switchDevice ? <h4>[ Dark ]</h4> : <h4>[ Light ]</h4>}
      </div>
      <div className="border border-dark">
        <div
          ref={ref}
          className={
            switchDevice
              ? "instagram-preview-box dark"
              : "instagram-preview-box light"
          }
        >
          <div className="post-header">
            <div className="profile-image">
              {isPopular && (
                <img
                  src={require(`./../../../assets/images/instagram/${popular}`)}
                  alt=""
                />
              )}
              {selectedProfile && (
                <img
                  src={previewProfile}
                  alt=""
                  style={{
                    transform: `scale(${profileZoom}%) translate(${profileX}px, ${profileY}px)`,
                  }}
                />
              )}
              {!isPopular && !selectedProfile && (
                <div className="account-backdrop"></div>
              )}
            </div>
            <div className="username">
              {username}
              {isVerified && (
                <span>
                  <img className="instagram-verified" src={v} alt="" />
                </span>
              )}
            </div>
            <div>
              {switchDevice ? (
                <img src={da} alt="" className="post-header-options" />
              ) : (
                <img src={el} alt="" className="post-header-options" />
              )}
            </div>
          </div>
          <div className="post-body">
            {selectedPhoto ? (
              <img
                src={previewPhoto}
                alt=""
                style={{
                  transform: `scale(${photoZoom}%) translate(${photoX}px, ${photoY}px)`,
                }}
              />
            ) : (
              <div className="upload-photo-backdrop"></div>
            )}
          </div>
          <div className="post-footer">
            <div className="post-footer-data">
              <div>
                {switchDevice ? (
                  <div className="like-bar">
                    <img src={dmBar} alt="" className="bar" />
                    <img src={dmSave} alt="" className="save" />
                  </div>
                ) : (
                  <div className="like-bar">
                    <img src={lmBar} alt="" className="bar" />
                    <img src={lmSave} alt="" className="save" />
                  </div>
                )}
              </div>
            </div>
            <div className="post-data">
              {likes > 1 ? (
                <div className="likes">{addCommas(likes)} likes</div>
              ) : (
                <div className="likes">{likes} like</div>
              )}
              <div className="description">
                <span className="username">{username}</span> {description}
              </div>
              {comments > 1 ? (
                <div className="comments">
                  View all {addCommas(comments)} comments
                </div>
              ) : (
                <div className="comments">View {comments} comment</div>
              )}
            </div>
            {/* <div className="date">
              <div className="month">{month}</div>
              <div className="day">{day}</div>
              {y !== year && <div className="year">{year}</div>}
            </div> */}
          </div>
        </div>
        <button
          className="post-download"
          onClick={() => {
            download(ref, "post");
          }}
        >
          DOWNLOAD
        </button>
      </div>
      <div className="notes">
        <ul>
          <li>1. Max zoom width is 200%</li>
          <li>
            2. You <em>can</em> crop the picture out of frame so be careful.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Preview;

import React, { useRef } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Switch from "../../switch/Switch";
import { addCommas, download } from "../../../../helpers/Helpers";
import v from "../../../../static/instagram/instagram-verified.png";
import el from "../../../../static/instagram/instagram-elipses.png";
import da from "../../../../static/instagram/dark-elip.png";
import bar from "../../../../static/instagram/like-bar.png";
import dark from "../../../../static/instagram/dark-bar.png";
import "./Preview.scss";

const d = new Date();
const y = d.getFullYear();

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
    <div className="instagram-post-preview instagram-post-width">
      <h5>Preview</h5>
      <div className="instagram-post-preview-header">
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
              ? "instagram-post-preview-container dark"
              : "instagram-post-preview-container light"
          }
        >
          <div className="post-header">
            <div className="profile-image">
              {isPopular && (
                <img
                  src={require(`./../../../../static/popular/instagram/${popular}`)}
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
              <div className="like-bar">
                {switchDevice ? (
                  <img src={dark} alt="" />
                ) : (
                  <img src={bar} alt="" />
                )}
              </div>
            </div>
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
    </div>
  );
}

export default Preview;

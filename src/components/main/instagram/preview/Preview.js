import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Switch from "../../switch/Switch";
import { addCommas } from "../../../../helpers/Helpers";
import v from "../../../../static/instagram/instagram-verified.png";
import el from "../../../../static/instagram/instagram-elipses.png";
import heart from "../../../../static/instagram/instagram-heart.png";
import comment from "../../../../static/instagram/instagram-comment.png";
import share from "../../../../static/instagram/instagram-share.png";
import bar from "../../../../static/instagram/like-bar.png";

import "./Preview.scss";

const d = new Date();
const y = d.getFullYear();

function Preview({
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
  return (
    <div className="preview">
      <h5>Preview</h5>
      <div className="preview-header">
        <OverlayTrigger
          key={"right"}
          placement={"right"}
          delay={{ show: "700", hide: "100" }}
          overlay={<Tooltip id={"tooltip-right"}>Toggle mode</Tooltip>}
        >
          <div className="switch">
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
      <div className="small-screen-margin border border-dark">
        <div
          className={
            switchDevice
              ? "instagram-preview-container dark"
              : "instagram-preview-container light"
          }
        >
          <div className="post-header">
            <div className="profile-image">
              <img
                src={require("./../../../../static/popular/twitter/Ben_Shapiro.png")}
                alt=""
              />
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
              <img src={el} alt="" className="post-header-options" />
            </div>
          </div>
          <div className="post-body">
            <img
              src={require("./../../../../static/popular/twitter/Ben_Shapiro.png")}
              alt=""
            />
          </div>
          <div className="post-footer">
            <div className="post-footer-data">
              <div className="like-bar">
                <img src={bar} alt="" />
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
            <div className="date">
              <div className="month">{month}</div>
              <div className="day">{day}</div>
              {y !== year && <div className="year">{year}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;

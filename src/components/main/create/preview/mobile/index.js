import React from "react";
import "./light.scss";
import "./dark.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

function MobilePreview({
  timestamp,
  title,
  channelName,
  views,
  timeAgo,
  increment,
  selectedThumb,
  previewThumb,
  selectedChannelPic,
  previewChannelPic,
  // for cropping
  thumbZoom,
  thumbX,
  thumbY,
  setThumbX,
  setThumbY,
  //
  isTemplate,
  template,
  channelTemp,
  isDarkMode,
}) {
  return (
    <div className={isDarkMode ? "mobile-preview-dark" : "mobile-preview"}>
      <div className={isDarkMode ? "dark" : "mobile"}>
        <div
          className={
            selectedThumb ? "thumbnail" : "upload-thumbnail thumbnail-border"
          }
        >
          <span className="time-stamp">{timestamp}</span>
          {selectedThumb && (
            <div className="cover-this">
              <img
                className="pic"
                src={previewThumb}
                alt=""
                style={{
                  transform: `scale(${thumbZoom}%) translate(${thumbX}px, ${thumbY}px)`,
                }}
              />
            </div>
          )}
          {isTemplate && (
            <img className="template" alt="" src={template} style={{}} />
          )}
        </div>
        <div className="d-flex">
          <div className="d-flex">
            {selectedChannelPic && !isTemplate && (
              <div className="channel-pic">
                <img src={previewChannelPic} alt="" />
              </div>
            )}
            {!selectedChannelPic && isTemplate && (
              <div className="channel-pic">
                <img src={channelTemp} alt="" />
              </div>
            )}
            {!selectedChannelPic && !isTemplate && (
              <div className="upload-channel-pic"></div>
            )}
          </div>
          <div className="info">
            <div className="d-flex justify-content-between">
              <div className="title">{title}</div>
              <FontAwesomeIcon
                className="mobile-options"
                icon={icon({ name: "ellipsis-vertical", style: "solid" })}
              />
            </div>
            <div className="d-flex">
              <div className="channel-name">{channelName}</div>
              <span className="bullet"></span>
              <div className="views">{views} views</div>
              <span className="bullet"></span>
              <div className="time-ago">
                {timeAgo <= 1 ? (
                  <div className="time-ago">
                    {timeAgo} {increment} ago
                  </div>
                ) : (
                  <div className="time-ago">
                    {timeAgo} {increment}s ago
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobilePreview;

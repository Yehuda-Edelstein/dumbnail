import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import "./style.index.scss";

function DesktopPreview({
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
  thumbZoom,
  isTemplate,
  template,
  channelTemp,
}) {
  return (
    <div className="desktop">
      <div
        className={
          selectedThumb ? "thumbnail" : "upload-thumbnail thumbnail-border"
        }
      >
        <span className="time-stamp">{timestamp}</span>
        {selectedThumb && (
          <div>
            <img
              className="pic"
              src={previewThumb}
              alt=""
              style={{ transform: `scale(${thumbZoom}%)` }}
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
          <div className="title">{title}</div>
          <div className="channel-name">{channelName}</div>
          <div className="d-flex">
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
  );
}

export default DesktopPreview;

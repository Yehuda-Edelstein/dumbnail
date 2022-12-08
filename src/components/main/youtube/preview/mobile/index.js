import React from "react";
import "./light.scss";
import "./dark.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MobilePreview({
  duration,
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
  channelPicZoom,
  channelPicX,
  channelPicY,
  isTemplate,
  template,
  channelTemp,
  isDarkMode,
  isChannelTemp,
}) {
  const x = channelPicX * 0.1;
  const y = channelPicY * 0.1;

  return (
    <div className={isDarkMode ? "mobile-preview-dark" : "mobile-preview"}>
      <div className={isDarkMode ? "dark" : "mobile"}>
        <div
          className={
            selectedThumb ? "thumbnail" : "upload-thumbnail thumbnail-border"
          }
        >
          <span className="time-stamp">{duration}</span>
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
            <img
              className="template"
              alt=""
              src={require(`../../../../../static/temps/youtube/${template}`)}
              style={{}}
            />
          )}
        </div>
        <div className="d-flex">
          <div className="d-flex">
            {selectedChannelPic && !isChannelTemp && (
              <div className="channel-pic">
                <img
                  src={previewChannelPic}
                  alt=""
                  style={{
                    transform: `scale(${channelPicZoom}%) translate(${x}px, ${y}px)`,
                  }}
                />
              </div>
            )}
            {!selectedChannelPic && isChannelTemp && (
              <div className="channel-temp">
                <img
                  src={require(`../../../../../static/popular/youtube/${channelTemp}`)}
                  alt=""
                />
              </div>
            )}
            {!selectedChannelPic && !isTemplate && !isChannelTemp && (
              <div className="upload-channel-pic"></div>
            )}
          </div>
          <div className="info">
            <div className="d-flex justify-content-between">
              <div className="title-container">
                <div className="title">{title}</div>
              </div>
              <FontAwesomeIcon
                className="mobile-options"
                icon={["fa", "ellipsis-vertical"]}
              />
            </div>
            <div className="details">
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

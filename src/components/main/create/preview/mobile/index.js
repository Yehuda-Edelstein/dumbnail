import React from "react";
import "./style.index.scss";
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
  uploadThumbnail,
  uploadChannelPic,
}) {
  return (
    <div>
      <div className="mobile">
        <div
          className={
            selectedThumb ? "thumbnail" : "upload-thumbnail thumbnail-border"
          }
        >
          {!selectedThumb && (
            <div className="upload">
              <input
                type="file"
                accept="image/*"
                onChange={uploadThumbnail}
                className="hidden-input"
              />
              <span>Upload Thumbnail</span>
              <div>
                <FontAwesomeIcon
                  icon={icon({ name: "upload", style: "solid" })}
                />
              </div>
            </div>
          )}
          <span className="time-stamp">{timestamp}</span>
          {selectedThumb && <img className="pic" src={previewThumb} alt="" />}
        </div>

        <div className="d-flex">
          <div className="d-flex">
            {selectedChannelPic ? (
              <img className="channel-pic" src={previewChannelPic} alt="" />
            ) : (
              // <img className="channel-pic" src={user} alt="" />
              <div className="upload-channel-pic">
                <input
                  type="file"
                  accept="image/*"
                  onChange={uploadChannelPic}
                  className="hidden-input"
                />
                <FontAwesomeIcon
                  className="user-plus-icon"
                  icon={icon({ name: "user-plus", style: "solid" })}
                />
              </div>
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

import React, { useCallback, useRef } from "react";
import user from "./../../../static/user.png";
import "./style.index.scss";

function Preview({
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
  setRef,
}) {
  const ref = useRef(null);
  setRef(ref);

  return (
    <div>
      <div className="preview" ref={ref}>
        <div className="thumbnail">
          <span className="time-stamp">{timestamp}</span>
          {selectedThumb && <img className="pic" src={previewThumb} alt="" />}
        </div>

        <div className="d-flex">
          <div className="d-flex">
            {selectedChannelPic ? (
              <img className="channel-pic" src={previewChannelPic} alt="" />
            ) : (
              <img className="channel-pic" src={user} alt="" />
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
    </div>
  );
}

export default Preview;
